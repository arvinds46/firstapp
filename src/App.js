import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloworld';
import Counter from './components/counter';
import Alert from './components/alert';
import Header from './components/header';
import BasicExample from './components/navbar';
import DarkVariantExample from './components/carousel';
import BorderExample from './components/cards';

function App() {
  return (
    <div className="App">
      <Header />
      <BasicExample />
      <DarkVariantExample />
      <br />
      <BorderExample />
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code><HelloWorld /></code>
        </p>
        <Counter />
        <Alert />
        </header>
    </div>
  );
}

export default App;
