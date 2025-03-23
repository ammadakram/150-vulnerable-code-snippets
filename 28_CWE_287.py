import re
import jsonschema
import jwt

from config import db, vuln_app
from api_views.json_schemas import *
from flask import jsonify, Response, request, json
from models.user_model import User
from app import vuln


def error_message_helper(msg):
    if isinstance(msg, dict):
        return '{ "status": "fail", "message": "' + msg['error'] + '"}'
    else:
        return '{ "status": "fail", "message": "' + msg + '"}'

def token_validator(auth_header):
    if auth_header:
        try:
            auth_token = auth_header.split(" ")[1]
        except:
            auth_token = ""
    else:
        auth_token = ""
    if auth_token:
        return User.decode_auth_token(auth_token)
    else:
        return {'error': 'Invalid token. Please log in again.'}


def update_password(username):
    request_data = request.get_json()
    resp = token_validator(request.headers.get('Authorization'))
    if "error" in resp:
        return Response(error_message_helper(resp), 401, mimetype="application/json")
    else:
        if request_data.get('password'):
            if vuln: 
                user = User.query.filter_by(username=username).first()
                if user:
                    user.password = request_data.get('password')
                    db.session.commit()
                else:
                    return Response(error_message_helper("User Not Found"), 400, mimetype="application/json")
            else:
                user = User.query.filter_by(username=resp['sub']).first()
                user.password = request_data.get('password')
                db.session.commit()
            responseObject = {
                'status': 'success',
                'Password': 'Updated.'
            }
            return Response(json.dumps(responseObject), 204, mimetype="application/json")
        else:
            return Response(error_message_helper("Malformed Data"), 400, mimetype="application/json")


# // Result:
# // Vulnerable (01)
# //
# // Attack code / input:
# // 
# //
# // Source: 
# // Snyk (VAmpi)
# //
# // URL:
# // https://github.com/mustafaasif1/VAmPI/blob/1713b54b601ad29582581eeda4b31fceb1319874/config.py#L13
# //
# // Vulnerabilty in line: 40
# //
# // Extra Context:
# // User controlled API parameter is used to username database field from database instead of the user checked in the <unknown>.
