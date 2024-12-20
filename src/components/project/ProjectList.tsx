import { Box, Button, Typography } from '@mui/material'
import { Code, Launch } from '@mui/icons-material'

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

const ProjectList = ({ images }: SlideProps) => {
  return (
    <>
      {images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: 'relative',
            '&:not(:last-child)': {
              marginBottom: '1rem'
            }
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
            <Typography
              variant='h5'
              fontWeight={700}
              mb={2}
              style={{ color: 'var(--white-color)', textAlign: 'center' }}
            >
              {image.caption}
            </Typography>
            <Typography variant='body1' mb={2} mx={2} style={{ color: 'var(--white-color)', textAlign: 'center' }}>
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
                <Typography variant='body2' style={{ color: 'var(--white-color)', textAlign: 'center' }}>
                  {image.note}
                </Typography>
              )}
            </Box>
          </Box>
          <img
            src={image.url}
            alt={image.caption}
            style={{
              width: '100%',
              aspectRatio: '3/2',
              objectFit: 'cover',
              objectPosition: 'top'
            }}
          />
        </Box>
      ))}
    </>
  )
}

export default ProjectList
