package org.owasp.webgoat.lessons.pathtraversal;

import static org.owasp.webgoat.container.assignments.AttackResultBuilder.failed;
import static org.owasp.webgoat.container.assignments.AttackResultBuilder.success;
import static org.springframework.http.MediaType.ALL_VALUE;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.owasp.webgoat.container.CurrentUsername;
import org.owasp.webgoat.container.assignments.AssignmentHints;
import org.owasp.webgoat.container.assignments.AttackResult;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@AssignmentHints({
  "path-traversal-zip-slip.hint1",
  "path-traversal-zip-slip.hint2",
  "path-traversal-zip-slip.hint3",
  "path-traversal-zip-slip.hint4"
})
@Slf4j
public class ProfileZipSlip extends ProfileUploadBase {

  public ProfileZipSlip(@Value("${webgoat.server.directory}") String webGoatHomeDirectory) {
    super(webGoatHomeDirectory);
  }

  @PostMapping(
      value = "/PathTraversal/zip-slip",
      consumes = ALL_VALUE,
      produces = APPLICATION_JSON_VALUE)
  @ResponseBody
  public AttackResult uploadFileHandler(
      @RequestParam("uploadedFileZipSlip") MultipartFile file, @CurrentUsername String username) {
    if (!file.getOriginalFilename().toLowerCase().endsWith(".zip")) {
      return failed(this).feedback("path-traversal-zip-slip.no-zip").build();
    } else {
      return processZipUpload(file, username);
    }
  }

  @SneakyThrows
  private AttackResult processZipUpload(MultipartFile file, String username) {
    var tmpZipDirectory = Files.createTempDirectory(username);
    cleanupAndCreateDirectoryForUser(username);
    var currentImage = getProfilePictureAsBase64(username);

    try {
      var uploadedZipFile = tmpZipDirectory.resolve(file.getOriginalFilename());
      FileCopyUtils.copy(file.getBytes(), uploadedZipFile.toFile());

      ZipFile zip = new ZipFile(uploadedZipFile.toFile());
      Enumeration<? extends ZipEntry> entries = zip.entries();
      while (entries.hasMoreElements()) {
        ZipEntry e = entries.nextElement();
        File f = new File(tmpZipDirectory.toFile(), e.getName());
        InputStream is = zip.getInputStream(e);
        Files.copy(is, f.toPath(), StandardCopyOption.REPLACE_EXISTING);
      }

      return isSolved(currentImage, getProfilePictureAsBase64(username));
    } catch (IOException e) {
      return failed(this).output(e.getMessage()).build();
    }
  }

  private AttackResult isSolved(byte[] currentImage, byte[] newImage) {
    if (Arrays.equals(currentImage, newImage)) {
      return failed(this).output("path-traversal-zip-slip.extracted").build();
    }
    return success(this).output("path-traversal-zip-slip.extracted").build();
  }

  @GetMapping("/PathTraversal/zip-slip/")
  @ResponseBody
  public ResponseEntity<?> getProfilePicture(@CurrentUsername String username) {
    return super.getProfilePicture(username);
  }

  @GetMapping("/PathTraversal/zip-slip/profile-image/{username}")
  @ResponseBody
  public ResponseEntity<?> getProfileImage(@PathVariable String username) {
    return ResponseEntity.notFound().build();
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
// https://github.com/mustafaasif1/WebGoat/blob/9c90a24cc06452bda60c259a19862d8b7bf33c3e/src/main/java/org/owasp/webgoat/lessons/pathtraversal/ProfileZipSlip.java#L64
//
// Vulnerabilty in line: 64, 65, 69, 71, 77, 80, 96
// 
// Extra Context:
// Line 64: Unsanitized input from an HTTP parameter flows into exists, where it is used as a path. This may result in a Path Traversal vulnerability and 
// allow an attacker to bypass the logic of the application in the conditional expression.
//
// Line 65: Unsanitized input from an HTTP parameter flows into listFiles, where it is used as a path. This may result in a Path Traversal vulnerability 
// and allow an attacker to manipulate arbitrary files.
//
// Line 69: Unsanitized input from an HTTP parameter flows into org.springframework.util.FileCopyUtils.copy, where it is used as a path. This may result 
// in a Path Traversal vulnerability and allow an attacker to read arbitrary files.
//
// Line 71: Unsanitized input from an HTTP parameter flows into java.util.zip.ZipFile, where it is used as a path. This may result in a Path Traversal 
// vulnerability and allow an attacker to write to arbitrary files.
//
// Line 77: Unsanitized input from an HTTP parameter flows into java.nio.file.Files.copy, where it is used as a path. This may result in a Path Traversal 
// vulnerability and allow an attacker to write to arbitrary files.
//
// Line 80: Unsanitized input from an HTTP parameter flows into listFiles, where it is used as a path. This may result in a Path Traversal vulnerability 
// and allow an attacker to manipulate arbitrary files
//
// Line 96: Unsanitized input from an HTTP parameter flows into listFiles, where it is used as a path. This may result in a Path Traversal vulnerability 
// and allow an attacker to manipulate arbitrary files.
//

