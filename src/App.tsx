import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Hello from './pages/Hello';
import Project from './pages/Project';

export default function App() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleUserResizeSize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleUserResizeSize);

    return () => {
      window.removeEventListener('resize', handleUserResizeSize);
    };
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gblog" element={<Hello userSize={windowSize} />}></Route>
        <Route path="/gblog/project" element={<Project />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
