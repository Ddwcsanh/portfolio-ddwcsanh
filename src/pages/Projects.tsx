import { useMediaQuery, useTheme } from '@mui/material'
import { Box, Container, Typography } from '@mui/material'
import { Fade } from 'react-awesome-reveal'
import ProjectList from '~/components/project/ProjectList'
import Slide from '~/components/project/Slide'

const images = [
  {
    url: '/My Favourite Films_project.png',
    caption: 'My Favourite Films',
    description: 'My first ReactJS project using TypeScript and Firebase.',
    link: 'https://my-favourite-films-ddwcsanh.vercel.app/',
    source: 'https://github.com/Ddwcsanh/MyFavouriteFilms'
  },
  {
    url: '/DMS_project.png',
    caption: 'Document Management System',
    description: 'A web application for managing documents in a company using ReactJS and Firebase',
    link: 'https://www.fptuhcm-capstone.tech/',
    source: 'https://github.com/hideonbush106/DocManagementSystem'
  }
]

const Projects = () => {
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <section style={{ paddingTop: '5rem' }}>
      <Fade direction='up' triggerOnce duration={1200}>
        <Container disableGutters maxWidth={false}>
          <Box pb={2} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography variant='h3' fontWeight={700} my={3}>
              My Projects
            </Typography>
            <Typography variant='body1' mb={2} style={{ color: 'var(--gray-color)' }}>
              Some of my project collaborating with my friends
            </Typography>
          </Box>
          {md ? <ProjectList images={images} /> : <Slide images={images} />}

          {/* <Grid container>
          <Grid item xs={12} md={6} height={'700px'} sx={{ position: 'relative' }}>
            <Box
              height={'100%'}
              width={'100%'}
              sx={{
                position: 'absolute',
                backgroundImage: 'url(/DMS_project.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                top: 0
              }}
            >
              <Box
                height={'100%'}
                width={'100%'}
                sx={{
                  position: 'absolute',
                  backgroundColor: 'var(--primary-color)',
                  opacity: 0,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 1
                  }
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} height={{ sm: 'calc(100vh - 264.02px)' }}>
            <img
              src='/My Favourite Films_project.png'
              alt='Picture of me'
              width={'100%'}
              style={{ objectFit: 'cover' }}
            />
          </Grid>
        </Grid> */}
        </Container>
      </Fade>
    </section>
  )
}
export default Projects
