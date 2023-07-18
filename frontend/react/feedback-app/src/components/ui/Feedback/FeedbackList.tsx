import FeedbackItem from './FeedbackItem'
import { feedbackItem } from './types'

type FeedbackProps = {
    feedbackItems: Array<feedbackItem>,
    handleDeleteItem: (id: number) => void
}

function FeedbackList({ feedbackItems, handleDeleteItem }: FeedbackProps) {
    if (!feedbackItems.length) {
        return <p>No feedback</p>
    }

    return <div className="feedback-list">
        { feedbackItems.map((item) => <FeedbackItem item={ item } handleDeleteItem={ handleDeleteItem } key={ item.id } />) }
    </div>
}

export default FeedbackList