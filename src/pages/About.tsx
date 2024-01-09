import { Box, Button, Container, Grid, Link, List, ListItem, ListItemText, Typography } from '@mui/material'
import { Fade } from 'react-awesome-reveal'

const About = () => {
  return (
    <section style={{ paddingBottom: '5rem' }} id='About'>
      <Container sx={{ maxWidth: { xs: 'sm', md: 'lg' } }}>
        <Fade direction='up' triggerOnce duration={1200}>
          <Grid container height={'100%'}>
            <Grid item xs={0} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <img
                src='/avatar.jpg'
                alt='Picture of me'
                style={{
                  objectFit: 'cover',
                  height: 'calc(100vh - 160px)',
                  maxHeight: '1000px',
                  minHeight: '700px'
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ paddingTop: 6, paddingLeft: { md: 6 } }}>
              <Box pb={2}>
                <Typography variant='h3' fontWeight={700} mb={3}>
                  About me
                </Typography>
                <Typography variant='body1' mb={2} color={'var(--gray-color)'}>
                  Passionate about pursuing a career as a Front-end Developer with a strong ambition to transition into
                  Mobile Development in the future.
                </Typography>
                <List>
                  <ListItem sx={{ px: 0, display: 'flex', flexWrap: 'wrap' }}>
                    <ListItemText
                      primaryTypographyProps={{ fontWeight: 600 }}
                      sx={{ minWidth: '140px', maxWidth: '140px', whiteSpace: 'nowrap' }}
                    >
                      Name:
                    </ListItemText>
                    <ListItemText sx={{ textAlign: 'left', minWidth: '230px', whiteSpace: 'nowrap' }}>
                      Le Do Duc Anh
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0, display: 'flex', flexWrap: 'wrap' }}>
                    <ListItemText
                      primaryTypographyProps={{ fontWeight: 600 }}
                      sx={{ minWidth: '140px', maxWidth: '140px', whiteSpace: 'nowrap' }}
                    >
                      Nick name:
                    </ListItemText>
                    <ListItemText sx={{ textAlign: 'left', minWidth: '230px', whiteSpace: 'nowrap' }}>
                      Alexavier
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0, display: 'flex', flexWrap: 'wrap' }}>
                    <ListItemText
                      primaryTypographyProps={{ fontWeight: 600 }}
                      sx={{ minWidth: '140px', maxWidth: '140px', whiteSpace: 'nowrap' }}
                    >
                      Date of birth:
                    </ListItemText>
                    <ListItemText sx={{ textAlign: 'left', minWidth: '230px', whiteSpace: 'nowrap' }}>
                      September 29th, 2003
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0, display: 'flex', flexWrap: 'wrap' }}>
                    <ListItemText
                      primaryTypographyProps={{ fontWeight: 600 }}
                      sx={{ minWidth: '140px', maxWidth: '140px', whiteSpace: 'nowrap' }}
                    >
                      Address:
                    </ListItemText>
                    <ListItemText sx={{ textAlign: 'left', minWidth: '230px', whiteSpace: 'nowrap' }}>
                      Bien Hoa City, Dong Nai
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0, display: 'flex', flexWrap: 'wrap' }}>
                    <ListItemText
                      primaryTypographyProps={{ fontWeight: 600 }}
                      sx={{ minWidth: '140px', maxWidth: '140px', whiteSpace: 'nowrap' }}
                    >
                      Email:
                    </ListItemText>
                    <ListItemText sx={{ textAlign: 'left', minWidth: '230px', whiteSpace: 'nowrap' }}>
                      <Link underline='hover' href='mailto:ledoducanh03@gmail.com'>
                        ledoducanh03@gmail.com
                      </Link>
                    </ListItemText>
                  </ListItem>
                  <ListItem sx={{ px: 0, display: 'flex', flexWrap: 'wrap' }}>
                    <ListItemText
                      primaryTypographyProps={{ fontWeight: 600 }}
                      sx={{ minWidth: '140px', maxWidth: '140px', whiteSpace: 'nowrap' }}
                    >
                      Phone:
                    </ListItemText>
                    <ListItemText sx={{ textAlign: 'left', minWidth: '230px', whiteSpace: 'nowrap' }}>
                      <Link underline='hover' href='tel:+84971625830'>
                        +84 971 625 830
                      </Link>
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
              <Button
                variant='contained'
                style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white-color)' }}
                sx={{ height: '3rem', borderRadius: '50px', marginTop: '1rem' }}
                href='/CV - Le Do Duc Anh.pdf'
                download={'CV - Le Do Duc Anh'}
                rel='noreferrer'
              >
                Download CV
              </Button>
            </Grid>
          </Grid>
        </Fade>
      </Container>
    </section>
  )
}
export default About
