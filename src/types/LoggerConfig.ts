import { LogFormat } from './LogFormat.ts';

export interface LoggerConfigItem {
    type: LogFormat;
}

export interface LoggerConfig {
    [key: string]: LoggerConfigItem;
}