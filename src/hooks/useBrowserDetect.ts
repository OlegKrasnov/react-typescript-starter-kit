import { useEffect } from 'react';
import { browserName, browserVersion, isMobile } from 'react-device-detect';

const useBrowserDetect = () => {
  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('mobile');
    }

    const browser = browserName.replace(' ', '-').toLocaleLowerCase();

    document.body.classList.add(`${browser}`, `${browser}${browserVersion}`);
  }, []);
};

export { useBrowserDetect };
