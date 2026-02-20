import { useParams, Link } from 'react-router-dom'
import { EVENTS } from '../data/events'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/event-page.css'

export default function IndividualEventPage() {
    const { eventSlug } = useParams()
    const event = EVENTS[eventSlug]

    if (!event) {
        return (
            <>
                <Navbar />
                <main style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
                    <h1 style={{ color: '#f1f5f9', fontSize: '2rem' }}>Event Not Found</h1>
                    <p style={{ color: 'rgba(148,163,184,0.8)', marginTop: '1rem' }}>The event you're looking for doesn't exist.</p>
                    <Link to="/" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-block' }}>Go Home</Link>
                </main>
                <Footer minimal />
            </>
        )
    }

    const isWorkshop = event.isWorkshop

    const getRegistrationUrl = () => {
        return event.registrationUrl || 'https://forms.gle/fYe4zPF6RxT8fDk47'
    }

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
                {/* Hero */}
                <div className={isWorkshop ? 'workshop-hero' : 'event-page-hero'}>
                    <div>
                        <Link to="/#events" className="back-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </Link>
                        <div className={isWorkshop ? 'workshop-hero-icon' : 'event-page-icon'}>{event.icon}</div>
                        <div className={isWorkshop ? 'workshop-hero-badge' : 'event-page-badge'}>{event.category}</div>
                        <h1>{event.name}</h1>
                        <p>{event.description}</p>
                    </div>
                </div>

                {/* Info Cards */}
                <div className={isWorkshop ? 'workshop-detail-section' : 'event-detail-section'}>
                    <div className="info-cards">
                        {[
                            { icon: '📅', label: 'Date', value: event.date },
                            { icon: '⏰', label: 'Time', value: event.time },
                            { icon: '👤', label: 'Team Size', value: event.teamSize },
                            { icon: '💰', label: 'Fee', value: `₹${event.fee}` }
                        ].map((card, i) => (
                            <div key={i} className="info-card">
                                <div className="info-card-icon">{card.icon}</div>
                                <h4>{card.label}</h4>
                                <p>{card.value}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Sections */}
                    <div className={isWorkshop ? 'workshop-detail-section' : 'event-detail-section'}>
                        <h2>About the Event</h2>
                        <p>{event.longDescription}</p>
                    </div>
                    <div className={isWorkshop ? 'workshop-detail-section' : 'event-detail-section'}>
                        <h2>Rules & Format</h2>
                        <ul>
                            {event.rules.map((rule, j) => (
                                <li key={j}>{rule}</li>
                            ))}
                        </ul>
                    </div>

                {/* Register CTA */}
                <div className={isWorkshop ? 'workshop-detail-section' : 'event-detail-section'} id="register">
                    <div className="register-cta">
                        <h2>Ready to Participate?</h2>
                        <p>Register now and secure your spot!</p>
                        <a href={event.registrationUrl || getRegistrationUrl()} target="_blank" rel="noopener noreferrer" className="btn-register">
                            Register Now
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}
