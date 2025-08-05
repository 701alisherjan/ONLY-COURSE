import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { translations } from '../data/translations';

export const useTranslation = () => {
  const currentLanguage = useSelector((state: RootState) => state.language.current);
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return { t, currentLanguage };
};