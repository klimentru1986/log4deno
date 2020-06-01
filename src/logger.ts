import { LoggerConfig } from './types/LoggerConfig.ts';
import { defaultConfig } from './defaultConfig.ts';
import { runner } from './strategy/runner.ts';

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
        Object.keys(this.config).forEach(k => runner('DEBUG', k, this.config[k], ...args));
        return this;
    }

    info(...args: any[]): Logger {
        Object.keys(this.config).forEach(k => runner('INFO', k, this.config[k], ...args));
        return this;
    }

    warn(...args: any[]): Logger {
        Object.keys(this.config).forEach(k => runner('WARN', k, this.config[k], ...args));
        return this;
    }

    error(...args: any[]): Logger {
        Object.keys(this.config).forEach(k => runner('ERROR', k, this.config[k], ...args));
        return this;
    }

    critical(...args: any[]): Logger {
        Object.keys(this.config).forEach(k => runner('CRITICAL', k, this.config[k], ...args));
        return this;
    }
}
