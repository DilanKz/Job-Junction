package com.job_junction.utils;

/**
 * @author Dilan
 * @created 03/01/2024 - 05:26 pm
 */

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class SendMail {

    private final JavaMailSender javaMailSender;

    public void sendEmail(String to, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Job Junction OTP");
        message.setText(text);
        javaMailSender.send(message);
    }
}
