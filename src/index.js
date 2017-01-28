import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// Remember to restrict the key usage to the domain!
const APY_KEY = 'AIzaSyBD-4BfWdw6Xc3pQJ_ITr5y92vb_iTkC-I';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
