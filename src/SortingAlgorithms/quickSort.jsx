export function AnimateQuickSort(array){
    const animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length - 1, animations);
    returnArray(array, array.length);
    return [animations, array];
}

function quickSort(
    array,
    start,
    end,
    animations,
) {
    if (start < end) {
        // pi is pivot index
        var pi = partition(array, start, end, animations);
        // before pi quick sort
        quickSort(array, start, pi-1, animations);
        // after pi quick sort
        quickSort(array, pi+1, end, animations);
    }
}

function partition(
    array,
    start,
    end,
    animations,
) {
    // always choose last element in array as pivot
    var pivot = array[end];
    // Index of smaller element and indicates correct position of pivot found so far
    var i = (start-1)

    for (let j = start; j <= end - 1; j++) {
        // if current element is smaller than pivot
        if (array[j] < pivot) {
            // increment index of smaller element and swap elements
            i++;
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([j, end]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([j, end]);
            // We swap the value at index i with the value at arr[j]
            animations.push([i, array[j]]);
            animations.push([j, array[i]]);
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    // We are now out of the loop as j = end - 1
    // We overwrite the value at index i+1 with the pivot value at arr[end]
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i+1, end]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i+1, end]);
    // We swap the value at index i+1 with our pivot value
    animations.push([i+1, array[end]]);
    animations.push([end, array[i+1]]);
    // We position the pivot value at correct location by swapping 
    // array[i+1] for array[end]
    [array[i+1], array[end]] = [array[end], array[i+1]];
    // We return i+1 which indicates the pivot values last position
    // i.e. everything to the left of this is sorted
    return(i+1);

}

function returnArray (arr, size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(arr[i]);
    return array;
    }
}