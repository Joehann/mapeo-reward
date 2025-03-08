import {currencyDictionnary} from "../../dictionaries/currency.dictionnary.ts";

export const formatCurrency = ({totalAmount, currency = 'EUR'}: { totalAmount: number; currency?: string }): string => {
    if (!currencyDictionnary[currency]) {
        throw new Error(`Unsupported currency: ${currency}`);
    }

    return `${totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} ${currencyDictionnary[currency]}`;
}