import { useState } from 'react';
import SearchBar from './SearchBar';
import Header from './Header';
import Body from './Body';

function App() {
  const [userData, setUserData] = useState(() => ({}));

  const onSubmit = (e) => {
    e.preventDefault();

    const userName = e.target.username.value;
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="app dark-theme">
      <Header />
      <SearchBar userData={userData} onSubmit={onSubmit} />
      <Body userData={userData} />
    </div>
  );
}

export default App;
