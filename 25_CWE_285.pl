sub DisplayPrivateMessage {
my($id) = @_;
my $Message = LookupMessageObject($id);
print "From: " . encodeHTML($Message->{from}) . "<br>\n";
print "Subject: " . encodeHTML($Message->{subject}) . "\n";
print "<hr>\n";
print "Body: " . encodeHTML($Message->{body}) . "\n";
}

my $q = new CGI;

if (! AuthenticateUser($q->param('username'), $q->param('password'))) {
ExitError("invalid username or password");
}

my $id = $q->param('id');
DisplayPrivateMessage($id);

# // Result:
# // Vulnerable (01)
# //
# // Attack code / input:
# // 
# //
# // Source: 
# // CWE Mitre
# //
# // URL:
# // https://cwe.mitre.org/data/definitions/285.html
# //
# // Vulnerabilty in line:
# //
# // Extra Context:
# // The following program could be part of a bulletin board system that allows users to send private messages to 
# // each other. This program intends to authenticate the user before deciding whether a private message should be 
# // displayed. Assume that LookupMessageObject() ensures that the $id argument is numeric, constructs a filename based 
# // on that id, and reads the message details from that file. Also assume that the program stores all private messages 
# // for all users in the same directory.
