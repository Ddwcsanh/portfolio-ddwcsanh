import { Box, Paper, Typography } from '@mui/material'

const ErrorPage = () => {
  return (
    <>
      <Box width={'100vw'} height={'100vh'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Paper
          sx={{
            width: '400px',
            aspectRatio: '1/1',
            backgroundColor: 'var(--primary-color)',
            color: 'var(--white-color)',
            padding: { xs: '1rem', sm: '2rem' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box overflow={'hidden'} mb={2}>
            <iframe
              src='https://giphy.com/embed/wDC11m5hoja003k8mk'
              width='100%'
              height='100%'
              frameBorder='0'
              className='giphy-embed'
              allowFullScreen
              style={{ pointerEvents: 'none', marginLeft: '1.2rem', scale: '1.5' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography variant='h4' fontWeight={700} mb={2}>
              Sorry!
            </Typography>
            <Typography variant='body1' textAlign={'center'}>
              Your screen is too small.
              <br />
              Please use a larger screen.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </>
  )
}

export default ErrorPage
