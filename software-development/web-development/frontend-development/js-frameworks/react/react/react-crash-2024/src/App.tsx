import Herobar from './components/Hero'
import Navbar from './components/Nav'
import HomeCards from './components/HomeCards'
import RecentJobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

function App() {
  return (
    <>
      <Navbar />
      <Herobar />
      <HomeCards />
      <RecentJobListings />
      <ViewAllJobs />
    </>
  )
}

export default App