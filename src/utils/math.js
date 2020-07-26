export const getWidth = (x1, y1, x2 , y2) => {
  const x = x2 - x1;
  const y = y2 - y1;
  // console.error("getWidth", x1, y1, x ,y );
  return Math.sqrt((x*x) +(y*y));
}

export const getCos = (AB, AC, BC) => {
  return ((AB*AB) + (AC*AC) - (BC*BC))/(2*AB*AC);
}

