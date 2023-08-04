import { Box, Typography, Fab, Divider } from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'

const educationData = [
  {
    time: 'Aug 2018 - Jun 2021',
    school: 'Luong The Vinh High School for the Gifted',
    role: 'Student',
    description: `Luong The Vinh High School for the Gifted is a high school in Dong Nai province, Vietnam. It was established in 1994 and named after Luong The Vinh. The school offers advanced and specialized curriculum for gifted students who show their exceptional talents in the Natural Sciences, Social Sciences, and Humanities.`
  },
  {
    time: 'Aug 2021 - Present',
    school: 'FPT University',
    role: 'Student',
    description:
      'FPT University is a private university in Vietnam. FPT University is a member of FPT Group and has campuses in Hanoi, Ho Chi Minh City, Da Nang, Can Tho and Quy Nhon.'
  }
]

const Education = () => {
  return (
    <Box marginBottom={'112px'}>
      <Typography variant='h4' fontWeight={700} mb={4} style={{ color: 'var(--primary-color)' }}>
        Education
      </Typography>
      <Box>
        {educationData.map((education, index) => (
          <>
            <Box key={index} sx={{ display: 'flex' }}>
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
                <SchoolIcon />
              </Fab>
              <Box pl={2}>
                <Typography variant='h6' fontWeight={700} mb={1} style={{ color: 'var(--primary-color)' }}>
                  {education.time}
                </Typography>
                <Typography variant='h5' fontWeight={700} mb={1} style={{ color: 'var(--black-color)' }}>
                  {education.school}
                </Typography>
                <Typography variant='h6' fontWeight={700} mb={1} style={{ color: 'var(--black-color)' }}>
                  {education.role}
                </Typography>
                <Typography variant='body1' mb={2} style={{ color: 'var(--gray-color)' }}>
                  {education.description}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ marginBottom: '30px' }} />
          </>
        ))}
      </Box>
    </Box>
  )
}
export default Education
