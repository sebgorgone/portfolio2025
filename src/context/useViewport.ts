import { useEffect, useState } from 'react';

type ViewportSize = {
  width: number;
  height: number;
  aspectRatio: number;
  deviceType: string;
};

export function useViewportSize(): ViewportSize {
  function deviceParams() {
    if (window.innerWidth > 1244) return 'desktop';
    return 'mobile';
  }

  const [size, setSize] = useState<ViewportSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    aspectRatio: parseFloat((window.innerWidth / window.innerHeight).toFixed(3)),
    deviceType: deviceParams(),
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        aspectRatio: parseFloat((window.innerWidth / window.innerHeight).toFixed(3)),
        deviceType: deviceParams(),
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}