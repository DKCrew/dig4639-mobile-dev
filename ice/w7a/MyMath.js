/**
 * two parameters must be numbers, return undefined if not
 * @param a The first number
 * @param b The second number
 */
export function Sum (a, b) {
  if(typeof a == 'number' && typeof b =='number')
    return (a+b);
  else
    return undefined;
}

export function Addlist(list) {
  if(typeof list == 'number')
  var list = [1,2,3,4]
  return list;
}

export function DivideBy (a, b) {
  if(typeof a =='number' && typeof b =='number' && b !== 0)
    return (a/b);
  else 
    return undefined;
}
