import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { FaHtml5, FaCss3, FaBootstrap, FaReact, FaNpm, FaGitAlt, FaJava } from 'react-icons/fa'
import {
  SiReactrouter,
  SiMicrosoftsqlserver,
  SiVercel,
  SiJavascript,
  SiTypescript,
  SiAdobephotoshop,
  SiAdobepremierepro
} from 'react-icons/si'
import { TbSql } from 'react-icons/tb'

const myTechStack = [
  {
    title: 'Languages',
    items: [
      {
        name: 'HTML5',
        icon: FaHtml5,
        color: '#E34F26'
      },
      {
        name: 'CSS3',
        icon: FaCss3,
        color: '#1572B6'
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        color: '#F7DF1E'
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#007ACC'
      },
      {
        name: 'SQL',
        icon: TbSql,
        color: '#000000'
      },
      {
        name: 'Java',
        icon: FaJava,
        color: '#ef1f26'
      }
    ]
  },
  {
    title: 'Front-end',
    items: [
      {
        name: 'ReactJS',
        icon: FaReact,
        color: '#61DAFB'
      },
      {
        name: 'React Router',
        icon: SiReactrouter,
        color: '#CA4245'
      },
      {
        name: 'Bootstrap',
        icon: FaBootstrap,
        color: '#7952B3'
      }
    ]
  },
  {
    title: 'Back-end',
    items: [
      {
        name: 'Microsoft SQL Server',
        icon: SiMicrosoftsqlserver,
        color: '#CC2927'
      },
      {
        name: 'Java Servlet',
        icon: FaJava,
        color: '#ef1f26'
      }
    ]
  },
  {
    title: 'Others',
    items: [
      {
        name: 'git',
        icon: FaGitAlt,
        color: '#F05032'
      },
      {
        name: 'npm',
        icon: FaNpm,
        color: '#CB3837'
      },
      {
        name: 'Figma',
        icon: 'Figma-logo.svg', // Make sure you have the correct path for the image
        color: '#F24E1E'
      },
      {
        name: 'Vercel',
        icon: SiVercel,
        color: '#000000'
      },
      {
        name: 'Photoshop',
        icon: SiAdobephotoshop,
        color: '#2daaff'
      },
      {
        name: 'Premiere',
        icon: SiAdobepremierepro,
        color: '#EA77FF'
      }
    ]
  }
]

const TechStack = () => {
  return (
    <Box marginBottom={'112px'}>
      <Typography variant='h4' fontWeight={700} mb={4} style={{ color: 'var(--primary-color)' }}>
        Tech Stack
      </Typography>
      <Grid container spacing={4}>
        {myTechStack.map((section) => (
          <Grid item xs={12} sm={6} key={section.title}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                height: '100%',
                boxShadow: '0 0.2rem 1rem rgba(0, 0, 0, 0.15)',
                padding: 3,
                borderRadius: '5px'
              }}
            >
              <Typography variant='h4' textAlign={'center'} mb={3} fontWeight={600}>
                {section.title}
              </Typography>
              <Divider sx={{ width: '90%', m: '0 auto 2rem' }} />
              <Grid container spacing={3}>
                {section.items.map((item) => (
                  <Grid
                    item
                    xs={section.title === 'Front-end' || section.title === 'Back-end' ? 12 : 6}
                    sm={section.title === 'Front-end' || section.title === 'Back-end' ? 12 : 12}
                    md={section.title === 'Front-end' || section.title === 'Back-end' ? 12 : 6}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    key={item.name}
                  >
                    {item.name === 'Figma' ? (
                      <img src={item.icon} alt={item.name} height={80} width={80} />
                    ) : (
                      React.createElement(item.icon, { size: '5rem', color: item.color })
                    )}
                    <Typography variant='h6' mt={2} whiteSpace={'nowrap'}>
                      {item.name}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default TechStack
