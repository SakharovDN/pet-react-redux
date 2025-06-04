import { useTranslation } from 'react-i18next';

import { Page } from '@/shared/ui/Page';
import { BodyM, Heading5 } from '@/shared/ui/Typography';

import { LoginForm } from '@/features/auth';
import { LangSelect } from '@/features/language';

import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  const { t } = useTranslation('loginPage');

  return (
    <Page className={styles.loginPage} title="Авторизация">
      <div className={styles.container}>
        <div className={styles.content}>
          <LangSelect className={styles.languageSelect} />
          <Heading5>{t('title')}</Heading5>
          <BodyM className={styles.subtitle}>{t('enter-your-data')}</BodyM>
          <LoginForm />
        </div>
      </div>
    </Page>
  );
};
