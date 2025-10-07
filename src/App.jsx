
import './App.css'
import Facts from './components/Facts'
import Hero from './components/Hero'
import TrendingApp from './components/TrendingApp'
import Footer from './reuseble-component/Footer'
import Header from './reuseble-component/Header'

function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Facts></Facts>
      <TrendingApp></TrendingApp>
      <Footer></Footer>
    </>
  )
}

export default App
