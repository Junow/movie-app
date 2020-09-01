import {useCallback, useRef, DependencyList} from 'react'

export default (
  cb: (entry: IntersectionObserverEntry) => void,
  deps: DependencyList,
) => {
  const intersectionObserver = useRef<IntersectionObserver | null>(null);
  return useCallback(node => {
    if (intersectionObserver.current) {
      intersectionObserver.current.disconnect();
    }

    intersectionObserver.current = new IntersectionObserver(([entry]) => {
      cb(entry);
    });

    if (node) intersectionObserver.current.observe(node);
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}