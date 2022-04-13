import './App.css';
import Pagination from './components/Pagination';
import InfiniteScroll from './components/InfiniteScroll';
import { useState } from 'react';

function App() {
  const [view, setView] = useState('pagination')

  return (
    <div>
      <h1>Welcome to Random Users</h1>
      <nav className='nav'>
        <button onClick={() => setView('pagination')}>Pagination</button>
        <button onClick={() => setView('infiniteScroll')}>Infinite Scroll</button>
      </nav>

      {view === 'pagination' ? <Pagination /> : <InfiniteScroll />}

    </div>
  );
}

export default App;
