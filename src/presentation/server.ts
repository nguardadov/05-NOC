import { CheckService } from "../domain/use-cases/checks/check-services";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasources";
import { logRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";

//adding datasources
const fileSystemLogRepository = new logRepositoryImpl(
    new FileSystemDatasource()
);

export class Server {
    public static start() {
        console.log('Server started ....');

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                // const url = 'https://google.com';
                const url = 'http://localhost:3000';
                // const date = new Date();
                // console.log("5 second ", date)
                new CheckService(
                    fileSystemLogRepository,
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error)
                )
                    .execute(url)
                //new CheckService().execute('http://localhost:3000')
            }
        );
    }
}