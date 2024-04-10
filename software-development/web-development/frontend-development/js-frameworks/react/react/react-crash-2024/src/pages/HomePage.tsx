import Herobar from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

function HomePage() {
    return (
        <>
            <Herobar />
            <HomeCards />
            <JobListings showRecentJobs />
            <ViewAllJobs />
        </>
    )
}
export default HomePage