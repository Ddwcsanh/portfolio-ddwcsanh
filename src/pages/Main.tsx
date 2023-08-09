import { useEffect } from 'react'
import Navigation from './Navigation'
import About from './About'
import Footer from './Footer'
import Home from './Home'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'

const Main = () => {
  useEffect(() => {
    const scrollToTop = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -100)
        requestAnimationFrame(scrollToTop)
      }
    }
    window.onload = () => {
      scrollToTop()
    }
  }, [])

  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Main
