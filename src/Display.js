import React, { useEffect, useState } from 'react';
// import './display.css';

const Display = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleSearch = debounce((query) => {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setUsers(filteredUsers);
  }, 3000);

  const handleChange = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className='container'>
      <input
        type='text'
        value={search}
        onChange={handleChange}
        placeholder='Search users by name...'
      />
      <ul>
        {users.map(({ id, name, username }) => (
          <li key={id}>
            <p>
              {id}: {name}
            </p>
            <p>{username}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
