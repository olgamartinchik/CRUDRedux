import { createContext } from 'react';
interface IContext {
    onClose: () => void;
    visibleModal: boolean;
}
export const Context = createContext<IContext>({
    onClose: () => {},
    visibleModal: false,
});
