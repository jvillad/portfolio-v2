import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { prefetchData } from './apollo';
import Nav from './components/Nav';
import '@fontsource/ubuntu';
import Footer from './components/Footer';
import Home from './components/Home';
import AllProjects from './components/AllProjects';
import Blog from './components/Blog';
import Post from './components/Post';
import About from './components/About';

function App() {
  const queryClient = new QueryClient();
  const storedMode = localStorage.getItem('mode');
  const [mode, setMode] = useState(storedMode || 'light');

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
  };

  useEffect(() => {
    prefetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  return (
    <div
      className={`font-quicksand text-[#161615] ${
        mode === 'dark' ? 'dark' : ''
      }`}
    >
      <div className="px-4">
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <Nav mode={mode} toggleMode={toggleMode} />
            <div className="max-w-[900px] mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<Post />} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </QueryClientProvider>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
