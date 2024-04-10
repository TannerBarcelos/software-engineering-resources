import jobs from '../jobs.json'
import JobListing, { TJob } from './JobListing'

type TJobListings = {
    showRecentJobs?: boolean
}

// showRecentJobs prop is optional and defaults to false. If true, only the most recent 3 jobs are displayed. This allows 
// us to use the JobListings component in different parts of the application and show different numbers of jobs.
function JobListings({ showRecentJobs = false }: TJobListings) {
    const mostRecentJobs = showRecentJobs ? jobs.slice(0, 3) : jobs
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    { showRecentJobs ? 'Most Recent Jobs' : 'Browse Jobs' }
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    { mostRecentJobs.map((job: TJob) => {
                        return <JobListing job={ job } key={ job.id } />
                    }) }
                </div>
            </div>
        </section>
    )
}
export default JobListings