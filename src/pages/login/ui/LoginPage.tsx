import { Page } from '@/shared/ui/Page';
import { BodyM, Heading5 } from '@/shared/ui/Typography';

import { LoginForm } from '@/features/auth';

import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <Page className={styles.loginPage} title="Авторизация">
      <div className={styles.container}>
        <div className={styles.content}>
          <Heading5>Авторизация</Heading5>
          <BodyM className={styles.subtitle}>Введите свои данные для входа в систему</BodyM>
          <LoginForm />
        </div>
      </div>
    </Page>
  );
};
