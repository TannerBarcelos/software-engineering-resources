import { feedbackItem } from './types'

type FeedbackItemProps = {
    item: feedbackItem
}

const FeedbackItem = ({ item }: FeedbackItemProps) => {
    return (
        <div className="card">
            <div className="num-display">{ item.rating }</div>
            <div className="text-display">
                { item.description }
            </div>
        </div>
    )
}

export default FeedbackItem