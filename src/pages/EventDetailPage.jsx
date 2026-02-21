import { useParams, Link } from 'react-router-dom'
import { EVENTS } from '../data/events'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function EventDetailPage() {
    const { eventId } = useParams()
    const event = EVENTS[eventId]

    if (!event) {
        return (
            <>
                <Navbar />
                <main style={{ paddingTop: '120px', textAlign: 'center', minHeight: '60vh' }}>
                    <h1 style={{ color: '#f1f5f9', fontSize: '2.5rem' }}>Event Not Found</h1>
                    <p style={{ color: 'rgba(148,163,184,0.8)', marginTop: '1rem', fontSize: '1.1rem' }}>
                        The event you're looking for doesn't exist or has been removed.
                    </p>
                    <Link to="/events" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                        Browse All Events
                    </Link>
                </main>
                <Footer minimal />
            </>
        )
    }

    const isWorkshop = event.category === 'workshop' || event.isWorkshop


    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    {/* Back link */}
                    <Link to="/events" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 500, marginBottom: '2rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                        Back to Events
                    </Link>

                    {/* Header */}
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <div style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.25rem' }}>
                            {event.icon && event.icon.startsWith('fa-') ? (
                                <i className={event.icon}></i>
                            ) : (
                                event.icon
                            )}
                        </div>
                        <span style={{ display: 'inline-block', padding: '0.4rem 1.25rem', borderRadius: '30px', background: isWorkshop ? 'rgba(16,185,129,0.15)' : 'rgba(0,229,255,0.1)', color: isWorkshop ? '#34d399' : 'var(--accent-primary)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.5rem' }}>
                            {event.category}
                        </span>
                        <h1 className="responsive-title" style={{ fontWeight: 800, color: '#f1f5f9', marginBottom: '1.5rem' }}>{event.name}</h1>
                        <p style={{ color: 'rgba(148,163,184,0.9)', fontSize: 'clamp(1rem, 2.5vw, 1.15rem)', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto' }}>{event.longDescription || event.description}</p>
                    </div>

                    {/* Info Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
                        {[
                            { icon: '📅', label: 'Date', value: event.date },
                            { icon: '⏰', label: 'Time', value: event.time || 'TBA' },
                            { icon: '⏱️', label: 'Duration', value: event.duration },
                            { icon: '📍', label: 'Venue', value: event.venue },
                            { icon: '👥', label: 'Team Size', value: event.teamSize },
                            { icon: '💰', label: event.fee === 0 ? 'Fee' : 'Entry Fee', value: event.fee === 0 ? 'FREE' : `₹${event.fee}` },
                        ].map((info, i) => (
                            <div key={i} style={{ padding: '1.25rem', borderRadius: '16px', background: 'rgba(15,20,45,0.6)', border: '1px solid rgba(0,229,255,0.08)', textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{info.icon}</div>
                                <div style={{ fontSize: '0.7rem', color: 'rgba(148,163,184,0.6)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.3rem' }}>{info.label}</div>
                                <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.9rem' }}>{info.value}</div>
                            </div>
                        ))}
                    </div>

                    {/* Prizes */}
                    {event.prizes && (
                        <div style={{ marginBottom: '3rem', padding: '2rem', borderRadius: '20px', background: 'linear-gradient(145deg, rgba(15,20,45,0.8), rgba(10,12,30,0.95))', border: '1px solid rgba(0,229,255,0.1)' }}>
                            <h2 style={{ fontSize: '1.5rem', color: '#f1f5f9', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>🏆 Prizes</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {event.prizes.map((prize, i) => (
                                    <div key={i} style={{ flex: '1 1 200px', padding: '1rem', borderRadius: '12px', background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.1)', color: '#e2e8f0', textAlign: 'center' }}>
                                        {prize}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Rules */}
                    {event.rules && (
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', color: '#f1f5f9', marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '4px solid var(--accent-primary)' }}>📋 Rules & Guidelines</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {event.rules.map((rule, i) => (
                                    <li key={i} style={{ padding: '0.6rem 0 0.6rem 1.5rem', position: 'relative', color: 'rgba(148,163,184,0.9)', lineHeight: 1.7 }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>✦</span> {rule}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Workshop-specific fields */}
                    {isWorkshop && event.topics && (
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', color: '#f1f5f9', marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '4px solid #34d399' }}>📚 Topics Covered</h2>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {event.topics.map((topic, i) => (
                                    <span key={i} style={{ padding: '0.5rem 1rem', borderRadius: '25px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#34d399', fontSize: '0.85rem' }}>{topic}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {isWorkshop && event.prerequisites && (
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '1.5rem', color: '#f1f5f9', marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '4px solid #f59e0b' }}>⚡ Prerequisites</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {event.prerequisites.map((p, i) => (
                                    <li key={i} style={{ padding: '0.5rem 0 0.5rem 1.5rem', position: 'relative', color: 'rgba(148,163,184,0.9)' }}>
                                        <span style={{ position: 'absolute', left: 0 }}>•</span> {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Contact */}
                    {event.coordinator && (
                        <div style={{ marginBottom: '3rem', padding: '1.5rem', borderRadius: '16px', background: 'rgba(15,20,45,0.6)', border: '1px solid rgba(0,229,255,0.08)' }}>
                            <h3 style={{ color: '#f1f5f9', marginBottom: '0.5rem' }}>📞 Event Coordinator</h3>
                            <p style={{ color: 'rgba(148,163,184,0.9)' }}>{event.coordinator} • {event.contact}</p>
                        </div>
                    )}

                    {/* CTA */}
                    <div style={{ textAlign: 'center', padding: '3rem 2rem', marginBottom: '3rem', borderRadius: '24px', background: 'linear-gradient(145deg, rgba(15,20,45,0.8), rgba(10,12,30,0.95))', border: '1px solid rgba(0,229,255,0.15)' }}>
                        <h2 style={{ fontSize: '2rem', color: '#f1f5f9', marginBottom: '1rem' }}>Ready to Participate?</h2>
                        <p style={{ color: 'rgba(148,163,184,0.8)', marginBottom: '2rem' }}>Register now and secure your spot!</p>
                        <a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
