import { CustomSelect } from './ModalAddsPet.styled';
import { dogs, cats } from './petsApi';
import { NoOptionsMessage } from './NoOptionsMessage';
import { useTranslation } from 'react-i18next';
export const SelectComponent = ({ onChange, value, onFocus }) => {
  const { t } = useTranslation();
  const pets = [...dogs, ...cats];

  const audit = pets
    .map(el => el.breed)
    .filter(el => {
      const result = el.match(/^([a-zA-Zа-яА-ЯёЁ\s]+)$/);
      if (result === null) {
        return null;
      }
      return result;
    });

  const options = audit.map(el => {
    return { value: el, label: el };
  });

  const defaultValue = (options, value) => {
    return options ? options.find(option => option.value === value) : '';
  };
  return (
    <CustomSelect
      options={options}
      classNamePrefix="Select"
      value={defaultValue(options, value)}
      maxMenuHeight={150}
      onChange={value => {
        onChange(value);
      }}
      onFocus={() => onFocus(true)}
      placeholder={t('Breed_select')}
      components={{ NoOptionsMessage }}
    ></CustomSelect>
  );
};
