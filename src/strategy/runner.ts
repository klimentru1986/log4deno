import { LogLevel } from '../types/LogLevel.ts';
import { LoggerConfigItem } from '../types/LoggerConfig.ts';
import { consoleRunner } from './consoleRunner.ts';
import { fileRunner } from './fileRunner.ts';
import { Runner } from '../types/Runner.ts';
import { LogFormat } from '../types/LogFormat.ts';

export const runner: Runner = (level: LogLevel, name: string, config: LoggerConfigItem, ...args: any[]) => {
    const levels = config.logLevel || ['DEBUG', 'WARN', 'INFO', 'ERROR', 'CRITICAL'];

    if (!levels.includes(level)) {
        return;
    }

    let types: LogFormat[];
    if (config?.types?.length) {
        types = typeof config.types === 'string' ? [config.types] : config.types;
    } else {
        types = ['console', 'file'];
    }

    if (types.includes('console')) {
        consoleRunner(level, name, config, ...args);
    }

    if (types.includes('file')) {
        fileRunner(level, name, config, ...args);
    }
}