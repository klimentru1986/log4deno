
export const defaultLogFormat = '[$date] [$level] [$name]';

export function formatLogMsg(date: string, level: string, name: string, f = defaultLogFormat) {
    return f
        .replace('$date', date)
        .replace('$level', level)
        .replace('$name', name);
}