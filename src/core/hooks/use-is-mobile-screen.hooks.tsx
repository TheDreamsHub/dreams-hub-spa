import { useState, useEffect } from 'react';

function getIsMobileScreen() {
  const { innerWidth } = window;

  return { isMobile: innerWidth < 1020 };
}

export function useIsMobileScreen() {
  const [isMobileScreen, setIsMobileScreen] = useState(getIsMobileScreen());

  useEffect(() => {
    function handleResize() {
      setIsMobileScreen(getIsMobileScreen());
    }

    window.addEventListener('resize', handleResize);

    // cleanup the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobileScreen;
}

export default useIsMobileScreen;
