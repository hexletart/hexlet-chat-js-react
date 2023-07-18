import { useContext } from 'react';
import ToastsContext from '../contexts/ToastsContext';

const useToastHook = () => useContext(ToastsContext);

export default useToastHook;
