import { LogLevel } from '../types/LogLevel.ts';
import { LoggerConfigItem } from '../types/LoggerConfig.ts';
import { consoleRunner } from './consoleRunner.ts';
import { fileRunner } from './fileRunner.ts';

export function runner(level: LogLevel, name: string, config: LoggerConfigItem, ...args: any[]) {
    const types = typeof config.types === 'string' ? [config.types] : config.types;

    if (types.includes('console')) {
        consoleRunner(level, name, config, ...args);
    }

    if (types.includes('file')) {
        fileRunner(level, name, config, ...args);
    }
}