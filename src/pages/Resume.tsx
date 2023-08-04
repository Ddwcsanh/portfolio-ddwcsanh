import { Container, Grid, List, ListItem, ListItemText } from '@mui/material'
import { Fade } from 'react-awesome-reveal'
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
  return (
    <section style={{ paddingTop: '5rem' }}>
      <Fade direction='up' triggerOnce duration={1200}>
        <Container sx={{ maxWidth: { xs: '600px', md: '1200px' } }}>
          <Grid container>
            <Grid item xs={0} md={3}>
              <List sx={{ position: 'sticky', top: '120px', padding: 0 }}>
                {Menu.map((item) => (
                  <ListItem sx={{ p: 0, mb: '10px', display: 'flex', flexWrap: 'wrap' }} key={item.name}>
                    <ListItemText
                      primaryTypographyProps={{ fontWeight: 600 }}
                      sx={{ maxWidth: 'fit-content', whiteSpace: 'nowrap', cursor: 'pointer' }}
                    >
                      {item.name}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={9}>
              <Education />
              <TechStack />
            </Grid>
          </Grid>
        </Container>
      </Fade>
    </section>
  )
}
export default Resume
