import { RefObject, useEffect } from 'react';

// 外部スクリプトを読み込むためのHook
// Memo: https://github.com/vercel/next.js/issues/4477
export const useScript = (url: string, ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    if (ref.current) {
      ref.current.appendChild(script);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        ref.current.removeChild(script);
      }
    };
  }, [url, ref]);
};
