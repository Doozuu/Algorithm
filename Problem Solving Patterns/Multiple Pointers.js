// 정렬된 배열이 주어질 때, 처음으로 합이 0이 되는 쌍을 찾아서 반환하시오.
// (존재하지 않으면 undefined 반환하기)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
