import { Box, Typography, Fab, Divider } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import React from 'react'

const awardsData = [
  {
    time: 'Fall 2022',
    award: 'Excellent Student Awards',
    school: 'FPT University'
  },
  {
    time: 'Spring 2022, Summer 2022, Spring 2023',
    award: 'Honorable Student Awards',
    school: 'FPT University'
  }
]

const Awards = () => {
  return (
    <Box>
      <Typography variant='h4' fontWeight={700} mb={4} style={{ color: 'var(--primary-color)' }}>
        Awards
      </Typography>
      <Box>
        {awardsData.map((award, index) => (
          <React.Fragment key={index}>
            <Box sx={{ display: 'flex' }}>
              <Fab
                size={'small'}
                style={{
                  minWidth: '50px',
                  minHeight: '50px',
                  color: 'var(--white-color)',
                  backgroundColor: 'var(--primary-color)',
                  boxShadow: 'none',
                  margin: '0 5px'
                }}
                disabled
              >
                <EmojiEventsIcon />
              </Fab>
              <Box pl={2}>
                <Typography variant='h6' fontWeight={700} mb={1} style={{ color: 'var(--primary-color)' }}>
                  {award.time}
                </Typography>
                <Typography variant='h5' fontWeight={700} mb={1} style={{ color: 'var(--black-color)' }}>
                  {award.award}
                </Typography>
                <Typography variant='h6' fontWeight={700} mb={2} style={{ color: 'var(--black-color)' }}>
                  {award.school}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ marginBottom: '30px' }} />
          </React.Fragment>
        ))}
      </Box>
    </Box>
  )
}
export default Awards
