import { Logger, LoggerConfig } from '../index.ts';

export const logger = new Logger();

// Default logging
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error(new Error('error'));
logger.critical(new Error('critical'));

const config: LoggerConfig = {
    default: {
        type: 'console',
    },
    additional: {
        type: 'console',
        logFormat: '$level - $date',
        dateFormat: 'dd.MMMM.yyyy'
    }
};

// Configure example
logger.configure(config);

// Chain example
logger
    .debug('debug')
    .info('info')
    .warn('warn')
    .error(new Error('error'))
    .critical(new Error('critical'));