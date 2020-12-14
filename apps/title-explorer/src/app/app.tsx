import React from 'react';

import styles from './app.module.scss';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import { Home } from '@git-explorer/home';
import {Gifs} from  '@git-explorer/gifs'


import { environment } from '../environments/environment.prod';

export function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <nav className={styles.appNav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/gifs">Gifs</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.appContent}>
          <Route path="/" exact component={Home} />
          <Route path="/gifs"
             render={()=> <Gifs apiKey={environment.giphy.apiKey}/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
