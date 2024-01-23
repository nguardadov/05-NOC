
export enum LogSeverityLevel {
    low = "low",
    medium = "medium",
    high = "high",
}

export interface LogEntityOptions {
    level: LogSeverityLevel;
    message: string;
    origin: string;
    createdAt?: Date;
}

export class LogEntity {

    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor(option: LogEntityOptions) {
        const { message, level, origin, createdAt = new Date() } = option
        this.message = message;
        this.level = level;
        this.origin = origin;
        this.createdAt = createdAt;
    }

    //factory constructor
    static fromJson = (json: string) => {
        const { message, level, createdAt, origin } = JSON.parse(json);

        const log = new LogEntity({
            message,
            level,
            createdAt,
            origin
        });
        return log;
    }


}