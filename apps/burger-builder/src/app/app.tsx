import React from 'react';

import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';

import { Layout, BurgerBuilder } from '@git-explorer/burger-builder-lib';

export function App() {
  return (
    <Layout title={'My Burger Shop'}>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
