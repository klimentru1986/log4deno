import { LogLevel } from './LogLevel.ts';
import { LoggerConfigItem } from './LoggerConfig.ts';

export type Runner = (level: LogLevel, name: string, config: LoggerConfigItem, ...args: any[]) => void;