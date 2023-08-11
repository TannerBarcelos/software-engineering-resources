import './style.css'
import { setupCounter } from './counter.ts'

// Get the button dom elements
const incrementBtn = document.querySelector<HTMLButtonElement>('#increment')!
const decrementBtn = document.querySelector<HTMLButtonElement>('#decrement')!

// Get the counter dom element
const counterElement = document.querySelector<HTMLHeadingElement>('#counter')!

// Create an array of buttons to pass to the setupCounter function
const buttons: Array<HTMLButtonElement> = [incrementBtn, decrementBtn]

// Setup the counter with the DOM elements
setupCounter(buttons, counterElement)
