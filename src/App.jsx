import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import ScrollToTop from './components/ScrollToTop'
import CursorGlitter from './components/CursorGlitter'

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const EventsPage = lazy(() => import('./pages/EventsPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const RegistrationSuccess = lazy(() => import('./pages/RegistrationSuccess'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const EventDetailPage = lazy(() => import('./pages/EventDetailPage'))
const IndividualEventPage = lazy(() => import('./pages/IndividualEventPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const ServerErrorPage = lazy(() => import('./pages/ServerErrorPage'))

// Loading fallback with LOGOFINAL image
function LoadingFallback() {
  return (
    <div className="preloader" id="preloader">
      <div className="preloader-content">
        <div className="preloader-terminal">
          <div className="terminal-line"><span className="terminal-prompt">&gt;</span> <span>Loading...</span></div>
        </div>
        {/* Use LOGOFINAL image in preloader */}
        <div className="preloader-logo">
          <img
            src="/images/LOGOFINAL (1).png"
            alt="ITYUKTA 2K26"
            style={{ width: '120px', height: '120px', objectFit: 'contain', borderRadius: '50%' }}
          />
        </div>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      {/* Global cursor glitter effect — visible on every page */}
      <CursorGlitter />
      <ScrollToTop />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventId" element={<EventDetailPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/registration-success" element={<RegistrationSuccess />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Individual event pages (static) */}
          <Route path="/event/:eventSlug" element={<IndividualEventPage />} />

          {/* Error pages */}
          <Route path="/error" element={<ServerErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
