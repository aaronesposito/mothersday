
import './App.css'
import Bottom from './components/Bottom'
import Carousel from './components/Carousel'
import Top from './components/Top'

function App() {

  let urls = []

  for (let i=1; i<=31; i++ ){
    urls.push(`./src/assets/${i}.jpg`)
  }

  return (
    <div className="main-container">
      <Top />
      <Carousel urls={urls}/>
      <Bottom />
    </div>
  )
}

export default App
