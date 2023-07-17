import Card from '../../shared/Card'
import { feedbackItem } from './types'

type FeedbackItemProps = {
    item: feedbackItem
}

const FeedbackItem = ({ item }: FeedbackItemProps) => {
    return (
        // Universal card component that can be used for any type of card and takes in children as a prop
        <Card invert={ true }>
            <div className="num-display">{ item.rating }</div>
            <div className="text-display">
                { item.description }
            </div>
        </Card>
    )
}

export default FeedbackItem