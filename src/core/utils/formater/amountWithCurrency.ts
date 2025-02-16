export const formatCurrency = ({totalAmount, currency}: { totalAmount: number; currency: string }): string => {
    const currencySymbols: Record<string, string> = {
        EUR: '€',
        USD: '$',
    };

    if (!currencySymbols[currency]) {
        throw new Error(`Unsupported currency: ${currency}`);
    }

    return `${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ${currencySymbols[currency]}`;
}