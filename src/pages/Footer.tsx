import { ArrowRightAlt, Email, Facebook, GitHub, Instagram, LinkedIn, Phone } from '@mui/icons-material'
import { Container, Grid, Link, ListItem, Box, Typography } from '@mui/material'
import React from 'react'

const pages = ['Home', 'About', 'Resume', 'Projects', 'Contact']

const socials = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/ddwcsanh/',
    icon: Facebook
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/_ddwcsanh/',
    icon: Instagram
  },
  {
    name: 'Github',
    link: 'https://github.com/Ddwcsanh',
    icon: GitHub
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/anh-le-do-duc-a5b7ba280/',
    icon: LinkedIn
  }
]

const contact = [
  {
    content: 'ledoducanh03@gmail.com',
    href: 'mailto:ledoducanh03@gmail.com',
    icon: Email
  },
  {
    content: '+84 971 625 830',
    href: 'tel:+84971625830',
    icon: Phone
  }
]

const Footer = () => {
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

  return (
    <Box bgcolor={'var(--black-color)'} color={'var(--white-color)'} paddingTop={10} paddingBottom={5}>
      <Container maxWidth={'lg'}>
        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' fontWeight={700} mb={3}>
              About
            </Typography>
            <Typography variant='body1' mb={3} color={'var(--gray-color)'}>
              Passionate about pursuing a career as a Front-end Developer with a strong ambition to transition into
              Mobile Development in the future.
            </Typography>
            <Box pb={2}></Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' fontWeight={700} mb={3}>
              Link
            </Typography>
            <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: 0, mb: 3 }}>
              {pages.map((page) => (
                <Link
                  key={page}
                  href={`#${page}`}
                  onClick={handleClick}
                  sx={{ display: 'flex' }}
                  underline='hover'
                  mb={'10px'}
                >
                  <ArrowRightAlt sx={{ color: 'var(--gray-color)', mr: 1 }} />
                  <Typography variant='body1' color={'var(--gray-color)'}>
                    {page}
                  </Typography>
                </Link>
              ))}
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' fontWeight={700} mb={3}>
              Social
            </Typography>
            <Box mb={3}>
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.link}
                  target='_blank'
                  rel='noreferrer'
                  underline='hover'
                  sx={{ display: 'flex', alignItems: 'center' }}
                  mb={'10px'}
                >
                  {React.createElement(social.icon, { sx: { color: 'var(--gray-color)', mr: 1 } })}
                  <Typography variant='body1' color={'var(--gray-color)'}>
                    {social.name}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant='h6' fontWeight={700} mb={3}>
              Have a question?
            </Typography>
            <Box mb={3}>
              {contact.map((item) => (
                <Link
                  key={item.content}
                  href={item.href}
                  target='_blank'
                  rel='noreferrer'
                  underline='hover'
                  sx={{ display: 'flex', alignItems: 'center' }}
                  mb={'10px'}
                >
                  {React.createElement(item.icon, { sx: { color: 'var(--gray-color)', mr: 1 } })}
                  <Typography
                    variant='body1'
                    color={'var(--gray-color)'}
                    whiteSpace={'nowrap'}
                    overflow={'hidden'}
                    textOverflow={'ellipsis'}
                  >
                    {item.content}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Box
          component='footer'
          sx={{
            margin: 'auto'
          }}
        >
          <Typography variant='body1' mb={3} color={'var(--gray-color)'} textAlign={'center'}>
            Copyright © {new Date().getFullYear()} <span style={{ whiteSpace: 'nowrap' }}>Le Do Duc Anh</span> |
            <span style={{ whiteSpace: 'nowrap' }}> All rights reserved</span>
          </Typography>
          <Typography variant='body1' color={'var(--gray-color)'} textAlign={'center'}>
            Template by&nbsp;
            <Link href={'https://colorlib.com/wp/template/ronaldo/'} target='_blank' rel='noreferrer' underline='hover'>
              Ronaldo
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
