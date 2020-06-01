import React, { useState } from 'react';
import {
  Container,
} from 'semantic-ui-react';

import Search from '../../Search';
import './Home.css';

function Home() {
  return (
    <Container>
      <Search />
    </Container>
  );
}

export default Home;
