import React from 'react';

// import components
import SideBar from './components/SideBar';

// import pages
import MyStory from './pages/MyStory';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Courses from './pages/Courses';
import Publications from './pages/Publications';
import Adventures from './pages/Adventures';

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
  return (
    <HashRouter>
      <div>

        <Box sx={{ display: 'flex' }}>
          <SideBar />
          <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: "x333333" }} >
            <Switch>
              <Redirect exact path="/" to="/my-story" />
              <Route path="/my-story" render={() => <MyStory />} />
              <Route path="/projects" render={() => <Projects />}/>
              <Route path="/skills" render={() => <Skills />} />
              <Route path="/courses" render={() => <Courses />} />
              <Route path="/publications" render={() => <Publications />}  />
              <Route path="/adventures" render={() => <Adventures />} />
            </Switch>

          </Box>
        </Box>

      </div>
    </HashRouter>
  );
}

export default App;
