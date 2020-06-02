import { Logger } from '../index.ts';

/** Create instance */
export const logger = new Logger();

/** Usage */
logger.debug('debug message');
logger.info('info');

/** Usage with chain */
logger
    .warn('warn message')
    .error(new Error('error message'))
    .critical(new Error('critical message'));