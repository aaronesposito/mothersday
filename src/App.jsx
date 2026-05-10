
import './App.css'
import Bottom from './components/Bottom'
import Carousel from './components/Carousel'
import Top from './components/Top'
function App() {

  const imageModules = import.meta.glob("./assets/*.jpg", {
    eager: true,
    query: "?url",
    import: "default",
  });

  const images = Object.entries(imageModules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src);

  return (
    <div className="main-container">
      <Top />
      <Carousel images={images}/>
      <Bottom />
    </div>
  )
}

export default App
