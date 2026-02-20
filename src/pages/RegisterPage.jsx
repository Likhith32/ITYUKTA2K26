import { useRef, useCallback } from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'

const registrationOptions = [
    {
        icon: '⚡',
        title: 'General Registration - 1 Day',
        price: '₹100',
      
        features: [
           
            
        ],
        link: 'https://forms.gle/vLdWw5R9m5xJGJ7t9',
    },
    {
        icon: '🚀',
        title: 'General Registration - 2 Days',
        price: '₹200',
       
        features: [
           
            
        ],
        link: 'https://forms.gle/Um8L8CyU2ZZ3Yrx7A',
    },
    {
        icon: '🏨',
        title: 'General Registration with Accommodation - 1 Day',
        price: '₹300',
       features: [
        
    ],
    
        link: 'https://forms.gle/VdY1DyvQ5y9PPCh2A',
    },
    {
        icon: '👑',
        title: 'General Registration with Accommodation - 2 Days',
        price: '₹500',
       features: [
       
        
    ],
            link: 'https://forms.gle/XrBwGQNZdMZY8mBE9',

        
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
            <div className="card-content">
                <div className="register-icon">{option.icon}</div>
                <h3>{option.title}</h3>
                <div className="price-wrapper">
                    <img src="/images/blast.png" className="price-blast" alt="Price Tag" />
                    <span className="price-text">{option.price}</span>
                </div>
            </div>
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
