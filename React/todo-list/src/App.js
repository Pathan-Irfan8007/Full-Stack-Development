// src/App.js
import './App.css';
import Header from './components/Header'; // Default import
import Main from './components/Main';     // Default import
import { Footer } from './components/Footer'; // Named import

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;