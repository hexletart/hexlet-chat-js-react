import { useContext } from 'react';
import LeoProfanityContext from '../contexts/LeoProfanityContext';

const useLeoProfanity = () => useContext(LeoProfanityContext);

export default useLeoProfanity;
