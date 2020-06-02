import { LoggerConfig } from './types/LoggerConfig.ts';
import { defaultLogFormat } from './helpers/logFormat.ts';
import { defaultDateFormat } from './helpers/date.ts';

export const defaultConfig: LoggerConfig = {
    default: {
        types: ['console', 'file'],
        logFormat: defaultLogFormat,
        dateFormat: defaultDateFormat,
        logFolder: './Logs',
        fileName: 'LogFile.log',
        logLevel: ['DEBUG', 'INFO', 'WARN', 'ERROR', 'CRITICAL']
    }
}