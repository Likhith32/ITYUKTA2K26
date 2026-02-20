import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import jntuLogo from '../assets/jntugv-logo.png'
import aicteLogo from '../assets/AICTE-Logo-Vector.svg-.png'
import acmLogo from '../assets/acm-logo.png'
import iicLogo from '../assets/institution innovation c.jpg'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        setMenuOpen(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    // Premium scroll-shrink effect
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar')
            if (!navbar) return
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled')
            } else {
                navbar.classList.remove('scrolled')
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isHome = location.pathname === '/'
    const navLinks = [
        { to: isHome ? '#home' : '/', label: 'Home', isHash: isHome },
        { to: isHome ? '#about' : '/#about', label: 'About', isHash: isHome },
        { to: isHome ? '#schedule' : '/#schedule', label: 'Schedule', isHash: isHome },
        { to: '/register', label: 'Register' },
        { to: '/contact', label: 'Contact' },
    ]

    const handleHashClick = (e, hash) => {
        if (isHome) {
            e.preventDefault()
            const target = document.querySelector(hash)
            if (target) {
                window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
                setMenuOpen(false)
            }
        }
    }

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">

                    {/* LEFT SIDE */}
                    <div className="navbar-left">
                        <img src={jntuLogo} alt="JNTU Logo" className="nav-logo-jntu" />

                        <div className="brand">
                            <img src="/images/LOGOFINAL (1).png" alt="ITYUKTA" className="brand-logo" />
                            <span className="brand-text">ITYUKTA 2K26</span>
                        </div>
                    </div>

                    {/* CENTER LINKS */}
                    <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        {navLinks.map((link) => (
                            <li key={link.label}>
                                {link.isHash ? (
                                    <a
                                        href={link.to}
                                        className="nav-link"
                                        onClick={(e) => handleHashClick(e, link.to)}
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.to}
                                        className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* RIGHT SIDE */}
                    <div className="navbar-right">
                        <img src={aicteLogo} alt="AICTE Logo" className="nav-logo-small" />
                        <img src={acmLogo} alt="ACM Logo" className="nav-logo-acm" />

                        <img src={iicLogo} alt="IIC Logo" className="nav-logo-small" />

                        {/* Mobile Toggle */}
                        <button
                            className={`nav-toggle ${menuOpen ? 'active' : ''}`}
                            id="navToggle"
                            aria-label="Toggle navigation"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)', borderRadius: '2px', width: '20px', height: '2px' } : {}}></span>
                            <span style={menuOpen ? { opacity: 0 } : {}}></span>
                            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)', borderRadius: '2px', width: '20px', height: '2px' } : {}}></span>
                        </button>
                    </div>

                </div>
            </nav>

            {/* Mobile backdrop */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    style={{
                        position: 'fixed', inset: 0,
                        background: 'rgba(0,0,0,0.55)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 999,
                    }}
                />
            )}
        </>
    )
}
