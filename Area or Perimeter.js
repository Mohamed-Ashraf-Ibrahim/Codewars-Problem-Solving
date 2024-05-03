// https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l === w) {
    const area = l * w;
    return area;
  } else {
    const perimeter = 2 * (l + w);
    return perimeter;
  }
};
