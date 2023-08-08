import { useEffect } from 'react'
import Navigation from './Navigation'
import About from './About'
import Footer from './Footer'
import Home from './Home'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'
import { useMediaQuery, useTheme } from '@mui/material'
import ErrorPage from './ErrorPage'

const Main = () => {
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const scrollToTop = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, -100)
        requestAnimationFrame(scrollToTop)
      }
    }

    scrollToTop()
  }, [])

  return (
    <>
      {md ? (
        <ErrorPage />
      ) : (
        <>
          <Navigation />
          <Home />
          <About />
          <Resume />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default Main
