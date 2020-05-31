import { LoggerConfig } from './types/LoggerConfig.ts';
import { defaultConfig } from './defaultConfig.ts';
import { getStrategy } from './strategy/getStrategy.ts';

export class Logger {
    private config = defaultConfig;

    constructor(config?: LoggerConfig) {
        config && this.configure(config);
    }

    configure(config: LoggerConfig): Logger {
        this.config = config;
        return this;
    }

    debug(...args: any[]): Logger {
        Object.keys(this.config).forEach(k => getStrategy('DEBUG', k, this.config[k], ...args));
        return this;
    }

    info(...args: any[]): Logger {
        Object.keys(this.config).forEach(k => getStrategy('INFO', k, this.config[k], ...args));
        return this;
    }

    warn(...args: any[]): Logger {
        Object.keys(this.config).forEach(k => getStrategy('WARN', k, this.config[k], ...args));
        return this;
    }

    error(...args: any[]): Logger {
        Object.keys(this.config).forEach(k => getStrategy('ERROR', k, this.config[k], ...args));
        return this;
    }

    critical(...args: any[]): Logger {
        Object.keys(this.config).forEach(k => getStrategy('CRITICAL', k, this.config[k], ...args));
        return this;
    }
}
