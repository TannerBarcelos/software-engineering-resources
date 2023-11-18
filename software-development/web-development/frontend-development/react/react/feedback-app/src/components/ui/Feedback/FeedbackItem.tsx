import Card from '../../shared/Card'
import { feedbackItem } from './types'
import { FaThumbsUp, FaThumbsDown, FaTimes } from 'react-icons/fa'

type FeedbackItemProps = {
    item: feedbackItem,
    handleDeleteItem: (id: number) => void // this is prop drilled all the way from App.tsx and the event handler is defined there which bubbles up to here
}

const FeedbackItem = ({ item, handleDeleteItem }: FeedbackItemProps) => {

    const handleClick = (id: number) => handleDeleteItem(id)

    return (
        <Card invert={ true }>
            <div className="num-display">{ item.rating }</div>
            <button className="close" onClick={ () => handleClick(item.id) }>
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