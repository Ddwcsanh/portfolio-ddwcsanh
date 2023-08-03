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
// import { Brightness4, Brightness7, Login } from '@mui/icons-material'

const pages = ['Home', 'About', 'Resume', 'Projects', 'Contact']

// function useActiveLink(initialLink: string) {
//   const [activeLink, setActiveLink] = React.useState(initialLink)

//   const location = useLocation()

//   React.useEffect(() => {
//     const page = pages.find((page) => {
//       if (page === 'Home') return location.pathname === '/'
//       else return `/${page.toLocaleLowerCase()}` === location.pathname
//     })
//     if (page) {
//       setActiveLink(`/${page.toLocaleLowerCase()}`)
//     } else if (location.pathname.includes('/detail')) {
//       setActiveLink('/home')
//     } else if (location.pathname.includes('/film-mng')) {
//       setActiveLink('/film-mng')
//     } else {
//       setActiveLink('')
//     }
//   }, [location])

//   return [activeLink, setActiveLink] // Return the state and setter function
// }

const ResponsiveAppBar = () => {
  // const { user, logout } = useAuth()
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget)
  // }
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null)
  // }

  // const handleSignOut = async () => {
  //   try {
  //     await logout()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // const [activeLink, setActiveLink] = useActiveLink('/home') // Use the custom hook

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

  // const { login } = UserAuth()
  // const navigate = useNavigate()
  // const handleGoogleSignIn = async () => {
  //   try {
  //     await login()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // React.useEffect(() => {
  //   if (user != null) {
  //     navigate('/')
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user])

  const [activeComponent, setActiveComponent] = React.useState('Home')

  const handleClick = (page: string) => {
    setActiveComponent(page)
    if (page === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'About') {
      window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })
    }
    setOpenMenu(false)
  }

  const [openMenu, setOpenMenu] = React.useState(false)

  const handleMenuClick = () => {
    setOpenMenu(!openMenu)
    // clearTimeout(collapseTimeoutRef.current)
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
            {/* {user && (
                <MenuItem
                  key='Film Management'
                  onClick={handleCloseNavMenu}
                  style={{
                    padding: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Typography
                    component={Link}
                    fontWeight={'bold'}
                    to='/film-mng'
                    onClick={() => handleClick('Film Management')}
                    style={{
                      color: activeLink === '/film-mng' ? theme.redPrimary : 'black',
                      textDecoration: 'none',
                      padding: '0.5rem 1.5rem'
                    }}
                  >
                    Films
                  </Typography>
                </MenuItem>
              )} */}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} height={'80px'} padding={'0 auto'} marginLeft={'auto'}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleClick(page)}
                sx={{
                  color: page === activeComponent ? 'var(--primary-color)' : 'var(--black-color)',
                  display: 'flex',
                  borderRadius: 0,
                  boxShadow: 'none',
                  padding: '10px 20px',
                  height: '100%',
                  textTransform: 'none',
                  fontSize: 'inherit',
                  fontWeight: 'inherit'
                  // transition: 'text-decoration 1.6s ease',
                  // '&:hover::before': {
                  //   width: '60%'
                  // },
                  // '&:focus::before': {
                  //   width: '60%'
                  // },
                  // '&::before': {
                  //   content: "''",
                  //   position: 'absolute',
                  //   bottom: '20px',
                  //   width: page === activeComponent ? '60%' : '0',
                  //   height: '2px',
                  //   backgroundColor: 'var(--primary-color)',
                  //   transition: 'width 0.3s ease',
                  //   transformOrigin: 'center'
                  // }
                }}
              >
                <span className={`MuiTouchRipple-root ${page === activeComponent ? 'active' : ''}`}>{page}</span>
              </Button>
            ))}
            {/* {user && (
              <Button
                key='Film Management'
                onClick={() => handleClick('Film Management')}
                sx={{
                  color: 'white',
                  display: 'flex',
                  borderRadius: 0,
                  boxShadow: 'none',
                  padding: 0,
                  width: '10vw',
                  height: '100%',
                  textAlign: 'center',
                  '&:hover': {
                    backgroundColor: theme.redDarker
                  }
                }}
                variant={activeLink === '/film-mng' ? 'contained' : 'text'}
                color={'error'}
                component={Link}
                to='/film-mng'
              >
                Films
              </Button>
            )} */}
          </Box>
          <Box sx={{ flexGrow: 0 }} display={'flex'}>
            {/* {user ? (
              <>
                <Tooltip title='Open settings'>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt={user?.email || 'User'} src={user?.photoURL || ''} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={handleCloseUserMenu}
                    style={{
                      padding: '0',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography
                      component={Link}
                      fontWeight={'bold'}
                      to={'/profile'}
                      style={{
                        textDecoration: 'none',
                        padding: '0.5rem 1.5rem'
                      }}
                    >
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseUserMenu}
                    style={{
                      padding: '0',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography
                      fontWeight={'bold'}
                      onClick={handleSignOut}
                      style={{
                        textDecoration: 'none',
                        padding: '0.5rem 1.5rem'
                      }}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                sx={{ color: 'white', lineHeight: 0 }}
                startIcon={<Login />}
                onClick={() => {
                  navigate('/login')
                }}
              >
                Sign in
              </Button>
            )} */}
            {/* <IconButton sx={{ ml: 1 }} onClick={toggle} color='inherit' disableFocusRipple disableTouchRipple>
              {dark ? <Brightness7 /> : <Brightness4 />}
            </IconButton> */}
          </Box>
        </Toolbar>
      </Container>
      <Collapse in={openMenu} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {pages.map((page) => (
            <ListItemButton
              key={page}
              onClick={() => handleClick(page)}
              sx={{
                color:
                  page === activeComponent
                    ? 'var(--primary-color)'
                    : !isOverlay
                    ? 'var(--white-color)'
                    : 'var(--black-color)',
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
