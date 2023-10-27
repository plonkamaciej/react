import logo from '../assets/React-icon.png';

const reactDescript = ['Fundamental', 'Crucial', 'Core'];
function getRand(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const desc = reactDescript[getRand(2)];
  return (
    <div>
      <header className="App-header">
        <div className="Logo">
          <img class="App-logo" src={logo} alt="logo" onmousedown="return false" />
          <h1>React Essentials</h1>
        </div>
        <p>{desc} React concepts you will need for almosct any app you will build!</p>
      </header>
    </div>
  );
}

export default Header;