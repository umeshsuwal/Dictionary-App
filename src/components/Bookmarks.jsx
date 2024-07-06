/* eslint-disable react/jsx-no-comment-textnodes */
import { Stack, IconButton, Typography, Box, useTheme } from '@mui/material'
import { ArrowBack as BackIcon } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const Bookmarks = () => {
    const theme = useTheme()
  return (
      <>
          <Stack sx={{ mb: 2, fontWeight: 800 }} direction="row" alignItems="center">
              <IconButton to="/" component={Link} sx={{ color: 'black', mr: 1 }}>
                  <BackIcon />
              </IconButton>
              <Typography variant="h6">
                  Bookmarks</Typography>
          </Stack>
          <Box sx={{ ...theme.mixins.alignInCenter, mt: "-72px" }}>
          <img src="/maintainance.png" alt="Dictionary-Img" />
      <Typography
        color="primary"
        sx={{
          mt: 2,
          mb: 1
        }} variant="h4">Under Maintainance</Typography>  
            </Box>       
      </>
  )
}

export default Bookmarks