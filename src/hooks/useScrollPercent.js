// 自定义获取滚动占比
import { useEffect, useState } from 'react';

function getScrollHeight() {
  // https://javascript.info/size-and-scroll-window#width-height-of-the-document
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight,
  );
}

function getIndicatorPercentageWidth(currentPos, totalScroll) {
  return (currentPos / totalScroll) * 100;
}

export default function useScrollPercent() {
  const [percent, setPercent] = useState(0);

  function scrollHandler() {
    const { innerHeight } = window;
    const currentPos = window.scrollY;
    const scrollHeight = getScrollHeight();
    const scrollDistance = scrollHeight - innerHeight;
    setPercent(getIndicatorPercentageWidth(currentPos, scrollDistance));
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return { percent };
}
