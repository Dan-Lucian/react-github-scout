import { useState, useEffect } from 'react';
import SearchBar from './App/SearchBar';
import Header from './App/Header';
import Body from './App/Body';
import users from './App/users';
import { useLocalStorageState } from './App/useLocalStorageState';

function App() {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState('');
  const [theme, setTheme] = useLocalStorageState('theme', 'dark-theme');
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeChange = () => {
    setTheme((currentTheme) => {
      if (currentTheme === 'dark-theme') {
        return 'light-theme';
      }
      return 'dark-theme';
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('pending');

    users
      .get(userName)
      .then((data) => {
        setStatus('resolved');
        return setUserData(data);
      })
      .catch((err) => {
        setStatus('rejected');
        return console.log(err.message);
      });
  };

  const handleUserChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="app">
      <Header handleThemeChange={handleThemeChange} theme={theme} />
      <SearchBar
        onSubmit={onSubmit}
        handleUserChange={handleUserChange}
        userName={userName}
      />
      <Body userData={userData} status={status} />
    </div>
  );
}

export default App;
