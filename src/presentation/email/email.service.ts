import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface SendMailOptions {
    to: string | string[],
    subject: string,
    htmlBody: string,
    attachments?: Attachment[]
}

interface Attachment {
    filaname: string,
    path: string,
}
export class EmailService {

    //object to send email
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    })

    constructor() { }

    async sendEmail(options: SendMailOptions): Promise<boolean> {
        const { to, subject, htmlBody, attachments = [] } = options;
        try {
            const sentInformation = await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    async sendEmailWithFileSystemLog(to: string | string[]) {
        const subject = 'Logs del Servidor';
        const htmlBody = `
            <h3>Logs del sistema </h3>
            <p>Vivan los monos </p>
            <p>Ver logs adjuntos</p>
        `

        const attachments: Attachment[] = [
            { filaname: "logs-all.log", path: "./logs-files/logs-all.log" },
            { filaname: "logs-all.log", path: "./logs-files/logs-high.log" },
            { filaname: "logs-all.log", path: "./logs-files/logs-medium.log" },
        ]

        return this.sendEmail({
            to, subject, htmlBody, attachments
        });
    }
}