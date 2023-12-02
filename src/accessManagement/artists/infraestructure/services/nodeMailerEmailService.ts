import nodemailer from 'nodemailer';
import { EmailService } from '../../domain/emailService';
import * as dotenv from "dotenv";

dotenv.config();

export class NodemailerEmailService implements EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from:  process.env.EMAIL_USER,
      to,
      subject,
      html: '<h1>Correo de confirmación</h1><h2><A HREF="http://localhost:3000/api/v1/"> Confirmar </A></h2>',
    };

    await this.transporter.sendMail(mailOptions);
  }
}