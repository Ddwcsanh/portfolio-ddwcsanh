import { Email, Facebook, GitHub, Instagram, LinkedIn, Phone } from '@mui/icons-material'
import { Box, Container, Fab, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

const contactInfo = [
  {
    title: 'Email',
    content: 'ledoducanh03@gmail.com',
    icon: Email,
    href: 'mailto:ledoducanh03@gmail.com'
  },
  {
    title: 'Phone',
    content: '+84 971 625 830',
    icon: Phone,
    href: 'tel:+84971625830'
  },
  {
    title: 'Github',
    content: 'Ddwcsanh',
    icon: GitHub,
    href: 'https://github.com/Ddwcsanh'
  },
  {
    title: 'LinkedIn',
    content: 'Anh Le Do Duc',
    icon: LinkedIn,
    href: 'https://www.linkedin.com/in/anh-le-do-duc-a5b7ba280/'
  },
  {
    title: 'Facebook',
    content: 'Anh Do Duc Le',
    icon: Facebook,
    href: 'https://www.facebook.com/ddwcsanh/'
  },
  {
    title: 'Instagram',
    content: '_ddwcsanh',
    icon: Instagram,
    href: 'https://www.instagram.com/_ddwcsanh/'
  }
]

const Contact = () => {
  return (
    <section id='Contact'>
      <Fade direction='up' triggerOnce duration={1200}>
        <Container maxWidth={'lg'}>
          <Box minHeight={'calc(100vh - 80px)'} maxHeight={'max-content'}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant='h3' fontWeight={700} my={3}>
                Contact Me
              </Typography>
              <Typography variant='body1' mb={2} style={{ color: 'var(--gray-color)' }} textAlign={'center'}>
                I would love to hear from you.
                <br />
                If you have any questions or want to discuss a project, please do not hesitate to contact me.
              </Typography>
            </Box>
            <Grid container spacing={2}>
              {contactInfo.map((item, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                      width: '100%',
                      height: '100%',
                      boxShadow: '0 0.2rem 1rem rgba(0, 0, 0, 0.15)',
                      padding: 3,
                      borderRadius: '5px'
                    }}
                    component={Link}
                    href={item.href}
                    target='_blank'
                  >
                    <Fab
                      size={'large'}
                      style={{
                        minWidth: '75px',
                        minHeight: '75px',
                        color: 'var(--white-color)',
                        backgroundColor: 'var(--primary-color)',
                        boxShadow: 'none',
                        marginRight: '20px'
                      }}
                      disabled
                    >
                      {React.createElement(item.icon, { fontSize: 'large' })}
                    </Fab>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        overflow: 'hidden'
                      }}
                    >
                      <Typography variant='h5' textAlign={'center'} fontWeight={600}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant='body1'
                        style={{
                          color: 'var(--gray-color)',
                          whiteSpace: 'nowrap',
                          width: '100%',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden'
                        }}
                      >
                        {item.content}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Fade>
    </section>
  )
}

export default Contact
