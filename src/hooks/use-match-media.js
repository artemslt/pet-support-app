import { useState, useLayoutEffect } from 'react';

const queries = [
  '(max-width: 767px)',
  '(min-width: 768px) and (max-width: 991px)',
  '(min-width: 992px)',
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map(query => matchMedia(query));

  const getValues = () => mediaQueryLists.map(mq1 => mq1.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach(mq1 => mq1.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach(mq1 =>
        mq1.removeEventListener('change', handler)
      );
  });

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
