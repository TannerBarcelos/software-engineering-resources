import FeedbackItem from './FeedbackItem'
import { feedbackItem } from './types'

type FeedbackProps = {
    feedbackItems: Array<feedbackItem>
}

function FeedbackList({ feedbackItems }: FeedbackProps) {
    if (!feedbackItems.length) {
        return <p>No feedback</p>
    }

    return <div className="feedback-list">
        { feedbackItems.map((item) => <FeedbackItem item={ item } />) }
    </div>
}

export default FeedbackList