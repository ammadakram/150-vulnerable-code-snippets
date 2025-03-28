public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) {

    httpRequest = (HttpServletRequest) request;
    logger.debug("doFilter URL: " + httpRequest.getRequestURL().toString());
    boolean isAuthenticated = this.authenticateUser(httpRequest);

    String samlLogoutRequest;
    if (!isAuthenticated) { 
        samlLogoutRequest = request.getParameter("SAMLResponse");
        logger.info("samlResponse --> " + samlLogoutRequest);

        if (samlLogoutRequest != null) {
            this.handleSAMLReponse(request, response, chain, samlLogoutRequest);
        } else { 

            HttpSession session;
            ProductAccess userBean;
            String requestedUri;

            if (this.isStarshipRequest(httpRequest)) {
               
                session = null != httpRequest.getSession(false)?httpRequest.getSession(false):httpRequest.getSession(true);
                userBean = (ProductAccess)session.getAttribute("USER_IN_SESSION");

                if (userBean == null) { 
                    try {
                      userBean = new ProductAccess();
                      userBean.setCredentialId("");
                      userBean.setAdminPasswordReset(true);
                      userBean.setProductId("cloupia_service_portal");
                      userBean.setProfileId(0);
                      userBean.setRestKey(httpRequest.getHeader("X-Starship-Request-Key"));
                      userBean.setStarshipUserId(httpRequest.getHeader("X-Starship-UserName-Key"));
                      userBean.setLoginName("admin");
                        
                      userBean.setStarshipSessionId(httpRequest.getHeader("X-Starship-UserSession-Key"));
                      requestedUri = httpRequest.getHeader("X-Starship-UserRoles-Key");
                      userBean.setAccessLevel(requestedUri);
                      if(requestedUri != null && requestedUri.equalsIgnoreCase("admin")) {
                          AuthenticationManager authmgr = AuthenticationManager.getInstance();
                          userBean.setAccessLevel("Admin");
                          authmgr.evaluateAllowedOperations(userBean);
                      }

                      session.setAttribute("USER_IN_SESSION", userBean);
                      session.setAttribute("DEFAULT_URL", STARSHIP_DEFAULT_URL);
                      logger.info("userBean:" + userBean.getAccessLevel());
                  } catch (Exception var12) {
                      logger.info("username/password wrong for rest api access - " + var12.getMessage());
                  }

                  logger.info("userBean: " + userBean.getAccessLevel());
                }
            }

            chain.doFilter(request, response);
        }
    }
}

// Result:
// Vulnerable (01)
//
// Attack code / input:
// 
//
// Source: 
// SnoopySecurity
//
// URL:
// https://github.com/snoopysecurity/Vulnerable-Code-Snippets/blob/master/Authentication%20Bypass/CVE-2019-1937
//
// Vulnerabilty in line: