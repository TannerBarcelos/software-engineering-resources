import { Fragment } from 'react'
import { feedbackItem } from './types'
import { getAverageRating, getAverageThumbRating, fixPrecision, getTotalNegativeFeedback, getTotalPositiveFeedback } from '../../../utils/aggregation'

type FeedbackAnalyticsProps = {
    feedbackItems: Array<feedbackItem>
}

function FeedbackAnalytics({ feedbackItems }: FeedbackAnalyticsProps) {
    /**
     * All of the following calculations are derived from the feedbackItems array.
     * This is called 'deriving state' in react.
     * 
     * Deriving state is a common pattern in React. It’s often used to calculate values from props, or to combine multiple pieces of state into one.
     */
    const totalAmtOfRatings = feedbackItems.length
    const averageRating = fixPrecision(getAverageRating(feedbackItems))
    const totalPositiveFeedback = getTotalPositiveFeedback(feedbackItems)
    const totalNegativeFeedback = getTotalNegativeFeedback(feedbackItems)
    const averageUpVotes = fixPrecision(getAverageThumbRating(feedbackItems, 'up'))
    const averageDownVotes = fixPrecision(getAverageThumbRating(feedbackItems, 'down'))

    return (
        <Fragment>
            <div className='feedback-stats'>
                <h3>Analytics</h3>
                <h4>{ totalAmtOfRatings } ratings</h4>
                <h4>{ averageRating } avg rating</h4>
                <h4>{ totalPositiveFeedback } positive responses</h4>
                <h4>{ totalNegativeFeedback } negative responses</h4>
                <h4>{ averageUpVotes } average upvotes</h4>
                <h4>{ averageDownVotes } average downvotes</h4>
            </div>
        </Fragment>
    )
}

export default FeedbackAnalytics