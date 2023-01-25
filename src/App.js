import React from 'react';
import { grey, blue, lightBlue, green } from '@mui/material/colors';

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
import IndividualProject from './pages/IndividualProject';

import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';

import {
  Box,
} from '@mui/material';

function App() {
  // default padding: 24px

  //"#E7EBF0" 
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ backgroundColor: "#282C34", border: 0}}>
        <Box sx={{ display: 'flex' }}>
          <SideBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3}} style={{backgroundColor: grey[50]}} >
            <Switch>
              <Route exact path="/" render={() => <MyStory />} />
              <Route path="/projects/:id" render={() => <IndividualProject />} />
              <Route path="/projects" render={() => <Projects />} />
              <Route path="/skills" render={() => <Skills />} />
              <Route path="/courses" render={() => <Courses />} />
              <Route path="/publications" render={() => <Publications />} />
              <Route path="/adventures" render={() => <Adventures />} />
            </Switch>

          </Box>
        </Box>

      </div>
    </BrowserRouter>
  );
}

export default App;
