import { useEffect, useState } from 'react'
import JobListing, { TJob } from './JobListing'
import Spinner from './Spinner'

type TJobListings = {
    showRecentJobs?: boolean
}

// showRecentJobs prop is optional and defaults to false. If true, only the most recent 3 jobs are displayed. This allows 
// us to use the JobListings component in different parts of the application and show different numbers of jobs.
function JobListings({ showRecentJobs = false }: TJobListings) {
    const [jobs, setJobs] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        (
            // in production, we would use soemthing like Tanstack Query or SWR to handle data fetching so we can get the benefits of caching and more
            async () => {
                const apiUrl = showRecentJobs ? '/api/jobs?_limit=3' : '/api/jobs'
                try {
                    const response = await fetch(apiUrl)
                    const jobs = await response.json()
                    setJobs(jobs)
                } catch (error) {
                    console.error('Error fetching jobs', error)
                } finally {
                    setIsLoading(false)
                }
            }
        )()
    }, [])

    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    { showRecentJobs ? 'Most Recent Jobs' : 'Browse Jobs' }
                </h2>

                { isLoading ? <Spinner loading={ isLoading } /> :
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        { jobs.map((job: TJob) => {
                            return <JobListing job={ job } key={ job.id } />
                        }) }
                    </div>
                }
            </div>
        </section >
    )
}
export default JobListings