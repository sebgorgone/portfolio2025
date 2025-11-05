import { useEffect, useState } from 'react';

type ViewportSize = {
  width: number;
  height: number;
   aspectRatio: number
};

export function useViewportSize(): ViewportSize {
  const [size, setSize] = useState<ViewportSize>({
    width: window.innerWidth,
    height: window.innerHeight,
    aspectRatio: window.innerWidth / parseFloat(window.innerHeight.toFixed(3))
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        aspectRatio: window.innerWidth / parseFloat(window.innerHeight.toFixed(3))
      });
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return size;
}