import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import PizzaBuilder from './containers/PizzaBuilder/PizzaBuilder';
function App() {
  return (
    <div>
      <Layout>
        <p>Test</p>
        <PizzaBuilder />
      </Layout>
    </div>
  );
}

export default App;
