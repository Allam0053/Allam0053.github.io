import React from 'react';

// for first mount animation purpose. not for checking component mount state.
export default function useIsMounted(delay?: number) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    if (!isMounted) {
      setTimeout(() => {
        setIsMounted(true);
      }, delay ?? 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isMounted;
}
