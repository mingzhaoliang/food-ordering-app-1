export const priceFormatter = (number: number) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(number);
