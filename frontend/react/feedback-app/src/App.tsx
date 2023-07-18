import { useState, Fragment } from 'react'
import { feedbackData } from './lib/data/feedbackData'
import FeedbackList from './components/ui/Feedback/FeedbackList'
import Header from './components/ui/Header/Header'
import { feedbackItem } from './components/ui/Feedback/types'

function App() {
  const [feedbackItems, setFeedbackItems] = useState<Array<feedbackItem>>(feedbackData)

  const handleDeleteItem = (id: number) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setFeedbackItems(items => {
        return items.filter((item) => item.id !== id)
      })
    }
  }

  return (
    <Fragment>
      <Header />
      <div className="container">
        <FeedbackList feedbackItems={ feedbackItems } handleDeleteItem={ handleDeleteItem } />
      </div>
    </Fragment>
  )
}

export default App