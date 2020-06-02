# log4deno

## Overview

**log4deno** is a tool to help the programmer output log statements to a variety of output targets. In case of problems with an application, it is helpful to enable logging so that the problem can be located. 

## Features

* [x] Multipe configurations
* [x] Console output
* [x] Files output
* [x] Configure
* [x] Colors
* [x] Custom templates
* [ ] Max file size
* [x] Set avaliable levels 

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
        logFormat: '$level - $date | $name',
        dateFormat: 'dd.MMMM.yyyy'
    }
};

const Logger = new Logger();

logger.configure(config);
```

## Usage

### Default

``` 
logger.debug('debug message');
logger.info('info message');
logger.warn('warn message');
logger.error('error message');
logger.critical('critical message');
```

### Chain

``` 
logger
    .debug('debug message')
    .info('info message')
    .warn('warn message')
    .error('error message')
    .critical('critical message');
```

## Custom format

### Log format

**Config parametr:** logFormat

**Default value:** '[*$date*] [*$level*] [*$name*]'

**Params:**

* $date - log date
* $level - log level
* $name - log config name

### Date format

**Config parametr:** dateFormat

**Default value:** 'yyyy-MM-dd HH:mm:ss'

**[Avaliable params](https://deno.land/x/date_fns/format/index.js)**
