import clc from 'https://deno.land/x/color/index.ts';

import { LogLevel } from '../types/LogLevel.ts';
import { LoggerConfigItem } from '../types/LoggerConfig.ts';
import { getLocalDate } from '../helpers/date.ts';



export function consoleStrategy(level: LogLevel, name: string, config: LoggerConfigItem, ...args: any[]) {
    const logTypes: LogLevel[] = ['INFO', 'DEBUG'];
    const warnTypes: LogLevel[] = ['WARN'];
    const errorTypes: LogLevel[] = ['ERROR', 'CRITICAL'];

    if (logTypes.includes(level)) {
        console.log(clc.reset.text(`${getLocalDate()} [${level}]`), ...args);
        return;
    }

    if (warnTypes.includes(level)) {
        console.warn(clc.yellow.text(`${getLocalDate()} [${level}]`), ...args);
        return;
    }

    if (errorTypes.includes(level)) {
        console.error(clc.red.text(`${getLocalDate()} [${level}]`), ...args);
        return;
    }
}