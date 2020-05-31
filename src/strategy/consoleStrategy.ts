import { LogLevel } from '../types/LogLevel.ts';
import { LoggerConfigItem } from '../types/LoggerConfig.ts';


export function consoleStrategy(level: LogLevel, name: string, config: LoggerConfigItem, ...args: any[]) {
    const logTypes: LogLevel[] = ['INFO', 'DEBUG'];
    const warnTypes: LogLevel[] = ['WARN'];
    const errorTypes: LogLevel[] = ['ERROR', 'CRITICAL'];

    if (logTypes.includes(level)) {
        console.log(...args);
        return;
    }

    if (warnTypes.includes(level)) {
        console.warn(...args);
        return;
    }

    if (errorTypes.includes(level)) {
        console.error(...args);
        return;
    }
}