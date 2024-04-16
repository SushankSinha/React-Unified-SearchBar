import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearch } from '../context/SearchContext';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const { searchQuery } = useSearch();
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  useEffect(() => {
    const filtered = todos.filter(todo =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTodos(filtered.slice(0, 5));
  }, [searchQuery, todos]);

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <h2>Sample Todos:</h2>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
