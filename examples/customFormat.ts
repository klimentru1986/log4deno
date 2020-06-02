import { LoggerConfig, Logger } from '../index.ts';

const logger = new Logger();
const config: LoggerConfig = {
    formattedLogs: {
        logFormat: '$level - $date',
        dateFormat: 'dd.MMMM.yyyy',
    }
};

logger.configure(config);

logger
    .debug('debug')
    .info('info')
    .warn('warn')
    .error(new Error('error'))
    .critical(new Error('critical'));