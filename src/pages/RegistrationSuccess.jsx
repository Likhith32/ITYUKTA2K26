import { Link, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RegistrationSuccess() {
    const location = useLocation()
    const name = location.state?.name || 'Participant'
    const passType = location.state?.passType || 'Full Pass'

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '120px', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', maxWidth: '600px', padding: '3rem 2rem', borderRadius: '24px', background: 'linear-gradient(145deg, rgba(15,20,45,0.8), rgba(10,12,30,0.95))', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>🎉</div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '1rem' }}>
                        Registration <span style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Successful!</span>
                    </h1>
                    <p style={{ color: 'rgba(148,163,184,0.9)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                        Welcome aboard, <strong style={{ color: '#f1f5f9' }}>{name}</strong>! Your <strong style={{ color: '#34d399' }}>{passType}</strong> registration has been confirmed. Check your email for confirmation details.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/" className="btn btn-primary">
                            Go Home
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                        <Link to="/events" className="btn btn-secondary">Explore Events</Link>
                    </div>
                </div>
            </main>
            <Footer minimal />
        </>
    )
}
