import './App.css'
import ImageFullCard from './components/ImageFullCard'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Slider from './components/Slider'

import { images } from './data/images'

function App() {
  return (
    <div className="App">
      <Navigation />
      <ImageFullCard image1={images[0].src} image2={images[1].src} />
      <Slider images={images.slice(2, -2)} />
      <ImageFullCard
        image1={images.slice(-2)[0].src}
        image2={images.slice(-1)[0].src}
      />
      <Footer />
    </div>
  )
}

export default App
