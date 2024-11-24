import './App.css'
import Carousel from './Carousel'
import NavBar from './NavBar'
import PUB from './PUB'
import Features from './Features'
import AllProducts from './AllProducts'
import News from './News'
import Hour from './Hour'
import Footer from './Footer'
import Brands from './Brands'


function App() {
  return (
    <div>
      <NavBar/>
      {/*<Carousel/>*/}
      <PUB/>
      <Features/>
      <AllProducts/>
      <Hour/>
      <News/>
      <Brands/>
      <Footer/>
    </div>
  )
}
export default App
