import { Box, Container, Grid, Link, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Awards from '~/components/resume/Awards'
import Education from '~/components/resume/Education'
import TechStack from '~/components/resume/TechStack'

const Menu = [
  {
    name: 'Education',
    href: '#education'
  },
  {
    name: 'Tech stack',
    href: '#tech-stack'
  },
  {
    name: 'Awards',
    href: '#awards'
  }
]

const Resume = () => {
  const [active, setActive] = React.useState('#education')

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = event.currentTarget.getAttribute('href')
    if (target) {
      const element = document.querySelector(target)
      if (element) {
        const offset = element.getBoundingClientRect().top + window.scrollY - 112

        window.scrollTo({ top: offset, behavior: 'smooth' })
      }
    }
  }

  const handleScrollDown = () => {
    const scrollPositions = Menu.map((page) => {
      const element = document.querySelector(`${page.href}`)
      if (element) {
        return {
          href: page.href,
          top: element.getBoundingClientRect().top,
          bottom: element.getBoundingClientRect().bottom
        }
      }
      return null
    })

    const viewportHeight = window.innerHeight

    let closestElement = null
    let closestDistance = Infinity

    scrollPositions.forEach((position) => {
      if (position && Math.abs(position.top) < 400) {
        closestDistance = Math.min(Math.abs(position.top), closestDistance)
        closestElement = position.href
      } else if (position && Math.abs(position.bottom - viewportHeight) < 500) {
        closestDistance = Math.min(Math.abs(position.bottom - viewportHeight), closestDistance)
        closestElement = position.href
      }
    })

    if (closestElement) {
      setActive(closestElement)
    }
  }

  const handleScrollUp = () => {
    const scrollPositions = Menu.map((page) => {
      const element = document.querySelector(`${page.href}`)
      if (element) {
        return {
          href: page.href,
          top: element.getBoundingClientRect().top,
          bottom: element.getBoundingClientRect().bottom
        }
      }
      return null
    })

    let closestElement = null
    let closestDistance = Infinity

    scrollPositions.forEach((position) => {
      if (position && position.top < 400) {
        closestDistance = Math.min(Math.abs(position.top), closestDistance)
        closestElement = position.href
      }
    })

    if (closestElement) {
      setActive(closestElement)
    }
  }

  const lastScrollY = React.useRef<number>(0)

  React.useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > lastScrollY.current) {
        handleScrollDown()
      } else {
        handleScrollUp()
      }
      lastScrollY.current = window.scrollY
    }
    lastScrollY.current = window.scrollY

    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  return (
    <section style={{ paddingBottom: '5rem' }} id='Resume'>
      <Container sx={{ maxWidth: { xs: '600px', md: '1200px' } }}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Box sx={{ position: 'sticky', top: '80px', padding: { xs: '1rem 0', md: '2rem 0' } }}>
              {Menu.map((item, index) => (
                <React.Fragment key={index}>
                  <Fade direction='left' triggerOnce duration={1200}>
                    <ListItem
                      sx={{
                        p: 0,
                        mb: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative'
                      }}
                    >
                      <Box
                        sx={{
                          content: '""',
                          position: 'absolute',
                          left: active === item.href ? '5px' : '-20px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          width: active === item.href ? '20px' : '0px',
                          height: '2px',
                          backgroundColor: 'var(--primary-color)',
                          transition: 'left 0.3s ease'
                        }}
                      />
                      <Link
                        href={item.href}
                        underline='none'
                        sx={{
                          display: 'block',
                          width: '100%',
                          position: 'relative',
                          marginLeft: 0, // Space between bullet point and text
                          cursor: 'pointer',
                          transform: active === item.href ? 'translateX(30px)' : 'none',
                          transition: 'transform 0.3s ease'
                        }}
                        style={{ color: active === item.href ? 'var(--primary-color)' : 'var(--black-color)' }}
                        onClick={handleClick}
                      >
                        <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>{item.name}</ListItemText>
                      </Link>
                    </ListItem>
                  </Fade>
                </React.Fragment>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            <Fade direction='up' triggerOnce duration={1200}>
              <Education />
              <TechStack />
              <Awards />
            </Fade>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Resume
