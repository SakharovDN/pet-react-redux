import { useFormik } from 'formik';

import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';

import { LoginRequest } from '../../api/types';
import { useLogin } from '../../lib/useLogin';
import { loginSchema } from '../../model/validation';

import styles from './LoginForm.module.scss';

const initialValues: LoginRequest = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [login, { isLoading, error }] = useLogin();

  const { values, handleSubmit, handleChange, errors } = useFormik<LoginRequest>({
    initialValues,
    validationSchema: loginSchema,
    validateOnChange: false,
    onSubmit: login,
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Email"
        placeholder="Введите email"
        error={errors.email || error?.message}
        type="email"
        value={values.email}
        onChange={handleChange('email')}
      />
      <Input
        label="Пароль"
        placeholder="Введите пароль"
        error={errors.password}
        type="password"
        value={values.password}
        onChange={handleChange('password')}
      />
      <Button loading={isLoading} type="submit" block>
        Войти
      </Button>
    </form>
  );
};
