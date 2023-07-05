import { ProductModel } from '../product.model';

export interface ProductState {
    products: ProductModel[];
    loading?: boolean;
    error?: string | null;
}
