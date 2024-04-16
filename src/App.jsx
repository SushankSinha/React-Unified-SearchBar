// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Navbar from './components/layout/Navbar';
import SearchBar from './components/layout/SearchBar';
import Home from './pages/Home';
import PostList from './pages/PostList';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
import NotFound from './pages/NotFound';
import { SearchProvider } from './context/SearchContext';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <SearchProvider>
        <Layout style={{width : "1200px"}}>
          <Navbar />
          <Layout>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
              <SearchBar />
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/posts" element={<PostList />} />
                  <Route path="/users" element={<UserList />} />
                  <Route path="/users/:userId" element={<UserDetails />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      </SearchProvider>
    </Router>
  );
};

export default App;
