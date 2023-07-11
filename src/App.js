/* eslint-disable import/no-extraneous-dependencies */
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import useLocalPropertiesCheck from './hook/useLocalPropertiesCheck';
import Edit from './pages/Edit';
import Home from './pages/Home';
import InvalidURL from './pages/InvalidURL';
import List from './pages/List';

function App() {
  const localPropertiesChecked = useLocalPropertiesCheck();
  return (!localPropertiesChecked) ? (<div>Local Properties Checking ...</div>) : (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={<InvalidURL />} />
      </Routes>
    </Router>
  );
}

export default App;
