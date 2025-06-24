import { Link } from 'react-router-dom';

function MainNav() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '30px',
    textAlign: 'center',
    backgroundColor: 'white',
  };
  const linkStyle = {
    backgroundColor: 'blue',
    padding: '20px',
    color: 'white',
  };
  return (
    <nav style={navStyle} id="main-nav">
      <Link style={linkStyle} to="/">
        Home
      </Link>
      <Link style={linkStyle} to="/artists">
        Artists
      </Link>
      <Link style={linkStyle} to="/battles">
        Battles
      </Link>
      <Link style={linkStyle} to="/leaderboard">
        LeaderBoard
      </Link>
    </nav>
  );
}
export default MainNav;
