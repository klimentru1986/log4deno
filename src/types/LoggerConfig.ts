import { LogFormat } from './LogFormat.ts';

export interface LoggerConfigItem {
    types: LogFormat | LogFormat[];
    logFolder?: string;
    fileName?: string;
    dateFormat?: string;
    logFormat?: string;
}

export interface LoggerConfig {
    [key: string]: LoggerConfigItem;
}