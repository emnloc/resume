import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Sidebar from './components/Sidebar';
import ProvideLocale from './hooks/useLocale/ProviderLocale';

function App() {
  return (
    <ProvideLocale>
      <div className="text-sm text-gray-600 bg-slate-50 h-full border-2">
        <div className="max-w-xl lg:max-w-5xl mx-auto px-4 my-4">
          <div className="grid lg:gap-4 grid-cols-1 lg:grid-cols-3">
            <Sidebar />
            <div className="px-5 col-span-2">
              <Experience />
              <Education />
            </div>
          </div>
        </div>
      </div>
    </ProvideLocale>
  );
}

export default App;
