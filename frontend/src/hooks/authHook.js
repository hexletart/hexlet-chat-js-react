import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const useAuthHook = () => useContext(AuthContext);

export default useAuthHook;
