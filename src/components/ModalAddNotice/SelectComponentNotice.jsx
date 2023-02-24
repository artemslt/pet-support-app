import { CustomSelect } from './ModalAddNotice.styled';
import { dogs, cats } from '../ModalAddsPet/petsApi';
import { NoOptionsMessage } from '../ModalAddsPet/NoOptionsMessage';
export const SelectComponentNotice = ({ onChange, value, onFocus }) => {
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
      classNamePrefix="Select_Notice"
      value={defaultValue(options, value)}
      maxMenuHeight={150}
      onChange={value => {
        onChange(value);
      }}
      onFocus={() => onFocus(true)}
      placeholder="Type breed"
      components={{ NoOptionsMessage }}
    ></CustomSelect>
  );
};
