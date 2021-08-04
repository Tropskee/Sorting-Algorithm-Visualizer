export function AnimateOptimizedBubbleSort(array){
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations);
    returnArray(array, array.length);
    return [animations, array];
}

function bubbleSort(
    array,
    animations,
) {
    var arrayLength = array.length;
    var swapped = false;
    // Loop through the array once for each element to ensure fully sorted
    for (let i = 0; i < arrayLength - 1; i++ ) {
        // Check each pair and swap if array[j] > array[j+1]
        for (let j = 0; j < arrayLength - i - 1; j++) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([j, j+1]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([j, j+1]);
            // Check values and swap here
            if(array[j] > array[j+1]) {
                // We swap the value at index j with the value at j+1
                animations.push([j, array[j+1]]);
                // We swap the value at index j+1 with the value at j
                animations.push([j+1, array[j]]);
                [array[j], array[j+1]] = [array[j+1], array[j]];
                swapped = true;
            }
            else {
                // We swap the value at index j with the value at j+1
                animations.push([j+1, array[j+1]]);
                // We swap the value at index j+1 with the value at j
                animations.push([j, array[j]]);
            }
        }
        if (swapped === false) {
            break;
        }
    }
}

function returnArray (arr, size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(arr[i]);
    return array;
    }
}