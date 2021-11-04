import { useState } from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import Body from './Body';
import octocat from './octocat';

function App() {
  const [userData, setUserData] = useState(() => octocat);
  const [theme, setTheme] = useState('dark-theme');

  const onClick = () => {
    setTheme((currentTheme) => {
      if (currentTheme === 'dark-theme') {
        return 'light-theme';
      }
      return 'dark-theme';
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userName = e.target.username.value;
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className={`app ${theme}`}>
      <div className="components-container">
        <Header onClick={onClick} theme={theme} />
        <SearchBar userData={userData} onSubmit={onSubmit} />
        <Body userData={userData} />
      </div>
    </div>
  );
}

export default App;
