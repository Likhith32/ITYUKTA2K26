import { useRef, useCallback } from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

const registrationOptions = [
    {
        icon: '⚡',
        title: 'General Registration for 1 Day',
        price: '₹100',
      
        features: [
           
            
        ],
        link: 'https://forms.gle/vLdWw5R9m5xJGJ7t9',
    },
    {
        icon: '🚀',
        title: 'General Registration for 2 Days',
        price: '₹200',
       
        features: [
           
            
        ],
        link: 'https://forms.gle/XrBwGQNZdMZY8mBE9',
    },
    {
        icon: '🏨',
        title: 'General Registration with Accommodation for 1 Day',
        price: '₹300',
       features: [
        
    ],
    
        link: 'https://forms.gle/VdY1DyvQ5y9PPCh2A',
    },
    {
        icon: '👑',
        title: 'General Registration with Accommodation for 2 Days',
        price: '₹500',
       features: [
       
        
    ],
        link: 'https://forms.gle/VdY1DyvQ5y9PPCh2A',
    },
]

function TiltCard({ option }) {
    const cardRef = useRef(null)

    const handleMouseMove = useCallback((e) => {
        const card = cardRef.current
        if (!card) return
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = ((y - centerY) / centerY) * -8
        const rotateY = ((x - centerX) / centerX) * 8
        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`
    }, [])

    const handleMouseLeave = useCallback(() => {
        const card = cardRef.current
        if (!card) return
        card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0) scale(1)'
    }, [])

    return (
        <a
            ref={cardRef}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`register-card ${option.popular ? 'popular' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {option.popular && <div className="register-badge">Most Popular</div>}
            <div className="register-icon">{option.icon}</div>
            <h3>{option.title}</h3>
            <p className="register-desc">{option.desc}</p>
            <div className="register-price">{option.price}</div>
            <ul className="register-features">
                {option.features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                ))}
            </ul>
            <button className="register-btn">Register Now →</button>
        </a>
    )
}

export default function RegisterPage() {
    return (
        <>
            <Navbar />
            <section className="register-section">

                <div className="container">
                    <h1 className="register-title responsive-title">
                        Register for <span className="gradient-text">ITYUKTA 2K26</span>
                    </h1>
                    <p className="register-subtext">
                        Choose your pass and secure your seat now. Limited slots available.
                    </p>

                    <div className="register-grid">
                        {registrationOptions.map((option, index) => (
                            <TiltCard key={index} option={option} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
