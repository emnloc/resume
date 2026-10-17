import './App.css';
import ProvideLocale from './hooks/useLocale/ProviderLocale';
import Header from './components/Header';
import ArchivalBanner from './components/ArchivalBanner';
import Sidebar from './components/Sidebar';
import ProfessionalSummary from './components/ProfessionalSummary';
import Experience from './components/Experience';
import SkillMatrix from './components/SkillMatrix';
import ReferenceProjects from './components/ReferenceProjects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ProvideLocale>
      <div className="min-h-screen bg-surface font-body-md text-on-surface flex flex-col antialiased">
        <Header />

        <main className="w-full pt-16 bg-surface min-h-[calc(100vh-80px)] flex-1">
          <div className="flex flex-col w-full">
            <div className="max-w-[1120px] mx-auto w-full px-gutter py-space-xl">
              {/* TOP ARCHIVAL SPECIMEN BANNER */}
              <ArchivalBanner />

              {/* MAIN DOSSIER DUAL-GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
                {/* LEFT META COLUMN / OPERATIONAL SUMMARY (4 COLS) */}
                <Sidebar />

                {/* RIGHT CONTENT STREAM (8 COLS) */}
                <section className="lg:col-span-8 flex flex-col gap-space-xl">
                  <ProfessionalSummary />
                  <Experience />
                  <SkillMatrix />
                  <ReferenceProjects />
                  <Education />
                  <Contact />
                </section>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ProvideLocale>
  );
}

export default App;
