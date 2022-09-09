import React from 'react';
import { breakpoints } from '../index';

const useIsBreakpoint = (currentBreakpoint, bp) => {
  const [isBreakpoint, setIsBreakpoint] = React.useState(false);

  React.useEffect(() => {
    breakpoints[currentBreakpoint] < breakpoints[bp] ? setIsBreakpoint(true) : setIsBreakpoint(false);
  }, [currentBreakpoint, bp]);

  return isBreakpoint;
};

export default useIsBreakpoint;
