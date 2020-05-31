export function getLocalDate() {
    const date = new Date();

    return `${date.toUTCString()}`;
}