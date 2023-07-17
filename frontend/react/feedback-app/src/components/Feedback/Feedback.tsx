import { useState } from 'react'

const Feedback = () => {
    const [rating, setRating] = useState(7)
    const [feedbackItem, setFeedbackItem] = useState('This is a feedback example')
    return (
        <div className="card">
            <div className="num-display">{ rating }</div>
            <div className="text-display">
                { feedbackItem }
            </div>
        </div>
    )
}

export default Feedback