import format from 'https://deno.land/x/date_fns/format/index.js';

const defaultFormat = 'dd/MM/yyyy HH:mm:SS';

export function getDateString(formatString?: string) {
    const f = formatString || defaultFormat;

    const date = new Date();

    return `${format(date, f, {})}`;
}