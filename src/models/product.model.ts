export interface ProductModel {
    id?: number | string;
    title: string;
    price?: number;
    description: string;
    category?: string;
    image?: string;
    rating?: ProductRating;
}
interface ProductRating {
    rate: number;
    count: number;
}
