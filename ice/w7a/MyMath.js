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
  var result = 0;
  // for(var mem of list){

 // }
  for(var i = 0; i <list.length; i++){
    if(list[i] == underfined)
    return undefined;
    result = result + list[i];
  }
  return result;
}

export function DivideBy (a, b) {
  if(typeof a =='number' && typeof b =='number' && b !== 0)
    return (a/b);
  else 
    return undefined;
}
