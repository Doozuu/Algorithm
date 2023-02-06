// 배열에 담긴 숫자를 오름차순으로 정렬하기
// 최적화 : 거의 정렬된 데이터가 주어진 경우 무의미한 정렬 반복 피함.
function bubbleSort(arr) {
  let noSwap;
  for (var i = arr.length; i > 0; i--) {
    noSwap = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

bubbleSort([6, 13, 4, 27, 11, 34]);
bubbleSort([6, 1, 2, 3, 4]);
