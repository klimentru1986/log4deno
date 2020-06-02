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
* [x] Set avaliable levels 
* [ ] Reverse logs list
* [ ] Max file size
* [ ] Dynamic configuration

## Usage

### [Simple](https://github.com/klimentru1986/log4deno/blob/master/examples/simple.ts)

``` 
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
```

### [Error logger](https://github.com/klimentru1986/log4deno/blob/master/examples/error.ts)

``` 
/** Write to file only error and critical */
const logger = new Logger();
const config: LoggerConfig = {
    error: {
        types: 'file',
        fileName: 'Error.log',
        logFolder: './Logs/Errors',
        logLevel: ['ERROR', 'CRITICAL']
    }
}

logger.configure(config);
```

### [Custom format](https://github.com/klimentru1986/log4deno/blob/master/examples/customFormat.ts)

``` 
const logger = new Logger();
const config: LoggerConfig = {
    formattedLogs: {
        logFormat: '$level - $date',
        dateFormat: 'dd.MMMM.yyyy',
    }
};

logger.configure(config);
```

### [Multiple configurations](https://github.com/klimentru1986/log4deno/blob/master/examples/multiConfig.ts)

``` 
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
```

## Configuration

* **types**: Array<'console' | 'file'>
* **logFolder**: folder for logs
* **fileName**: log file name
* **logLevel**: Array<'DEBUG' | 'INFO' | 'WARN' | 'ERROR' | 'CRITICAL'>
* **logFormat**: log info output format
* **dateFormat**: date output format

### Default configuration

``` 
export const defaultConfig: LoggerConfig = {
    default: {
        types: ['console', 'file'],
        logFolder: './Logs',
        fileName: 'LogFile.log',
        logLevel: ['DEBUG', 'INFO', 'WARN', 'ERROR', 'CRITICAL']
        logFormat: '[$date] [$level] [$name]',
        dateFormat: 'yyyy-MM-dd HH:mm:ss',
    }
}
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
