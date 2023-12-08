import nodemailer from 'nodemailer';
import { EmailService } from '../../domain/emailService';
import * as dotenv from "dotenv";

dotenv.config();

export class NodemailerEmailService implements EmailService {
  private transporter: nodemailer.Transporter;
  private idUser: number;

  constructor(idUser: number) {
    this.idUser = idUser;

    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    const { idUser } = this;

    const mailOptions = {
      from:  process.env.EMAIL_USER,
      to,
      subject,
      html: `<h1>Correo de confirmación</h1><h2><a href="http://localhost:3333/artists/api/v1/artist/validate/${idUser}"> Confirmar </a></h2>`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}