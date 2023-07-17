import { useState, Fragment } from 'react'
import { feedbackData } from './lib/data/feedbackData'
import FeedbackList from './components/ui/Feedback/FeedbackList'
import Header from './components/ui/Header/Header'
import { feedbackItem } from './components/ui/Feedback/types'

function App() {
  const [feedbackItems, setFeedbackItems] = useState<Array<feedbackItem>>(feedbackData)
  return (
    <Fragment>
      <Header />
      <div className="container">
        <FeedbackList feedbackItems={ feedbackItems } />
      </div>
    </Fragment>
  )
}

export default App