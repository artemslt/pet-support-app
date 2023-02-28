import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';

export const StepSwitcher = ({ page, isLoading }) => {
  return page === '0' ? <FirstStep /> : <SecondStep isLoading={isLoading} />;
};
