export const priceFormatter = (number: number) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(number);
export const datetimeFormatter = (date: Date) => new Intl.DateTimeFormat('en-AU', { dateStyle: "medium", timeStyle: "short" }).format(date);
export const durationFormatter = (duration: number) => {
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / (1000 * 60)) % 60);
    const hours = Math.floor((duration / (1000 * 60 * 60)));

    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedHours = hours === 0 ? '' : hours < 10 ? `0${hours}:` : `${hours}:`;
    const formattedDuration = `${formattedHours}${formattedMinutes}:${formattedSeconds}`;

    return formattedDuration;
}