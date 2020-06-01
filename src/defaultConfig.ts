import { LoggerConfig } from './types/LoggerConfig.ts';

export const defaultConfig: LoggerConfig = {
    default: {
        types: ['console', 'file'],
        fileName: 'LogFile.log'
    }
}