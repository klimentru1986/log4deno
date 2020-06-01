import clc from 'https://deno.land/x/color/index.ts';

import { LogLevel } from '../types/LogLevel.ts';
import { LoggerConfigItem } from '../types/LoggerConfig.ts';
import { getDateString } from '../helpers/date.ts';
import { formatLogMsg } from '../helpers/logFormat.ts';
import { Runner } from '../types/Runner.ts';

export const consoleRunner: Runner = (level: LogLevel, name: string, config: LoggerConfigItem, ...args: any[]) => {
    const logTypes: LogLevel[] = ['INFO', 'DEBUG'];
    const warnTypes: LogLevel[] = ['WARN'];
    const errorTypes: LogLevel[] = ['ERROR', 'CRITICAL'];

    const { dateFormat, logFormat } = config;
    const date = getDateString(dateFormat);
    const logInfo = formatLogMsg(date, level, name, logFormat);

    if (logTypes.includes(level)) {
        console.log(clc.reset.bright.text(logInfo), ...args);
        return;
    }

    if (warnTypes.includes(level)) {
        console.warn(clc.reset.yellow.text(logInfo), ...args);
        return;
    }

    if (errorTypes.includes(level)) {
        console.error(clc.reset.red.text(logInfo), ...args);
        return;
    }
}