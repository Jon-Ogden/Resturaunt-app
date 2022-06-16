import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import PageWrapper from './PageWrapper';
import Waiters from './components/Waiters';
import More from './components/More'
import AddWaiter from './components/AddWaiter';
import Tables from './components/Tables';

function App() {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route index element={<Home />} />
        <Route path="/waiters" element={<Waiters />} />
        <Route path="/waiters/:id/more" element={<More />} />
        <Route path="/waiters/add" element={<AddWaiter />} />
        <Route path="/tables" element={<Tables />} />
      </Route>
    </Routes>
  );
}

export default App;
