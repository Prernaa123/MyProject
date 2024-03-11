package org.jsp.mailsenderapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;

@RestController
public class MailSendingController {

	@Autowired
	private JavaMailSender javaMailSender;
	@Value("abcdefgh")
	private String token;

	@PostMapping("/send-mail")
	public String sendMail(HttpServletRequest request, @RequestParam String email_id) {
		String siteUrl = request.getRequestURL().toString();
		String url = siteUrl.replace(request.getServletPath(), "/verify") + "?token=" + token;
		MimeMessage message = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message);

		try {
			helper.setSubject("Account verification Successful ");
			helper.setText(url);
			helper.setTo(email_id);
			javaMailSender.send(message);
			return "Mail has been send";
		} catch (MessagingException e) {
			e.printStackTrace();
			return "Cannot Send Mail ";
		}
	}

	@GetMapping("/verify")
	public String verify(@RequestParam String token) {
		if (this.token.equals(token))
			return "verification successful";
		else
			return "cannot verify";
	}
}
