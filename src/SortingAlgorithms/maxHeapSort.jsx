export function AnimateMaxHeapSort(array){
    const animations = [];
    if (array.length <= 1) return array;
    heapSort(array, animations);
    returnArray(array, array.length);
    return [animations, array];
}

function heapify(
    array,
    n,
    i,
    animations,
) {
    // If the parent node is stored at index I, 
    // the left child can be calculated by 2 * I + 1 
    // and the right child by 2 * I + 2 (assuming the 
    //  indexing starts at 0).
    var largest = i; // initial largest value as root ie. max heap
    var leftChildIdx = 2 * i + 1;
    var rightChildIdx = 2 * i + 2;

    // Check if left child exists and is greater than the parent root
    if (leftChildIdx < n && array[leftChildIdx] > array[largest]) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([leftChildIdx, largest]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([leftChildIdx, largest]);
        // We push the index and size of the array bar for both values we are comparing
        // We do this to ensure the animation visualizer keeps the correct Idx
        animations.push([leftChildIdx, array[leftChildIdx]]);
        animations.push([leftChildIdx, array[leftChildIdx]]);
        largest = leftChildIdx;
    }
    
    // Check if right child exists and is greater than the parent root
    if (rightChildIdx < n && array[rightChildIdx] > array[largest]) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([rightChildIdx, largest]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([rightChildIdx, largest]);
        // We push the index and size of the array bar for both values we are comparing
        // We do this to ensure the animation visualizer keeps the correct Idx
        animations.push([rightChildIdx, array[rightChildIdx]]);
        animations.push([rightChildIdx, array[rightChildIdx]]);
        largest = rightChildIdx;
    }

    // swap root/child if left or right child > parent root
    if (largest !== i) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, largest]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, largest]);
        // Swap array[largest] to index i and array[i] to index largest
        animations.push([i, array[largest]]);
        animations.push([largest, array[i]]);
        [array[i], array[largest]] = [array[largest], array[i]];

        // heapify root
        heapify(array, n, largest, animations);
    }
}

function heapSort(
    array,
    animations,
) {
    var n = array.length;

    // Building max heap
    // Start at halfway through the array and move backwards through array
    for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
        heapify(array, n, i, animations);
    }

    // One by one extract elements
    for (let i = n - 1; i > 0; i--) {
        animations.push([i, 0]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, 0]);
        // Swap array[largest] to index i and array[i] to index largest
        animations.push([i, array[0]]);
        animations.push([0, array[i]]);
        // Move current root to end
        [array[i], array[0]] = [array[0], array[i]]  // swap
        heapify(array, i, 0, animations);
    }
}

function returnArray (arr, size) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(arr[i]);
    return array;
    }
}