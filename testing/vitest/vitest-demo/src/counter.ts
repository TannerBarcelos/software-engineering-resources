import { decrement, increment } from './lib/counter'
import { CounterAction } from './utils/enums'

type CountElement = HTMLHeadingElement
type ButtonElementArray = Array<HTMLButtonElement>

export function setupCounter(
  elements: ButtonElementArray,
  countElement: CountElement,
) {
  let count = 0

  // Attach initial count to DOM element and set value to 0
  setCounter(countElement, 0)

  elements.forEach((element) => {
    element.addEventListener('click', () => {
      switch (element.id) {
        case CounterAction.Decrement:
          count = decrement(count)
          setCounter(countElement, count)
          break
        case CounterAction.Increment:
          count = increment(count)
          setCounter(countElement, count)
          break
      }
    })
  })
}

// Attaches to the DOM element and sets the count value with innerHTML
export function setCounter(element: HTMLHeadingElement, count: number) {
  element.innerHTML = `count is ${count}`
}