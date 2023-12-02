import express from 'express';

import { EmailApplicationService } from '../../application/emailApplicationService';
import { NodemailerEmailService } from './nodeMailerEmailService';

const emailService = new NodemailerEmailService();
const emailAppService = new EmailApplicationService(emailService);

const emailRouter = express.Router();

emailRouter.post('/send', async (req, res) => {

    try {
        const { to, subject, text } = req.body;
        if (!to || !subject || !text) {
            return res.status(400).json({ error: 'Los campos "to," "subject," y "text" son obligatorios.' });
        }
        await emailAppService.sendEmail(to, subject, text);
        res.status(200).send('Correo electrónico enviado satisfactoriamente');
    } catch (error) {
        res.status(500).send('Error mandando correo electrónico');
    }

});

export { emailRouter };