import { CheckService } from "../domain/use-cases/checks/check-services";
import { CronService } from "./cron/cron-service";

export class Server {
    public static start() {
        console.log('Server started ....');

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com';
                // const date = new Date();
                // console.log("5 second ", date)
                new CheckService(
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error)
                )
                    .execute(url)
                //new CheckService().execute('http://localhost:3000')
            }
        );
    }
}