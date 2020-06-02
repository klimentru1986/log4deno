import format from 'https://deno.land/x/date_fns/format/index.js';

export const defaultDateFormat = 'yyyy-MM-dd HH:mm:ss';

export function getDateString(formatString?: string) {
    const f = formatString || defaultDateFormat;

    const date = new Date();

    return `${format(date, f, {})}`;
}