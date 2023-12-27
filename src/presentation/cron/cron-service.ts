import { CronJob } from "cron";

type CroneTime = string | Date;
type OnTick = () => void;

export class CronService {
    static createJob(cronTime: CroneTime, onTick: OnTick): CronJob {
        const job = new CronJob(
            cronTime, // cronTime
            onTick, // onTick
        );

        job.start();
        return job;
    }
}