import { RootState } from '../../../store/store';
import { ProductState } from '../product-state.model';

const selectProductState: (state: RootState) => ProductState = (state: RootState) => state.product;

export const selectProducts = (state: RootState) => selectProductState(state).products;
export const selectLoadingError = (state: RootState) => ({
    error: selectProductState(state).error,
    loading: selectProductState(state).loading,
});
