import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ServerErrorPage() {
    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '120px', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', maxWidth: '500px' }}>
                    <div style={{ fontSize: '6rem', marginBottom: '1rem' }}>⚠️</div>
                    <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.5rem' }}>500</h1>
                    <h2 style={{ fontSize: '1.5rem', color: 'rgba(148,163,184,0.9)', marginBottom: '1rem' }}>Server Error</h2>
                    <p style={{ color: 'rgba(148,163,184,0.7)', marginBottom: '2rem', lineHeight: 1.7 }}>
                        Something went wrong on our end. Please try again later.
                    </p>
                    <Link to="/" className="btn btn-primary">
                        Go Home
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </main>
            <Footer minimal />
        </>
    )
}
