import { logger } from '../index.ts';

logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
logger.critical('critical');

// Chain example
logger
    .debug('debug')
    .info('info')
    .warn('warn')
    .error('error')
    .critical('critical');