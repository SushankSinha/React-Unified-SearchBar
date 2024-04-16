import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const { searchQuery } = useSearch();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    if (searchQuery.trim() === '') {
      setFilteredUsers(users); // Display the complete list when search query is empty
    } else {
      const timeout = setTimeout(() => {
        const filtered = users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setFilteredUsers(filtered);
      }, 500); // Adjust the delay as needed (e.g., 500 milliseconds)
      setTypingTimeout(timeout);
    }
  }, [searchQuery, users]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
