import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Search } from '../pages/Search/Search';
import { Layout } from './Layout';

export const App = () => {
  return (
    <div className="Container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Search" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
};
