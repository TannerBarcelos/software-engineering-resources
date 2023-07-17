import FeedbackItem from './FeedbackItem'
import { feedbackItem } from './types'

type FeedbackProps = {
    feedbackItems: Array<feedbackItem>
}

function FeedbackList({ feedbackItems }: FeedbackProps) {
    return <div className="feedback-list">
        { feedbackItems.map((item) => <FeedbackItem item={ item } />) }
    </div>
}

export default FeedbackList