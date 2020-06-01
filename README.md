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
- [x] Colors
- [ ] Files save
- [ ] Max file size
- [x] Custom templates
- [ ] Set avaliable levels 
- [ ] Documentation