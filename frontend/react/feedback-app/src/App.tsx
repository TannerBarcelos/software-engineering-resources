import Feedback from './components/Feedback/Feedback'
import Header from './components/Header/Header'

function App() {
  const appName = 'Feedback App'
  return (
    <>
      <Header appName={ appName } />
      <div className="container">
        <Feedback />
      </div>
    </>
  )
}

export default App