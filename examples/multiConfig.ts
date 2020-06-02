import { LoggerConfig, Logger } from '../index.ts';

const isDebug = true;

const logger = new Logger();

/** Static config */
const config: LoggerConfig = {
    default: {
        types: ['console', 'file'],
        fileName: 'LogFile.log',
        logLevel: ['INFO', 'WARN', 'ERROR', 'CRITICAL']
    },
    error: {
        types: 'file',
        fileName: 'Error.log',
        logFolder: './Logs/Errors',
        logLevel: ['ERROR', 'CRITICAL']
    }
};

/** Enabled only in debug mode */
isDebug && (config.debug = {
    types: 'console',
    logLevel: ['DEBUG']
})

logger.configure(config);

logger
    .debug('debug message')
    .info('info message')
    .warn('warn message')
    .error(new Error('error message'))
    .critical(new Error('critical message'));