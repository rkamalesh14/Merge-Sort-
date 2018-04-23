describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    let mainArray = [0,1,2,3,4,5,6,7,8,9]
    let splitArray = split(mainArray)
    expect(splitArray).toEqual([[0,1,2,3,4],[5,6,7,8,9]])
  });

  it('is able to split an array with 9 elements', function() {
    // your code here
    let mainArray = [0,1,2,3,4,5,6,7,8]
    let splitArray = split(mainArray)
    expect(splitArray).toEqual([[0,1,2,3],[4,5,6,7,8]])
  });

  it('is able to split an array with 5 elements', function() {
    // your code here
    let mainArray = [0,1,2,3,4]
    let splitArray = split(mainArray)
    expect(splitArray).toEqual([[0,1],[2,3,4]])
  });

  it('is able to split an array with 1 elements', function() {
    // your code here
    let mainArray = [1]
    let splitArray = split(mainArray)
    expect(splitArray).toEqual([[],[1]])
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    let arrayOne = [2,6,8,9]
    let arrayTwo = [1,3,5]
    let joinedArray = merge(arrayOne, arrayTwo)
    expect(joinedArray).toEqual([1,2,3,5,6,8,9])
  });
});


describe('mergeSort function', function(){
  it('is able to call split and merge in order to sort an unsorted array', function(){
    // test the merging algorithm
    let unsortedArr = [2,6,3,7,4,9,22,15,5]
    let sortedArr = mergeSort(unsortedArr)
    expect(sortedArr).toEqual([2,3,4,5,6,7,9,15,22])
  });
});
