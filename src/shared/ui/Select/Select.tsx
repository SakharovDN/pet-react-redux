import { ReactNode, useEffect, useId, useState } from 'react';
import ReactSelect, {
  ClearIndicatorProps,
  components,
  DropdownIndicatorProps,
  IndicatorSeparatorProps,
  MultiValueRemoveProps,
  Props as ReactSelectProps,
} from 'react-select';

import clsx from 'clsx';

import { Icon } from '../Icon';
import { Loader } from '../Loader';
import { BodyS, BodyXs } from '../Typography';

import styles from './Select.module.scss';

export interface SelectOption<T extends number | string = number | string> {
  value: T;
  label: ReactNode;
}

interface SelectProps<T extends string = string, IsMulti extends boolean = false>
  extends ReactSelectProps<SelectOption<T>, IsMulti> {
  label?: string;
  size?: SelectSize;
  error?: boolean | string;
}
type SelectSize = 'l' | 'm' | 's';

export const Select = <T extends string = string, IsMulti extends boolean = false>({
  label,
  error,
  size = 'm',
  className,
  ...props
}: SelectProps<T, IsMulti>) => {
  const inputId = useId();

  const [innerError, setInnerError] = useState<SelectProps['error']>();

  useEffect(() => {
    if (error) setInnerError(error);
    else {
      const timeout = setTimeout(() => setInnerError(error), 200);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  const Label = size === 'l' ? BodyS : BodyXs;

  return (
    <label
      className={clsx(styles.formControl, className, { [styles.error]: typeof error !== 'boolean' })}
      htmlFor={inputId}>
      {label && <Label className={styles.label}>{label}</Label>}

      <ReactSelect
        id={inputId}
        classNames={{
          control: (state) =>
            clsx(styles.control, styles[size], { [styles.error]: !!innerError, [styles.open]: state.menuIsOpen }),
          valueContainer: () => clsx(styles.valueContainer, styles[size]),
          placeholder: () => clsx(styles.placeholder, styles[size]),
          singleValue: () => styles.singleValue,
          input: () => styles.input,
          indicatorSeparator: () => styles.indicatorSeparator,
          clearIndicator: () => styles.indicatorContainer,
          dropdownIndicator: () => clsx(styles.indicatorContainer, styles.dropdownIndicator),
          menu: () => styles.menu,
          option: (state) => clsx(styles.option, styles[size], { [styles.selected]: state.isSelected }),
          multiValue: () => clsx(styles.multiValue, styles[size]),
          multiValueLabel: () => clsx(styles.multiValueLabel, styles[size]),
          multiValueRemove: () => styles.multiValueRemove,
        }}
        components={{
          IndicatorSeparator,
          LoadingIndicator: () => <LoadingIndicator size={size === 's' ? 16 : 24} />,
          ClearIndicator: (props) => <ClearIndicator size={size === 's' ? 16 : 24} {...props} />,
          DropdownIndicator: (props) => <DropdownIndicator size={size === 's' ? 16 : 24} {...props} />,
          MultiValueRemove,
        }}
        {...props}
      />

      {typeof innerError === 'string' && (
        <BodyS className={clsx(styles.errorText, { [styles.visible]: !!error })}>{innerError}</BodyS>
      )}
    </label>
  );
};

const IndicatorSeparator = <T extends string = string, IsMulti extends boolean = false>(
  props: IndicatorSeparatorProps<SelectOption<T>, IsMulti>
) => {
  return props.selectProps.isClearable ? <components.IndicatorSeparator {...props} /> : null;
};

const LoadingIndicator = ({ size }: { size: number }) => {
  return <Loader className={clsx(styles.indicator, styles.indicatorContainer)} size={size} />;
};

const ClearIndicator = <T extends string = string, IsMulti extends boolean = false>({
  size,
  ...props
}: ClearIndicatorProps<SelectOption<T>, IsMulti> & { size: number }) => {
  return (
    <components.ClearIndicator {...props}>
      <Icon className={styles.indicator} name="close" size={size} />
    </components.ClearIndicator>
  );
};

const DropdownIndicator = <T extends string = string, IsMulti extends boolean = false>({
  size,
  ...props
}: DropdownIndicatorProps<SelectOption<T>, IsMulti> & { size: number }) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon className={styles.indicator} name="chevron-down" size={size} />
    </components.DropdownIndicator>
  );
};

const MultiValueRemove = <T extends string = string, IsMulti extends boolean = false>({
  ...props
}: MultiValueRemoveProps<SelectOption<T>, IsMulti>) => {
  return (
    <components.MultiValueRemove {...props}>
      <Icon name="remove" size={16} />
    </components.MultiValueRemove>
  );
};
