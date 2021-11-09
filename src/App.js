import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import Body from './components/Body';
import octocat from './octocat';
import users from './services/users';

function App() {
  const [userData, setUserData] = useState(() => octocat);
  const [theme, setTheme] = useState('dark-theme');
  const [userName, setUserName] = useState('');

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
    <div className={`app ${theme}`}>
      <div className="components-container">
        <Header handleThemeChange={handleThemeChange} theme={theme} />
        <SearchBar
          onSubmit={onSubmit}
          handleUserChange={handleUserChange}
          userName={userName}
        />
        <Body userData={userData} />
      </div>
    </div>
  );
}

export default App;
