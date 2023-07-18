import Card from '../../shared/Card'
import { feedbackItem } from './types'
import { FaThumbsUp, FaThumbsDown, FaTimes } from 'react-icons/fa'

type FeedbackItemProps = {
    item: feedbackItem
}

const FeedbackItem = ({ item }: FeedbackItemProps) => {
    return (
        <Card invert={ true }>
            <div className="num-display">{ item.rating }</div>
            <button className="close">
                <FaTimes color='purple' />
            </button>
            <div className="text-display">
                { item.description }
            </div>
            <div className="reactions">
                <p>{ item.upvotes } <FaThumbsUp /></p>
                <p>{ item.downvotes } <FaThumbsDown /></p>
            </div>
        </Card>
    )
}

export default FeedbackItem