# log4deno

## Overview
log4deno is a tool to help the programmer output log statements to a variety of output targets. In case of problems with an application, it is helpful to enable logging so that the problem can be located. 

## Features
- [x] Console output
- [ ] Files output
- [x] Configure
- [x] Colors
- [x] Custom templates
- [ ] Max file size
- [ ] Set avaliable levels 

## Init logger and configure

### Simple
```
export const logger = new Logger();
```
### With configuration
```
const config: LoggerConfig = {
    default: {
        type: 'console',
    }
}; 

export const logger = new Logger(config);
```
or 
```
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

const Logger = new Logger();

logger.configure(config);
```

## Usage
### Default
```
logger.debug('debug');
logger.info('info');
logger.warn('warn');
logger.error('error');
logger.critical('critical');
```
### Chain
```
logger
    .debug('debug')
    .info('info')
    .warn('warn')
    .error('error')
    .critical('critical');
```

