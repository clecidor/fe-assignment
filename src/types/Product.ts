import Image from './Image';

export type Price = {
    list_price: number;
    final: number;
};

export type Rebates = {
    instant_amount: number;
    mailin_amount: number;
};

export type RelatedItem = {
    sku: string;
    title: string;
    "~product_type": string;
};

export type Product = {
    sku?: string;
    brand?: string;
    series?: string;
    description?: string;
    prices?: Price;
    rebates?: Rebates;
    is_quick_ship?: boolean;
    tag?: string;
    popularity?: string | null;
    url?: string;
    items?: RelatedItem[]
    image?: Image;
};

export default Product;