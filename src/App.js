import React from 'react';
import { grey } from '@mui/material/colors';

// import components
import SideBar from './components/SideBar';

// import pages
import MyStory from './pages/MyStory';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Courses from './pages/Courses';
import Publications from './pages/Publications';
import Adventures from './pages/Adventures';
import ScrollToTop from './components/ScrollToTop';
import PhotoApp from './pages/PhotoApp';

import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import {
  Box,
} from '@mui/material';

function App() {
  // default padding: 24px

  return (
    <HashRouter>
      <ScrollToTop />
      <div style={{ backgroundColor: grey[100] }}>
        <Box sx={{ display: 'flex' }}>
          <SideBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "x333333" }} >
            <Switch>
              <Redirect exact path="/" to="/about-me" />
              <Route path="/about-me" render={() => <MyStory />} />
              <Route path="/projects/photo-app" render={() => <PhotoApp />} />
              <Route path="/projects" render={() => <Projects />} />
              <Route path="/skills" render={() => <Skills />} />
              <Route path="/courses" render={() => <Courses />} />
              <Route path="/publications" render={() => <Publications />} />
              <Route path="/adventures" render={() => <Adventures />} />
            </Switch>

          </Box>
        </Box>

      </div>
    </HashRouter>
  );
}

export default App;
