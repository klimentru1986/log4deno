import { Logger, LoggerConfig } from '../index.ts';

/** Write to file only error and critical */
const logger = new Logger();
const config: LoggerConfig = {
    error: {
        types: 'file',
        fileName: 'Error.log',
        logFolder: './Logs/Errors',
        logLevel: ['ERROR', 'CRITICAL']
    }
}

logger.configure(config);

logger
    .debug('debug message')
    .info('info message')
    .warn('warn message')
    .error(new Error('error message'))
    .critical(new Error('critical message'));