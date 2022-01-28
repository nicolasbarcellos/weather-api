export function formatTemp(temp: any, type: string) {
  const cTemp = parseInt(temp);
  const cToFahr = (cTemp * 9) / 5 + 32;
  const fTemp = cToFahr.toFixed();

  if (type === "F") {
    return fTemp;
  }

  return parseInt(temp);
}
