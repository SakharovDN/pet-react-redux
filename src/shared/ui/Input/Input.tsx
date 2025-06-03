import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useId, useState } from 'react';

import clsx from 'clsx';

import { Icon } from '../Icon';
import { BodyS, BodyXs } from '../Typography';

import styles from './Input.module.scss';

interface InputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> {
  label?: string;
  size?: InputSize;
  error?: boolean | string;
}
type InputSize = 'l' | 'm' | 's';

export const Input = ({ className, label, error, type, size = 'm', ...props }: InputProps) => {
  const inputId = useId();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [innerError, setInnerError] = useState<InputProps['error']>();

  useEffect(() => {
    if (error) setInnerError(error);
    else {
      const timeout = setTimeout(() => setInnerError(error), 200);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const Label = size === 'l' ? BodyS : BodyXs;

  const inputType = type === 'password' && !isPasswordVisible ? 'password' : 'text';

  return (
    <label className={clsx(styles.formControl, { [styles.error]: typeof error !== 'boolean' })} htmlFor={inputId}>
      {label && <Label className={styles.label}>{label}</Label>}

      <div className={clsx(styles.field, styles[size], { [styles.error]: !!innerError })}>
        <input {...props} id={inputId} className={clsx(styles.input, styles[size])} type={inputType} />

        {type === 'password' && (
          <Icon
            className={styles.icon}
            name={isPasswordVisible ? 'hide' : 'show'}
            size={size === 's' ? 16 : 24}
            onClick={(e) => {
              e.stopPropagation();
              setIsPasswordVisible((prev) => !prev);
            }}
          />
        )}
      </div>

      {typeof innerError === 'string' && (
        <BodyS className={clsx(styles.errorText, { [styles.visible]: !!error })}>{innerError}</BodyS>
      )}
    </label>
  );
};
