export function reactUserSize(size: number[]): number {
  const width: number = size[0];

  if (width < 300) {
    return 0;
  } else if (width < 500) {
    return 3;
  } else if (width < 800) {
    return 3.5;
  } else if (width < 1800) {
    return 4;
  } else {
    return 4.5;
  }
}
