import { useState } from 'react'
import { Link } from 'react-router-dom'
import { EVENTS } from '../data/events'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const categories = [
    { key: 'all', label: 'All Events' },
    { key: 'technical', label: 'Technical' },
    { key: 'workshop', label: 'Workshops' },
    { key: 'fun', label: 'Fun & Games' },
    { key: 'cultural', label: 'Cultural' },
]

export default function EventsPage() {
    const [activeFilter, setActiveFilter] = useState('all')
    const eventsList = Object.entries(EVENTS)
    const filteredEvents = activeFilter === 'all'
        ? eventsList
        : eventsList.filter(([, ev]) => ev.category === activeFilter)

    return (
        <>
            <Navbar />
            <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
                <div className="container">
                    {/* Header */}
                    <div className="section-header" style={{ marginBottom: '3rem' }}>
                        <div className="section-eyebrow reveal"><span className="terminal-prompt">&gt;</span> Event_Database</div>
                        <h1 className="section-title reveal shine-slow responsive-title">
                            Explore All <span className="gradient-text">Events</span>
                        </h1>
                        <p className="section-description reveal">
                            Browse our complete lineup of technical competitions, workshops, cultural events, and fun activities.
                        </p>
                    </div>

                    {/* Filter */}
                    <div className="events-filter reveal" style={{ marginBottom: '2rem' }}>
                        {categories.map(cat => (
                            <button
                                key={cat.key}
                                className={`filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
                                onClick={() => setActiveFilter(cat.key)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Events Grid */}
                    <div className="events-grid">
                        {filteredEvents.map(([slug, ev], idx) => (
                            <Link
                                key={slug}
                                to={`/events/${slug}`}
                                className="event-card reveal"
                                data-category={ev.category}
                                style={{ transitionDelay: `${idx * 0.05}s` }}
                            >
                                <div className="event-icon">{ev.icon}</div>
                                <div className="event-category">{ev.category.charAt(0).toUpperCase() + ev.category.slice(1)}</div>
                                <h3>{ev.name}</h3>
                                <p>{ev.description}</p>
                                <div className="event-meta">
                                    <span>🏷️ {ev.category.charAt(0).toUpperCase() + ev.category.slice(1)}</span>
                                    <span>👥 {ev.teamSize}</span>
                                </div>
                                <div className="event-footer">
                                    <span className="event-price">{ev.fee === 0 ? 'Free Entry' : `₹${ev.fee}`}</span>
                                    <span className="event-register-btn">
                                        View Details
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
