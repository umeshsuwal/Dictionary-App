import { useState, useEffect } from "react";
import { ThemeProvider, } from "@emotion/react"
import CssBaseLine from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import theme from "./theme"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './components/Home'
import Bookmarks from './components/Bookmarks'
import Defination from './components/Defination'

const App = () => {

  const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem('bookmarks')) || {});

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])
  
  const addBookmark = (word, definitions) => setBookmarks(oldBookmarks => ({
    ...oldBookmarks,
    [word]: definitions
  }))

  const removeBookmark = word => setBookmarks(oldBookmarks => {
    const temp = { ...oldBookmarks };
    delete temp[word];
    return temp;
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <Grid container sx={{ p: 2, mt: { xs: 0, sm: 2 } }} justifyContent="center">
        <Grid item xs={12} sm={8} lg={5} >
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/bookmarks" element={<Bookmarks />} />

              <Route path="/search/:word" element={<Defination bookmarks={bookmarks} addBookmark={addBookmark} removeBookmark={removeBookmark} />} />
            </Routes>
          </Router>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App
