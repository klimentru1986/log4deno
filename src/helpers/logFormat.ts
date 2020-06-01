
const defaultFormat = '[$date] [$level] [$name]';

export function formatLogMsg(date: string, level: string, name: string, f = defaultFormat) {
    return f
        .replace('$date', date)
        .replace('$level', level)
        .replace('$name', name);
}