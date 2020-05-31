# log4deno
Log4deno

## Examples
```
export const logger = new Logger();

// Default logging
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
logger.critical('critical');

// Configure example
logger.configure({
    default: {
        type: 'console',
    }
})

// Chain example
logger
    .debug('debug')
    .info('info')
    .warn('warn')
    .error('error')
    .critical('critical');
```

## Features
- [x] Configure
- [x] Console
- [ ] Colors
- [ ] Files save
- [ ] Max file size
- [ ] Custom templates
- [ ] Set avaliable levels 