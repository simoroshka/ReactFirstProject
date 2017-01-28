import React from 'react';
import ReactDOM from 'react-dom';

// Remember to restrict the key usage to the domain!
const APY_KEY = 'AIzaSyBD-4BfWdw6Xc3pQJ_ITr5y92vb_iTkC-I';

const App = function() {
  return <div>Hello world!</div>; //JSX stuff
}

ReactDOM.render(<App />, document.querySelector('.container'));
