package org.owasp.webgoat.lessons.pathtraversal;

import static org.springframework.http.MediaType.ALL_VALUE;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import org.owasp.webgoat.container.CurrentUsername;
import org.owasp.webgoat.container.assignments.AssignmentHints;
import org.owasp.webgoat.container.assignments.AttackResult;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@AssignmentHints({
  "path-traversal-profile.hint1",
  "path-traversal-profile.hint2",
  "path-traversal-profile.hint3"
})
public class ProfileUpload extends ProfileUploadBase {

  public ProfileUpload(@Value("${webgoat.server.directory}") String webGoatHomeDirectory) {
    super(webGoatHomeDirectory);
  }

  @PostMapping(
      value = "/PathTraversal/profile-upload",
      consumes = ALL_VALUE,
      produces = APPLICATION_JSON_VALUE)
  @ResponseBody
  public AttackResult uploadFileHandler(
      @RequestParam("uploadedFile") MultipartFile file,
      @RequestParam(value = "fullName", required = false) String fullName,
      @CurrentUsername String username) {
    return super.execute(file, fullName, username);
  }

  @GetMapping("/PathTraversal/profile-picture")
  @ResponseBody
  public ResponseEntity<?> getProfilePicture(@CurrentUsername String username) {
    return super.getProfilePicture(username);
  }
}

// Result:
// Vulnerable (01)
//
// Attack code / input:
//
// Source: 
// Snyk (WebGoat)
//
// URL:
// https://github.com/mustafaasif1/WebGoat/blob/9c90a24cc06452bda60c259a19862d8b7bf33c3e/src/main/java/org/owasp/webgoat/lessons/pathtraversal/ProfileUpload.java#L39
//
// Vulnerabilty in line: 39, 45
// 
// Extra Context:
// Line 39: Unsanitized input from an HTTP parameter flows into org.springframework.util.FileCopyUtils.copy, where it is used as a path. This may result in a Path Traversal 
// vulnerability and allow an attacker to read arbitrary files.
//
// Line 45: Unsanitized input from an HTTP parameter flows into listFiles, where it is used as a path. This may result in a Path Traversal vulnerability and allow an attacker 
// to manipulate arbitrary files.