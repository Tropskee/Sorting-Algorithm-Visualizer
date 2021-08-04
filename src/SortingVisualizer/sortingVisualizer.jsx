import React from 'react';
import { AnimateMergeSort } from '../SortingAlgorithms/mergeSort';
import { AnimateQuickSort } from '../SortingAlgorithms/quickSort';
import { AnimateBubbleSort } from '../SortingAlgorithms/bubbleSort';
import { AnimateMaxHeapSort } from '../SortingAlgorithms/maxHeapSort';
import { AnimateOptimizedBubbleSort } from '../SortingAlgorithms/optimizedBubbleSort';
import './sortingVisualizer.css';

// NUMBER OF ARRAY BARS
const NUM_OF_ARRAY_BARS = 210;

// PRIMARY AND SECONDARY COLOR OF BARS
const PRIMARY_COLOR = 'cyan'
const SECONDARY_COLOR = "red"

// Animation speed - milliseconds - higher is slower :)
var ANIMATION_SPEED = 5;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    // Helper for resetting array on load
    resetArray() {
        const array = [];
        for (let i=0; i< NUM_OF_ARRAY_BARS; i++){
            array.push(Math.floor(Math.random()*726)+5);
        }
        this.setState({array});
    }

    changeSlider() {
        // Animation Slider Functionality
        var slider = document.getElementById("myRange");
        var output = document.getElementById("animation-speed");
        // Get initial value
        output.innerHTML = slider.value;
        ANIMATION_SPEED = slider.value;

        slider.oninput = () => {
            output.innerHTML = this.value;
        }
    }

    // Reset array on load
    componentDidMount() {
        this.resetArray();
    }
    
    mergeSort() {
        const animations = AnimateMergeSort(this.state.array)[0]; // [0] selects animations array
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                // Comparing first two bars
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                // If new set of bars, change to secondary color to show comparison
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                // Set timeout to show animations
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                },  i*ANIMATION_SPEED);
            }   
        }
    }

    quickSort() {
        const animations = AnimateQuickSort(this.state.array)[0];
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName("array-bar");
            if(i % 4 !== 2 && i % 4 !== 3) {
                var isColorChange = true;
            }
            else {
                isColorChange = false;
            }
            if (isColorChange) {
                // Comparing first two bars
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                // If new set of bars, change to secondary color to show comparison
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                // Set timeout to show animations
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                },  i*ANIMATION_SPEED);
            }   
        }
    }

    bubbleSort() {
        const animations = AnimateBubbleSort(this.state.array)[0];
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName("array-bar");
            if(i % 4 !== 2 && i % 4 !== 3) {
                var isColorChange = true;
            }
            else {
                isColorChange = false;
            }
            if (isColorChange) {
                // Comparing first two bars
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                // If new set of bars, change to secondary color to show comparison
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                // Set timeout to show animations
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                },  i*ANIMATION_SPEED);
            }   
        }
    }


    optimizedBubbleSort() {
        const animations = AnimateOptimizedBubbleSort(this.state.array)[0];
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName("array-bar");
            if(i % 4 !== 2 && i % 4 !== 3) {
                var isColorChange = true;
            }
            else {
                isColorChange = false;
            }
            if (isColorChange) {
                // Comparing first two bars
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                // If new set of bars, change to secondary color to show comparison
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                // Set timeout to show animations
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                },  i*ANIMATION_SPEED);
            }   
        }
    }

    maxHeapSort() {
        const animations = AnimateMaxHeapSort(this.state.array)[0];
        for (let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName("array-bar");
            if(i % 4 !== 2 && i % 4 !== 3) {
                var isColorChange = true;
            }
            else {
                isColorChange = false;
            }
            if (isColorChange) {
                // Comparing first two bars
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                // If new set of bars, change to secondary color to show comparison
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                // Set timeout to show animations
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i*ANIMATION_SPEED);
            }
            else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                },  i*ANIMATION_SPEED);
            }   
        }
    }

    testSortingAlgorithms() {
        var totalTime = 0;
        for (let i = 0; i < 100; i++) {
          const array = [];
          for (let i=0; i< NUM_OF_ARRAY_BARS; i++){
            array.push(Math.floor(Math.random()*726)+5);
           }
        const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
        const t0 = performance.now();
        const algoSortedArray = AnimateMaxHeapSort(array.slice())[1];
        const t1 = performance.now();
        totalTime += (t1-t0);
        console.log(equalArrays(javaScriptSortedArray, algoSortedArray));
      }
      console.log(`Sorting on avg took ${(totalTime/100).toFixed(2)} milliseconds.`);
    }

    render() {
        const {array} = this.state;

        return(
            <div className="array-container">
                <h1 id="visualizer-header">Sorting Algorithm Visualizer</h1>
                <div className="bar-container">
                    {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px`,
                        }}></div>
                    ))}
                </div>
                <button onClick={() => this.resetArray()}>Generate Randomized Array</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button onClick={() => this.maxHeapSort()}>Heap Sort</button>
                <button onClick={() => this.optimizedBubbleSort()}>Optimized Bubble Sort</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.testSortingAlgorithms()}>
                    Test Sorting Algorithm for Correctness</button>
                <div className="slidecontainer">
                    <p id="animation-speed-text">Animation Speed (ms): <span id="animation-speed">{ANIMATION_SPEED}</span></p>
                    <input onChange={() => this.changeSlider()} type="range" min="1" max="100" defaultValue={ANIMATION_SPEED} step="1" className="slider" id="myRange"></input>
                </div>
            </div>
        )
    }
}


function equalArrays (arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }
    for (let i=0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return true;
}
