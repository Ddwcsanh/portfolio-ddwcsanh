import { Box, Container, Typography } from '@mui/material'
import Typewriter from 'typewriter-effect'
import SouthEastIcon from '@mui/icons-material/SouthEast'
import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'

const Break = styled.span`
  display: inline;
  @media (max-width: 600px) {
    display: block;
  }
`

const Home = () => {
  return (
    <section style={{ scrollMarginBlockStart: '0' }}>
      <Box
        height={'100vh'}
        width={'50%'}
        sx={{
          backgroundColor: 'var(--primary-color)',
          opacity: 0.1,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1
        }}
      />
      <Container>
        <Box height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Fade direction='down' triggerOnce duration={1200}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
              <Typography
                variant='h5'
                fontWeight={800}
                textTransform={'uppercase'}
                letterSpacing={'4px'}
                color={'var(--primary-color)'}
              >
                Hello, I am
              </Typography>
              <Typography variant='h2' fontWeight={800} lineHeight={1.5} mb={'0.5rem'} sx={{ wordBreak: 'break-word' }}>
                <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
                  <Break>Le Do&nbsp;</Break> <Break>Duc Anh</Break>
                </Box>
              </Typography>
              <Box display={'flex'}>
                <Typography variant='h4' fontWeight={800}>
                  I'm a&nbsp;
                </Typography>
                <Typography
                  component={Typewriter}
                  options={{
                    delay: 150,
                    strings: ['Developer.', 'Designer.', 'Dreamer.', 'Fighter.'],
                    autoStart: true,
                    loop: true
                  }}
                />
              </Box>
            </Box>
          </Fade>
        </Box>
      </Container>
      <Box position={'absolute'} bottom={'10vh'} width={'100%'} display={'flex'} justifyContent={'center'}>
        <Box
          height={'70px'}
          width={'70px'}
          onClick={() => scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
          sx={{
            cursor: 'pointer',
            backgroundImage: 'linear-gradient(45deg, var(--white-color) 50%, #edf0ff 50%)',
            transform: 'rotate(45deg)'
          }}
        >
          <SouthEastIcon
            style={{ color: 'var(--primary-color)' }}
            sx={{ animation: 'wheel-up-down 1.6s ease infinite' }}
          />
        </Box>
      </Box>
    </section>
  )
}
export default Home
