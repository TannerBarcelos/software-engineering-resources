import { feedbackItem } from '../components/ui/Feedback/types'

export function fixPrecision(value: number, fixed = 0) {
  const isNanValue = isNaN(value)
  if (isNanValue) return 0
  return value.toFixed(fixed).replace(/[.,]0$/, '')
}

export function getAverageRating(array: Array<feedbackItem>) {
  const average = array.reduce((acc, item) => {
    return acc + item.rating
  }, 0)
  return average / array.length
}

export function getAverageThumbRating(
  array: Array<feedbackItem>,
  thumb: string,
) {
  const arrLength = array.length
  switch (thumb) {
    case 'up':
      return array.reduce((acc, item) => acc + item.upvotes, 0) / arrLength
    case 'down':
      return array.reduce((acc, item) => acc + item.downvotes, 0) / arrLength
    default:
      return 0
  }
}

export function getTotalPositiveFeedback(array: Array<feedbackItem>) {
  return array.filter((item) => item.rating >= 6).length
}

export function getTotalNegativeFeedback(array: Array<feedbackItem>) {
  return array.filter((item) => item.rating <= 5).length
}
