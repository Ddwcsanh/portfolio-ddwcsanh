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
  },
  {
    url: 'KetFilmStore_project.png',
    caption: 'Ket Film Store',
    description: 'A web application for selling films using NextJS',
    note: 'This project is still in progress'
  }
]

const Projects = () => {
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <section style={{ paddingBottom: '5rem' }} id='Projects'>
      <Container disableGutters maxWidth={'lg'}>
        <Fade direction='up' triggerOnce duration={1200}>
          <Box pb={2} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Typography variant='h3' fontWeight={700} my={3}>
              My Projects
            </Typography>
            <Typography variant='body1' mb={2} style={{ color: 'var(--gray-color)' }} textAlign={'center'}>
              Some of my project collaborating with my friends
            </Typography>
          </Box>
          {md ? <ProjectList images={images} /> : <Slide images={images} />}
        </Fade>
      </Container>
    </section>
  )
}
export default Projects
