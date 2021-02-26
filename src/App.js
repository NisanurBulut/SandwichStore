import './App.css';
import Layout from './components/Layout/Layout';
import SandwichBuilder from './containers/SandwichBuilder/SandwichBuilder';

function App() {
  return (
    <div>
      <Layout>
        <p>Test</p>
        <SandwichBuilder />
      </Layout>
    </div>
  );
}

export default App;
