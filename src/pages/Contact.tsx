import { Email, Facebook, GitHub, Instagram, LinkedIn, Phone } from '@mui/icons-material'
import { Box, Button, Container, Fab, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import emailjs from '@emailjs/browser'
import { notifyError, notifySuccess } from '~/global/toastify'

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
  const form = React.useRef()

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_YOUR_SERVICE_ID as string,
          import.meta.env.VITE_YOUR_TEMPLATE_ID as string,
          form.current,
          import.meta.env.VITE_YOUR_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            console.log(result.text)
            notifySuccess('Message sent successfully!')
            if (form.current) (form.current as HTMLFormElement).reset()
          },

          (error) => {
            console.log(error.text)
            notifyError('Error! Fail to send message.')
          }
        )
    } else {
      console.log('Form is not available.')
    }
  }
  return (
    <section id='Contact'>
      <Container maxWidth={'lg'}>
        <Box height={'100%'}>
          <Fade direction='up' triggerOnce duration={1200}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant='h3' fontWeight={700} mt={3} mb={2}>
                Contact Me
              </Typography>
              <Typography variant='body1' mb={2} style={{ color: 'var(--gray-color)' }} textAlign={'center'}>
                I would love to hear from you.
                <br />
                If you have any questions or want to discuss a project, please do not hesitate to contact me.
              </Typography>
            </Box>
          </Fade>
          <Fade direction='up' triggerOnce duration={1200}>
            <Grid container spacing={2} mb={5}>
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
                      paddingX: 3,
                      paddingY: 2,
                      borderRadius: '5px'
                    }}
                    component={Link}
                    href={item.href}
                    target='_blank'
                  >
                    <Fab
                      size={'large'}
                      style={{
                        minWidth: '60px',
                        minHeight: '60px',
                        color: 'var(--white-color)',
                        backgroundColor: 'var(--primary-color)',
                        boxShadow: 'none',
                        marginRight: '20px'
                      }}
                      disabled
                    >
                      {React.createElement(item.icon, { fontSize: 'medium' })}
                    </Fab>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        overflow: 'hidden'
                      }}
                    >
                      <Typography variant='h6' textAlign={'center'} fontWeight={600}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant='body2'
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
          </Fade>
          <Fade direction='up' triggerOnce duration={1200}>
            <Grid container flexDirection={{ xs: 'column-reverse', md: 'row' }}>
              <Grid item xs={12} md={6} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Box
                  ref={form}
                  component='form'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f8f9fa',
                    padding: { xs: 3, sm: 6 },
                    borderRadius: '5px'
                  }}
                  onSubmit={sendEmail}
                >
                  <TextField
                    sx={{
                      width: '100%',
                      marginBottom: '1rem',
                      '&:focus': {
                        borderColor: 'black'
                      }
                    }}
                    label='Your Name'
                    name='from_name'
                    required
                  />

                  <TextField
                    sx={{
                      width: '100%',
                      marginBottom: '1rem'
                    }}
                    type='email'
                    label='Your Email'
                    name='from_email'
                    required
                  />

                  <TextField
                    sx={{
                      width: '100%',
                      marginBottom: '1rem'
                    }}
                    label='Subject'
                    name='subject'
                    required
                  />

                  <TextField
                    sx={{
                      width: '100%',
                      marginBottom: '1rem'
                    }}
                    label='Message'
                    multiline
                    rows={5}
                    name='message'
                    required
                  />
                  <Box
                    sx={{
                      width: '100%',
                      marginBottom: '1rem'
                    }}
                  >
                    <Button
                      type='submit'
                      variant='contained'
                      style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white-color)' }}
                      sx={{ height: '3rem', borderRadius: '50px', paddingX: '2rem' }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#f8f9fa',
                    borderRadius: '5px'
                  }}
                >
                  <iframe
                    title='map'
                    style={{ border: 0, width: '100%', height: '100%', minHeight: '450px' }}
                    allowFullScreen={true}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    src={`https://www.google.com/maps/embed/v1/place?q=FPT+University+HCMC,+Đường+D1,+Long+Thạnh+Mỹ,+Thành+Phố+Thủ+Đức,+Thành+phố+Hồ+Chí+Minh,+Việt+Nam&key=${
                      import.meta.env.VITE_GOOGLE_API_KEY as string
                    }`}
                  ></iframe>
                </Box>
              </Grid>
            </Grid>
          </Fade>
        </Box>
      </Container>
    </section>
  )
}

export default Contact
