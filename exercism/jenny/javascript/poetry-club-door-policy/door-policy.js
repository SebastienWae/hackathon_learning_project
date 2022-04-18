
export function frontDoorResponse(line) {
 return(line[0]);
}

export function frontDoorPassword(word) {
  
  let m = word.slice(0, 1);
  let n = word.slice(1);
  m = m.toUpperCase();
  n = n.toLowerCase();
  return(m + n);
}

export function backDoorResponse(line) {
  let m = line.trim();
  return(m[m.length - 1]);
}

export function backDoorPassword(word) {
  let m = frontDoorPassword(word);
  return (m + ', please');
}
