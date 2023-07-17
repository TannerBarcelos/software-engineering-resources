import { feedbackItem } from '../../components/Feedback/types'

export const feedbackData: feedbackItem[] = [
  {
    id: 1,
    title: 'Feedback 1',
    description: 'This is the first feedback',
    category: 'bug',
    upvotes: 10,
    downvotes: 2,
    rating: 4,
  },
  {
    id: 2,
    title: 'Feedback 2',
    description: 'This is the second feedback',
    category: 'feature',
    upvotes: 12,
    downvotes: 0,
    rating: 8,
  },
  {
    id: 3,
    title: 'Feedback 3',
    description: 'This is the third feedback',
    category: 'enhancement',
    upvotes: 7,
    downvotes: 3,
    rating: 10,
  },
]
