import { LogFormat } from './LogFormat.ts';
import { LogLevel } from './LogLevel.ts';

export interface LoggerConfigItem {
    types: LogFormat | LogFormat[];
    logFolder?: string;
    fileName?: string;
    logLevel?: LogLevel[];
    dateFormat?: string;
    logFormat?: string;
}

export interface LoggerConfig {
    [key: string]: LoggerConfigItem;
}