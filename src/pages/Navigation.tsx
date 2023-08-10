import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Collapse, IconButton, List, ListItemButton } from '@mui/material'

const pages = ['Home', 'About', 'Resume', 'Projects', 'Contact']

const ResponsiveAppBar = () => {
  //check if navbar is overlay, if true, change color to white
  const [isOverlay, setIsOverlay] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = 250 // Adjust this value to set the offset when the overlay should trigger
      const shouldOverlay = window.scrollY > offset
      setIsOverlay(shouldOverlay)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  //===============================================================

  //check navbar scroll to the id of the component
  const [activeComponent, setActiveComponent] = React.useState('Home')

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = event.currentTarget.getAttribute('href')
    if (target) {
      const element = document.querySelector(target)
      if (element) {
        const offset = element.getBoundingClientRect().top + window.scrollY - 80

        window.scrollTo({ top: offset, behavior: 'smooth' })
      }
    }
    setOpenMenu(false)
  }
  //===============================================================

  //navbar auto set active component when scroll to that component
  const handleScrollDown = () => {
    const scrollPositions = pages.map((page) => {
      const element = document.querySelector(`#${page}`)
      if (element) {
        return {
          name: page,
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
        closestElement = position.name
      } else if (position && Math.abs(position.bottom - viewportHeight) < 400) {
        closestDistance = Math.min(Math.abs(position.bottom - viewportHeight), closestDistance)
        closestElement = position.name
      }
    })

    if (closestElement) {
      setActiveComponent(closestElement)
    }
  }

  const handleScrollUp = () => {
    const scrollPositions = pages.map((page) => {
      const element = document.querySelector(`#${page}`)
      if (element) {
        return {
          name: page,
          top: element.getBoundingClientRect().top
        }
      }
      return null
    })

    let closestElement = null
    let closestDistance = Infinity

    scrollPositions.forEach((position) => {
      if (position && position.top < 400) {
        closestDistance = Math.min(Math.abs(position.top), closestDistance)
        closestElement = position.name
      }
    })

    if (closestElement) {
      setActiveComponent(closestElement)
    }
  }
  const scrollYRef = React.useRef<number>(0)

  React.useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > scrollYRef.current) {
        handleScrollDown()
      } else {
        handleScrollUp()
      }
      scrollYRef.current = window.scrollY
    }
    scrollYRef.current = window.scrollY

    window.addEventListener('scroll', handleScrollEvent)

    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])
  //===============================================================

  //navbar collapse and open
  const [openMenu, setOpenMenu] = React.useState(false)

  const handleMenuClick = () => {
    setOpenMenu(!openMenu)
    clearTimeout(collapseTimeoutRef.current)
  }
  const collapseTimeoutRef = React.useRef<number | undefined>()

  React.useEffect(() => {
    if (openMenu) {
      collapseTimeoutRef.current = window.setTimeout(() => setOpenMenu(false), 5 * 1000)
    }

    return () => {
      clearTimeout(collapseTimeoutRef.current)
    }
  }, [openMenu])
  //===============================================================

  return (
    <AppBar
      position={'fixed'}
      sx={{
        backgroundColor: isOverlay ? 'var(--white-color)' : { xs: 'var(--black-color)', md: 'transparent' },
        boxShadow: isOverlay ? '0 0 10px rgba(0, 0, 0, 0.3)' : 'none',
        color: isOverlay ? 'var(--black-color)' : { xs: 'var(--white-color)', md: 'var(--black-color)' },
        transition: 'all 0.3s ease'
      }}
    >
      <Container maxWidth={'lg'}>
        <Toolbar>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center'
            }}
            component={Link}
            to={'/'}
          >
            <Typography
              variant='h5'
              noWrap
              sx={{
                fontWeight: 'bold',
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Ddwcsanh
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              fontSize: '2rem',
              maxWidth: 'fit-content'
            }}
            component={Link}
            to={'/'}
          >
            <Typography
              variant='h5'
              noWrap
              sx={{
                display: { xs: 'flex', md: 'none' },
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Ddwcsanh
            </Typography>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'end',
              alignItems: 'center',
              minHeight: '80px'
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenuClick}
              color='inherit'
              style={{ height: '100%' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} height={'80px'} padding={'0 auto'} marginLeft={'auto'}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleClick}
                href={`#${page}`}
                style={{ color: page === activeComponent ? 'var(--primary-color)' : 'var(--black-color)' }}
                sx={{
                  display: 'flex',
                  borderRadius: 0,
                  boxShadow: 'none',
                  padding: '10px 20px',
                  height: '100%',
                  textTransform: 'none',
                  fontSize: 'inherit',
                  fontWeight: 'inherit'
                }}
              >
                <span className={`MuiTouchRipple-root ${page === activeComponent ? 'active' : ''}`}>{page}</span>
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }} display={'flex'}></Box>
        </Toolbar>
      </Container>
      <Collapse in={openMenu} timeout='auto' unmountOnExit>
        <List component='div' disablePadding sx={{ pb: 1 }}>
          {pages.map((page) => (
            <ListItemButton
              key={page}
              onClick={handleClick}
              href={`#${page}`}
              style={{
                color:
                  page === activeComponent
                    ? 'var(--primary-color)'
                    : !isOverlay
                    ? 'var(--white-color)'
                    : 'var(--black-color)'
              }}
              sx={{
                paddingX: '50px',
                height: '50px'
              }}
            >
              <span className={`MuiTouchRipple-root ${page === activeComponent ? 'active' : ''}`}>{page}</span>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </AppBar>
  )
}

export default ResponsiveAppBar
