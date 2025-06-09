import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import clsx from 'clsx';

import { enumToSelectOptions, Select, SelectOption } from '@/shared/ui/Select';

import languageStorage from '../../model/languageStorage';
import { Language } from '../../model/types';

import styles from './LangSelect.module.scss';

interface LangSelectProps {
  className?: string;
}

export const LangSelect = ({ className }: LangSelectProps) => {
  const { t, i18n } = useTranslation('languages');

  const languageOptions = useMemo(() => enumToSelectOptions(Language, { getLabel: t }), [t]);

  const onLanguageChange = useCallback(
    (language: SelectOption<Language> | null) => {
      if (!language) return;

      i18n.changeLanguage(language.value).then(() => {
        languageStorage.setCurrent(language.value);
      });
    },
    [i18n]
  );

  const getValue = useCallback(() => {
    return languageOptions.find((option) => option.value === i18n.language);
  }, []);

  return (
    <Select
      className={clsx(styles.langSelect, className)}
      isSearchable={false}
      options={languageOptions}
      size="s"
      value={getValue()}
      onChange={(value) => onLanguageChange(value)}
    />
  );
};
