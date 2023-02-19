import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';


export const StepSwitcher = ({page, setPage}) => {
    return page === '0' ? (
      <FirstStep page={page} setPage={setPage}/>
    ) : (
      <SecondStep page={page} setPage={setPage}/>
    );
  };