import { Box, Button, Container, Typography } from '@mui/material'
import 'react-slideshow-image/dist/styles.css'
import { Code, Launch } from '@mui/icons-material'

import { Slide as ReactSlide } from 'react-slideshow-image'

interface SlideProps {
  images: {
    url: string
    caption: string
    description: string
    link: string
    source: string
  }[]
}

const Slide = ({ images }: SlideProps) => {
  const properties = {
    duration: 4000,
    autoplay: true,
    transitionDuration: 500,
    arrows: true,
    infinite: true,
    easing: 'ease',
    indicators: true,
    hoverPause: true,
    nextArrow: <div style={{ fontSize: '3rem', width: '1rem' }}>›</div>,
    prevArrow: <div style={{ fontSize: '3rem', width: '1rem' }}>‹</div>
  }

  return (
    <Container maxWidth='lg'>
      <Box pb={3}>
        <ReactSlide {...properties}>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                marginX: 4
              }}
            >
              <Box
                height={'100%'}
                width={'100%'}
                sx={{
                  position: 'absolute',
                  top: 0,
                  backgroundColor: '#3e65ffe5',
                  opacity: 0,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    opacity: 1
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Typography variant='h5' fontWeight={700} mb={2} style={{ color: 'var(--white-color)' }}>
                  {image.caption}
                </Typography>
                <Typography variant='body1' mb={2} style={{ color: 'var(--white-color)' }}>
                  {image.description}
                </Typography>
                <Box>
                  <Button
                    variant='contained'
                    endIcon={<Code />}
                    sx={{
                      backgroundColor: 'var(--white-color)',
                      color: 'var(--primary-color)',
                      '&:hover': { backgroundColor: 'rgb(220, 220, 220)' },
                      marginX: '5px'
                    }}
                    onClick={() => window.open(image.source, '_blank')}
                  >
                    Source
                  </Button>
                  <Button
                    variant='contained'
                    endIcon={<Launch />}
                    sx={{
                      backgroundColor: 'var(--white-color)',
                      color: 'var(--primary-color)',
                      '&:hover': { backgroundColor: 'rgb(220, 220, 220)' },
                      marginX: '5px'
                    }}
                    onClick={() => window.open(image.link, '_blank')}
                  >
                    Link
                  </Button>
                </Box>
              </Box>
              <img
                src={image.url}
                alt={image.caption}
                style={{
                  maxHeight: 'calc(100vh - 294.02px)',
                  minHeight: '550px',
                  height: '100%',
                  width: '100%',
                  objectFit: 'fill',
                  objectPosition: 'center'
                }}
              />
            </Box>
          ))}
        </ReactSlide>
      </Box>
    </Container>
  )
}

export default Slide
