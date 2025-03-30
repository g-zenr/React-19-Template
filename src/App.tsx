import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/auth/LoginPage';
import { ResponsiveLayout } from './components/layout/ResponsiveLayout';
import ResponsiveCardPage from './pages/examples/ResponsiveCardPage';
import TailwindApplyExample from './components/examples/TailwindApplyExample';
import VulcanThemePage from './pages/examples/VulcanThemePage';
import { useTheme } from './context/ThemeContext';

function Home() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <div className="min-h-screen bg-[var(--color-vulcan-50)]">
      {/* Header with logo and search */}
      <header className="border-b border-[var(--color-vulcan-200)] py-4">
        <div className="container-custom flex-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-md bg-[var(--color-vulcan-500)] flex-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
              </svg>
            </div>
            <span className="text-xl font-bold text-[var(--color-vulcan-900)]">Bryan Gabriel Template</span>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center relative max-w-md w-full mx-4">
            <div className="relative w-full">
              <input 
                type="text"
                placeholder="Search documentation..."
                className="w-full py-1.5 pl-10 pr-4 rounded-md border border-[var(--color-vulcan-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-vulcan-500)]"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-vulcan-400)]">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color-vulcan-400)] text-xs">⌘K</div>
          </div>
          
          <div className="flex items-center gap-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-[var(--color-vulcan-100)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-[var(--color-vulcan-600)]">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <button 
              className="p-2 rounded-md hover:bg-[var(--color-vulcan-100)]"
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-vulcan-600)]">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-vulcan-600)]">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      
      {/* Hero section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-vulcan-900)]">
              Build your modern React app with Tailwind v4
            </h1>
            <p className="text-xl text-[var(--color-vulcan-600)] mb-8">
              A feature-rich template with React Router, Tailwind CSS v4, and responsive utilities.
              Open source. Ready for production.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/responsive" className="btn-primary px-6 py-3">
                Get Started
              </a>
              <a href="/vulcan-theme" className="btn-outline px-6 py-3">
                Browse Components
              </a>
            </div>
          </div>
          
          {/* Color palette preview */}
          <div className="bg-white border border-[var(--color-vulcan-200)] rounded-lg p-6 max-w-4xl mx-auto shadow-lg dark:bg-[var(--color-vulcan-100)]">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
              <div className="p-4 rounded bg-[var(--color-vulcan-100)] text-center text-sm font-medium">vulcan-100</div>
              <div className="p-4 rounded bg-[var(--color-vulcan-200)] text-center text-sm font-medium">vulcan-200</div>
              <div className="p-4 rounded bg-[var(--color-vulcan-300)] text-center text-sm font-medium">vulcan-300</div>
              <div className="p-4 rounded bg-[var(--color-vulcan-400)] text-white text-center text-sm font-medium">vulcan-400</div>
              <div className="p-4 rounded bg-[var(--color-vulcan-500)] text-white text-center text-sm font-medium">vulcan-500</div>
              <div className="p-4 rounded bg-[var(--color-vulcan-600)] text-white text-center text-sm font-medium">vulcan-600</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section className="py-16 bg-[var(--color-vulcan-100)]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-vulcan-800)]">Features</h2>
            <p className="text-[var(--color-vulcan-600)] max-w-2xl mx-auto">
              This template includes everything you need to build modern React applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-vulcan-500)] flex-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--color-vulcan-800)]">Responsive Layouts</h3>
              <p className="text-[var(--color-vulcan-600)]">Pre-built responsive components that look great on any device</p>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-vulcan-500)] flex-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--color-vulcan-800)]">Modern Styling</h3>
              <p className="text-[var(--color-vulcan-600)]">Tailwind CSS v4 with custom theme variables and utilities</p>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--color-vulcan-500)] flex-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3h18a0 0 0 0 1 0 0v18a0 0 0 0 1 0 0h-18a0 0 0 0 1 0 0v-18a0 0 0 0 1 0 0z"></path>
                  <path d="M3 9h18"></path>
                  <path d="M3 15h18"></path>
                  <path d="M9 3v18"></path>
                  <path d="M15 3v18"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--color-vulcan-800)]">Ready-to-use Components</h3>
              <p className="text-[var(--color-vulcan-600)]">Authentication, cards, layouts and more - ready for your next project</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[var(--color-vulcan-800)]">Explore the template</h2>
            <p className="text-[var(--color-vulcan-600)] max-w-2xl mx-auto">
              Check out all the features and components available in this template
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a href="/login" className="card p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-vulcan-800)]">Authentication</h3>
              <p className="text-sm text-[var(--color-vulcan-600)]">Pre-built login and authentication components</p>
            </a>
            
            <a href="/responsive" className="card p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-vulcan-800)]">Responsive Demo</h3>
              <p className="text-sm text-[var(--color-vulcan-600)]">Examples of responsive design patterns</p>
            </a>
            
            <a href="/responsive-cards" className="card p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-vulcan-800)]">Responsive Cards</h3>
              <p className="text-sm text-[var(--color-vulcan-600)]">Card components that adapt to any screen size</p>
            </a>
            
            <a href="/tailwind-apply" className="card p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-vulcan-800)]">Tailwind @apply</h3>
              <p className="text-sm text-[var(--color-vulcan-600)]">Examples of using Tailwind's @apply directive</p>
            </a>
            
            <a href="/vulcan-theme" className="card p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-vulcan-800)]">Vulcan Theme</h3>
              <p className="text-sm text-[var(--color-vulcan-600)]">Explore the Vulcan color palette and components</p>
            </a>
            
            <a href="/about" className="card p-6 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold mb-2 text-[var(--color-vulcan-800)]">About</h3>
              <p className="text-sm text-[var(--color-vulcan-600)]">Learn more about this template</p>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 border-t border-[var(--color-vulcan-200)]">
        <div className="container-custom text-center text-[var(--color-vulcan-600)]">
          <p>© 2023 Bryan Gabriel FE Template. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React, Tailwind CSS v4, and modern best practices.</p>
        </div>
      </footer>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-[var(--color-vulcan-50)] py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 border border-[var(--color-vulcan-200)] dark:bg-[var(--color-vulcan-100)]">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-[var(--color-vulcan-200)]">
              <div className="py-8 text-base leading-6 space-y-4 text-[var(--color-vulcan-700)] sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold mb-4 text-[var(--color-vulcan-800)]">About Page</h1>
                <p className="mb-4 text-[var(--color-vulcan-600)]">This template demonstrates:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-[var(--color-vulcan-600)]">
                  <li>Tailwind CSS v4 with custom theme variables</li>
                  <li>Reusable Tailwind class combinations</li>
                  <li>Feature-based folder structure</li>
                  <li>Custom UI components (like shadcn/ui)</li>
                  <li>Authentication hooks</li>
                  <li>Responsive design utilities</li>
                </ul>
                <a 
                  href="/" 
                  className="btn-primary"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/responsive" element={<ResponsiveLayout />} />
        <Route path="/responsive-cards" element={<ResponsiveCardPage />} />
        <Route path="/tailwind-apply" element={<TailwindApplyExample />} />
        <Route path="/vulcan-theme" element={<VulcanThemePage />} />
      </Routes>
    </div>
  );
}

export default App;
