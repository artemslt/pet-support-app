import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';


export const StepSwitcher = ({page}) => {
    return page === 0 ? (
      <FirstStep />
    ) : (
      <SecondStep />
    );
  };