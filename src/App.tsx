import './App.css';
import Loader from './components/Loader';
import ProvideLocale from './hooks/useLocale/ProviderLocale';

function App() {
  return (
    <ProvideLocale>
      <Loader />
    </ProvideLocale>
  );
}

export default App;
