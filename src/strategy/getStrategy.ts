import { LogLevel } from '../types/LogLevel.ts';
import { LoggerConfigItem } from '../types/LoggerConfig.ts';
import { consoleStrategy } from './consoleStrategy.ts';

export function getStrategy(level: LogLevel, name: string, config: LoggerConfigItem, ...args: any[]) {
    if (config.type === 'console') {
        return consoleStrategy(level, name, config, ...args);
    }
}