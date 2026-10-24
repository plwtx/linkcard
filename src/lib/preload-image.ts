const cache = new Map<string, Promise<void>>();

export function preloadImage(src: string): Promise<void> {
  let promise = cache.get(src);
  if (!promise) {
    promise = new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve();
      img.src = src;
    });
    cache.set(src, promise);
  }
  return promise;
}

export function preloadImages(
  srcs: ReadonlyArray<string | undefined>,
): Promise<void> {
  return Promise.all(
    srcs.filter((src): src is string => Boolean(src)).map(preloadImage),
  ).then(() => undefined);
}
