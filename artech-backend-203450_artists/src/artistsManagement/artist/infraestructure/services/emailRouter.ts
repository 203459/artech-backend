import express from 'express';

import { EmailApplicationService } from '../../application/emailApplicationService';
import { NodemailerEmailService } from './nodeMailerEmailService';

const emailRouter = express.Router();

emailRouter.post('/send/:id', async (req, res) => {
    try {
        const { id } = req.params; // Obtener el id del parámetro de la ruta
        const { to, subject, text } = req.body;

        if (!id || !to || !subject || !text) {
            return res.status(400).json({ error: 'Los campos "id," "to," "subject," y "text" son obligatorios.' });
        }

        // Crear una nueva instancia del servicio de correo electrónico con el id proporcionado
        const emailService = new NodemailerEmailService(parseInt(id));

        const emailAppService = new EmailApplicationService(emailService);
        await emailAppService.sendEmail(to, subject, text);

        res.status(200).send('Correo electrónico enviado satisfactoriamente');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error mandando correo electrónico');
    }
});

export { emailRouter };