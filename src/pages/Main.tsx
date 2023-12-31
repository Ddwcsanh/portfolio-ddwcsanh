import { useEffect, useState } from 'react'
import Navigation from './Navigation'
import About from './About'
import Footer from './Footer'
import Home from './Home'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Fab, useMediaQuery } from '@mui/material'
import ErrorPage from './ErrorPage'

const Main = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    window.onload = () => {
      requestAnimationFrame(scrollToTop)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const below280px = useMediaQuery('(max-width:280px)')

  return (
    <>
      {below280px ? (
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

          {showScrollButton && (
            <Fab
              aria-label='Scroll to Top'
              sx={{
                position: 'fixed',
                height: '40px',
                width: '40px',
                bottom: '20px',
                right: '20px',
                zIndex: 999,
                color: 'var(--primary-color)',
                backgroundColor: 'var(--white-color)'
              }}
              onClick={scrollToTop}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          )}
        </>
      )}
    </>
  )
}

export default Main
