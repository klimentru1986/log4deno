import format from 'https://deno.land/x/date_fns/format/index.js';

export const defaultDateFormat = 'dd/MM/yyyy HH:mm:SS';

export function getDateString(formatString?: string) {
    const f = formatString || defaultDateFormat;

    const date = new Date();

    return `${format(date, f, {})}`;
}