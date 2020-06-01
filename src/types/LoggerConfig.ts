import { LogFormat } from './LogFormat.ts';

export interface LoggerConfigItem {
    type: LogFormat;
    dateFormat?: string;
    logFormat?: string;
}

export interface LoggerConfig {
    [key: string]: LoggerConfigItem;
}