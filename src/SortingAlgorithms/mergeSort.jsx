export function AnimateMergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    mergeSort(array, 0, array.length-1, animations);
    returnArray(array, array.length)
    return [animations, array];
}

function merge(arr, startIdx, midIdx, endIdx, animations)
{
    // length of left and right arrays
    var leftArrayLength = midIdx - startIdx + 1;
    var rightArrayLength = endIdx - midIdx;
 
    // Create temp arrays
    var leftArray = new Array(leftArrayLength);
    var rightArray = new Array(rightArrayLength);
 
    // Copy data to temp arrays leftArray[] and rightArray[]
    for (let i = 0; i < leftArrayLength; i++) {
        leftArray[i] = arr[startIdx + i];
    }
    for (let j = 0; j < rightArrayLength; j++) {
        rightArray[j] = arr[midIdx + 1 + j];
    }
 
    // Merge the temp arrays back into arr[startIdx..endIdx]
    // Initial index of first subarray
    var i = 0;
    // Initial index of second subarray
    var j = 0;
    // Initial index of merged subarray
    var k = startIdx;

    while (i < leftArrayLength && j < rightArrayLength) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i+startIdx,j+midIdx+1]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i+startIdx,j+midIdx+1]);

        if (leftArray[i] <= rightArray[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the left array.
            animations.push([k,leftArray[i]]);
            arr[k] = leftArray[i];
            i++;
        }
        else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the right array.
            animations.push([k,rightArray[j]]);
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // leftArray[], if there are any
    while (i < leftArrayLength) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i+startIdx,i+startIdx]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i+startIdx,i+startIdx]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the left array.
        animations.push([k,leftArray[i]]);
        arr[k] = leftArray[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // rightArray[], if there are any
    while (j < rightArrayLength) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j+midIdx+1,j+midIdx+1]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([j+midIdx+1,j+midIdx+1]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the right array.
        animations.push([k,rightArray[j]]);
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}
 
// startIdx is for left index and endIdx is
// right index of the sub-array
// of arr to be sorted */
function mergeSort(arr,startIdx, endIdx, animations){
    if(startIdx>=endIdx){
        return;//returns recursively
    }
    var midIdx =startIdx+ parseInt((endIdx-startIdx)/2);
    mergeSort(arr,startIdx,midIdx, animations);
    mergeSort(arr,midIdx+1,endIdx, animations);
    merge(arr,startIdx,midIdx,endIdx, animations);
}

function returnArray (arr, size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(arr[i]);
    return array;
    }
}