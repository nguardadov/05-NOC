import { EmailService } from './email/email.service';
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasources";
import { logRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { SendEmailLogs } from '../domain/email/send-email-logs';

//adding datasources
const fileSystemLogRepository = new logRepositoryImpl(
    new FileSystemDatasource()
);

const emailService = new EmailService();

export class Server {
    public static start() {
        console.log('Server started ....');

        //mandar email
        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository
        // ).execute([
        //     "nguardadov@gmail.com",
        //     "aruthguardado@gmail.com",
        //     "alessandroguardado609@gmail.com"
        // ]);
        // const emailService = new EmailService(fileSystemLogRepository);
        // emailService.sendEmailWithFileSystemLog([
        //     "nguardadov@gmail.com",
        //     "aruthguardado@gmail.com",
        //     "alessandroguardado609@gmail.com"
        // ]);
        // emailService.sendEmail({
        //     to: "aruthguardado@gmail.com",
        //     subject: "Vivan Los monos",
        //     htmlBody: `
        //     <h3>Logs de sistema - NOC</h3>
        //     <p>
        //         lorem  lorem
        //     </p>
        //     <h2>Vivan los monos</h2>
        //     `
        // });
        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';
        //         // const url = 'http://localhost:3000';
        //         // const date = new Date();
        //         // console.log("5 second ", date)
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error)
        //         )
        //             .execute(url)
        //         //new CheckService().execute('http://localhost:3000')
        //     }
        // );
    }
}