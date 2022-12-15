import React, { Fragment } from 'react';
import GlobalStyle from './theme/globalStyle';
import Content from './components/Content';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Content />    {/* <Content /> is a component that contains all the other components for the application. */}
    </Fragment>
  );
}

export default App;
