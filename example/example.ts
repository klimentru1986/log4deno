import { Logger, LoggerConfig } from '../index.ts';

export const logger = new Logger();

// Default logging
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error(new Error('error'));
logger.critical(new Error('critical'));


// Logger config
const config: LoggerConfig = {
    myConfig: {
        types: ['console', 'file'],
        logFormat: '$level - $date',
        dateFormat: 'dd.MMMM.yyyy',
        fileName: 'MyLogs.log',
        logFolder: 'MyLogModule',
        logLevel: ['ERROR']
    }
};

// Configure example
const advancedLogger = new Logger();
advancedLogger.configure(config);

// Chain example
advancedLogger
    .debug('debug')
    .info('info')
    .warn('warn')
    .error(new Error('error'))
    .critical(new Error('critical'));