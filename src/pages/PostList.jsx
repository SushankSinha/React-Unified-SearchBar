import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List } from 'antd';
import { useSearch } from '../context/SearchContext';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const { searchQuery } = useSearch();
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [searchQuery, posts]);

  return (
    <div>
      <h1>Posts</h1>
      <List
        itemLayout="vertical"
        dataSource={filteredPosts}
        renderItem={post => (
          <List.Item key={post.id}>
            <List.Item.Meta
              title={<a href={`/users/${post.userId}`}>{post.title}</a>}
              description={post.body}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PostList;
