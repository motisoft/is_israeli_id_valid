/** Israeli government issued ID number `check digit validation only` module. */
export function isIsraeliIdValid(id: string): boolean {
  id = id.trim();
  if (id.length < 2 || id.length > 9) return false;

  let num = Number(id);
  if (num == NaN || num < 18) return false;

  while (id.length < 9) id = "0" + id;

  let counter = 0,
    rawVal,
    actualVal;
  for (let i = 0; i < id.length; i++) {
    rawVal = Number(id[i]) * ((i % 2) + 1);
    actualVal = rawVal > 9 ? rawVal - 9 : rawVal;
    counter += actualVal;
  }
  return counter % 10 === 0;
}
