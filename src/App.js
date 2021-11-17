import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Body from './components/Body';
import octocat from './octocat';
import users from './services/users';
import { useLocalStorageState } from './hooks/useLocalStorageState';

function App() {
  const [userData, setUserData] = useState(() => octocat);
  const [userName, setUserName] = useState('');
  const [theme, setTheme] = useLocalStorageState('theme', 'dark-theme');

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
    users
      .get(userName)
      .then((data) => setUserData(data))
      .catch((err) => console.log(err.message));
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
      <Body userData={userData} />
    </div>
  );
}

export default App;
