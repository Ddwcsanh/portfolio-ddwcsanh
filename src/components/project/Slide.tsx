import { Box, Button, Typography } from '@mui/material'
import { Code, Launch } from '@mui/icons-material'
import Carousel from 'react-material-ui-carousel'

interface SlideProps {
  images: {
    url: string
    caption: string
    description: string
    link?: string
    source?: string
    note?: string
  }[]
}

const Slide = ({ images }: SlideProps) => {
  const properties = {
    interval: 5000,
    autoPlay: true,
    duration: 500,
    stopAutoPlayOnHover: true,
    navButtonsAlwaysVisible: true,
    swipe: true
  }

  return (
    <Box pb={3}>
      <Carousel {...properties} animation='slide'>
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
                {image.source && (
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
                )}
                {image.link && (
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
                )}
                {image.note && (
                  <Typography
                    variant='body2'
                    style={{ color: 'var(--white-color)', textAlign: 'center', fontWeight: 'bold' }}
                  >
                    {image.note}
                  </Typography>
                )}
              </Box>
            </Box>
            <img
              src={image.url}
              alt={image.caption}
              style={{
                maxHeight: 'calc(100vh - 294.02px)',
                minHeight: '700px',
                width: '100%',
                objectFit: 'contain',
                objectPosition: 'center'
              }}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  )
}

export default Slide
