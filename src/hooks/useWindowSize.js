/**
 * @desc: 获取 window.innerHeight innerWidth
 * https://github.com/streamich/react-use/blob/master/src/useWindowSize.ts
 */

import { useEffect, useState } from 'react';
import { isClient } from '@/utils';

export default function useWindowSize(initialWidth = Infinity, initialHeight = Infinity) {
  const width = isClient ? window.innerWidth : initialWidth;
  const height = isClient ? window.innerHeight : initialHeight;
  const [state, setState] = useState({ width, height });
  useEffect(() => {
    if (isClient) {
      const handler = () => {
        setState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener('resize', handler);
      return () => window.removeEventListener('resize', handler);
    } else {
      return undefined;
    }
  }, []);

  return state;
}
