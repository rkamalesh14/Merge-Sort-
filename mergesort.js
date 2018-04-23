function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let middle = Math.floor(wholeArray.length/2)
  let firstHalf = wholeArray.slice(0,middle)
  let secondHalf = wholeArray.slice(middle)
  return [firstHalf, secondHalf];
}


function merge(arr1, arr2) {
  let arr1Copy = arr1.slice()
  let arr2Copy = arr2.slice()
  let output = []
while (arr1Copy.length > 0 || arr2Copy.length > 0) {
  if (arr1Copy[0] === undefined || arr2Copy[0] === undefined) {
    if (arr1Copy[0] === undefined) {
      output.push(arr2Copy.shift())
    } else {
      output.push(arr1Copy.shift())
    }
  } else {
  if (arr1Copy[0] < arr2Copy[0]) {
    output.push(arr1Copy.shift())
  } else {
    output.push(arr2Copy.shift())
  }
}
}
return output
}


function mergeSort(array) {
  /* your code here */
  let splitArray  = split(array)
  let splitFirstHalf = splitArray[0]
  let splitSecondHalf = splitArray[1]
  if(splitFirstHalf.length <= 1 && splitSecondHalf.length <= 1) {
     return merge(splitFirstHalf, splitSecondHalf)
  } else {
     return merge(mergeSort(splitFirstHalf),mergeSort(splitSecondHalf))
  }
}


