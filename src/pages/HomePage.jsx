import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { EVENTS } from '../data/events'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import TechGlobe from '../components/TechGlobe'

import srikanthSirImg from '../assets/Srikanthsir.jpeg'
import villageSportsImg from '../assets/VillageSports.png'
import villageMindsImg from '../assets/VillageMinds.jpg'
import dassImg from '../assets/Dass.jpeg'
import asmaImg from '../assets/Asma.jpeg'
import anilImg from '../assets/anil.jpeg'
import choiiImg from '../assets/Choii.jpeg'
import flashNightImg from "../assets/flashmib'.jpeg"
import flashMobImg from '../assets/mob.jpeg'
import likhithImg from '../assets/likhith.jpeg'
import sagarImg from '../assets/sagar.jpeg'
import lavanyaImg from '../assets/lavanaya.jpeg'
import suriImg from '../assets/suri.jpeg'
import madhuImg from '../assets/madhu.jpeg'
import praviImg from '../assets/pravi.jpeg'
import lalityaImg from '../assets/lalitya.jpeg'
import sarojImg from '../assets/Saroj.jpeg'
import deekshithaImg from '../assets/deekshitha.jpeg'
import jkImg from '../assets/jk.jpeg'
import dharaniImg from '../assets/dharani.jpeg'


/* ──────────── DATA ──────────── */
const TEAM_MEMBERS = [
    { name: "P. Sravan Kumar", role: "Treasurer", img: null },
    { name: "M. Likhith Kumar", role: "Tech Co-ordinator", img: likhithImg },
    { name: "Kundum Pravallika", role: "Tech Co-ordinator", img: praviImg },
    { name: "B. Hema Sagar", role: "Non-Tech Co-ordinator", img: sagarImg },
    { name: "Lavanya", role: "Non-Tech Co-ordinator", img: lavanyaImg },
    { name: "Jayakumar", role: "Flash Mob Co-ordinator", img: jkImg },
    { name: "Deekshitha", role: "Flash Mob Co-ordinator", img: deekshithaImg },
    { name: "Shabira", role: "Flash Mob Co-ordinator", img: null },
    { name: "Hemanth", role: "Flash Mob Co-ordinator", img: null },
    { name: "Dharani", role: "Flash Mob Co-ordinator", img: dharaniImg },
    { name: "Surendar Reddy", role: "Cultural Co-ordinator", img: suriImg },
    { name: "Saroj", role: "Cultural Co-ordinator", img: sarojImg },
    { name: "Madhu Sarvani", role: "Cultural Co-ordinator", img: madhuImg },

    { name: "Lalitya", role: "Cultural Co-ordinator", img: lalityaImg },
]

const GUESTS = [
    { img: '/images/vice_chancelor.jpeg', name: 'Prof. V. V. Subba Rao', title: "Hon'ble Vice Chancellor", org: 'JNTU-GV, Vizianagaram' },
    { img: '/images/jaya_suma.png', name: 'Prof. G. Jayasuma', title: "Registrar", org: 'JNTU-GV, Vizianagaram' },
]
const PATRONS = [
    { img: '/images/principal.2ea2f33ffe16c6117209.jpeg', name: 'Prof. R. Rajeswara Rao', title: 'Principal(I/C)', org: 'JNTU-GV College of Engineering\nVizianagaram(A)' },
    { img: '/images/vice.a2a78ca5ed0c8750876b.jpg', name: 'Prof. G. J. Naga Raju', title: 'Vice-Principal', org: 'JNTU-GV College of Engineering\nVizianagaram(A)' },
]
const FACULTY = [
    { img: '/images/tirimula_rao.png', name: 'Dr.B.Tirimula Rao', role: 'Associate Professor' },
    { img: '/images/anil.jpeg', name: 'Mr.W.Anil', role: 'Assistant Professor' },
    { img: '/images/roje_mam.png', name: 'Mrs.R.Roje Spandana', role: 'Assistant Professor' },
    { img: '/images/manasa.png', name: 'Mrs.B.Manasa', role: 'Assistant Professor' },

    { img: '/images/madhumitha.jpeg', name: 'Mrs.Madhumitha Chanda', role: 'Assistant Professor' },
    { img: '/images/geetha_madhuri.jpeg', name: 'Mrs.M.Geetha Madhuri Yadav', role: 'Assistant Professor' },
]
const FACULTY_COORDINATORS = [
    { img: '/images/bindu_madhuri.png', name: 'Dr.Ch.Bindu Madhuri', role: 'Associate Professor & HOD IT' },
    { img: srikanthSirImg, name: 'Dr.K.Srikanth',role: 'Assistant Professor(Contract)' },
]
const COORDINATORS = [
    { img: dassImg, name: 'Y.G.S.Karthik', role: 'Fest Co-ordinator', contact: '9182888062', instagram: 'https://www.instagram.com/y._g.s.karthik_chowdary?igsh=OW51NWZlNHdraTlu' },
    { img: anilImg, name: 'M.Anil Kumar', role: 'Fest Co-ordinator', contact: '9014232690', instagram: 'https://www.instagram.com/mr_anil_9604?igsh=MXJwaDQ1Z2ZxMmRlcQ==' },
    { img: choiiImg, name: 'CH.Sai Rupini', role: 'Fest Co-ordinator', instagram: 'https://www.instagram.com/rupa._.2609?igsh=aTB0a2toYml3dHg1' },
    { img: asmaImg, name: 'SK.Asma', role: 'Fest Co-ordinator', instagram: 'https://www.instagram.com/dads_princess_57?igsh=M3lxZzBuZWdqOWNj' },
]
const EVENT_CARDS_LIST = Object.entries(EVENTS).map(([slug, ev]) => ({
    slug,
    icon: ev.icon,
    cat: ev.category,
    title: ev.name,
    desc: ev.description,
    meta: [`🏷️ ${ev.category}`, `👥 ${ev.teamSize}`],
    fee: ev.fee,
    registrationUrl: ev.registrationUrl
}))
const HIGHLIGHTS = [
    { icon: '💡', title: 'Innovation Hub', desc: 'Access cutting-edge technology and innovative ideas from industry leaders.' },
    { icon: '🎓', title: 'Expert Mentorship', desc: 'Learn from industry veterans and get guidance on your tech journey.' },
    { icon: '🏆', title: 'Massive Prize Pool', desc: 'Compete for ₹2.5 Lakh+ in prizes across all events.' },
    { icon: '🤝', title: 'Networking', desc: 'Connect with 2000+ developers, designers, and innovators.' },
    { icon: '📜', title: 'Certificates', desc: 'Get recognized with official certificates for participation.' },
    { icon: '🚀', title: 'Career Boost', desc: 'Get noticed by top recruiters and fast-track your career.' },
]
const DAY1 = [
    { time: '09:00 AM', title: 'Inauguration Ceremony', desc: 'Formal inauguration and welcome address by distinguished guests.' },
    { time: '10:30 AM', title: 'Vibe Coding Workshop', desc: 'Interactive creative coding workshop begins.' },
    { time: '01:00 PM', title: 'Lunch Break', desc: 'Refreshments and networking session.' },
    { time: '02:00 PM', title: 'Technical & Non-Technical Events', desc: 'All competitions and activities begin across multiple venues.' },
    { time: '04:00 PM', title: 'Treasure Hunt', desc: 'Campus-wide clue-based challenge begins.' },
    { time: '06:30 PM', title: 'Cultural Event', desc: 'Music, dance, and entertainment performances begin.' },
]
const DAY2 = [
    { time: '10:00 AM', title: 'Agentic AI Workshop', desc: 'Hands-on workshop on building intelligent AI agents.' },
    { time: '01:00 PM', title: 'Lunch Break', desc: 'Recharge and networking session.' },
    { time: '02:00 PM', title: 'Technical & Non-Technical Events', desc: 'Continuation of all competitive events.' },
    { time: '04:00 PM', title: 'Valedictory Ceremony', desc: 'Closing ceremony and prize distribution.' },
    { time: '05:00 PM', title: 'Flash Mob', desc: 'Grand flash mob celebration and closing highlight.' },
]
const FAQS = [
    { q: 'Who can participate in ITYUKTA 2K26?', a: "ITYUKTA is open to all college students from any branch and year. Whether you're a first-year or final-year student, you're welcome!" },
    { q: 'Is registration really free?', a: 'No! Registration is not free for all participants. No hidden charges.' },
    { q: 'Can I participate in multiple events?', a: 'Absolutely! You can participate in as many events as you want, as long as there are no schedule conflicts.' },
    { q: 'What should I bring to the event?', a: "Bring your laptop, charger, college ID, and enthusiasm! We'll provide internet access and power outlets." },
]
const SPONSORS = [
    { type: 'image', src: villageSportsImg, name: 'Village Sports' },
    { type: 'image', src: villageMindsImg, name: 'Village Minds' },
]
const GLOBE_TAGS = [
    'devicon-java-plain colored', 'devicon-python-plain colored', 'devicon-javascript-plain colored',
    'devicon-react-original colored', 'devicon-html5-plain colored', 'devicon-css3-plain colored',
    'devicon-nodejs-plain colored', 'devicon-docker-plain colored', 'devicon-git-plain colored',
    'devicon-mysql-plain colored', 'devicon-typescript-plain colored', 'devicon-github-original',
    'devicon-mongodb-plain colored', 'devicon-vuejs-plain colored', 'devicon-angularjs-plain colored',
    'devicon-linux-plain colored', 'devicon-firebase-plain colored', 'devicon-amazonwebservices-original colored',
    'devicon-flutter-plain colored', 'devicon-kotlin-plain colored', 'devicon-rust-plain',
    'devicon-go-original-wordmark colored', 'devicon-swift-plain colored', 'devicon-redis-plain colored',
    'devicon-postgresql-plain colored', 'devicon-kubernetes-plain colored', 'devicon-tensorflow-original colored',
    'devicon-cplusplus-plain colored',
]

/* ──────────── TEAM CAROUSEL ──────────── */
function TeamCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const cardWidth = 270 // 250px card + 20px gap

    const next = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % TEAM_MEMBERS.length)
    }, [])

    const prev = useCallback(() => {
        setCurrentIndex(prev => (prev - 1 + TEAM_MEMBERS.length) % TEAM_MEMBERS.length)
    }, [])

    useEffect(() => {
        const timer = setInterval(next, 2000)
        return () => clearInterval(timer)
    }, [next])

    // Triple the array for seamless wrapping
    const extendedMembers = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS]

    return (
        <section className="team-carousel-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title reveal shine-slow">
                        Our <span className="gradient-text">Core Team</span>
                    </h2>
                </div>

                <div className="carousel-wrapper">
                    <button className="carousel-btn carousel-btn-left" onClick={prev} aria-label="Previous">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                    </button>

                    <div className="carousel-viewport">
                        <div
                            className="carousel-track"
                            style={{
                                transform: `translateX(-${(currentIndex + TEAM_MEMBERS.length) * cardWidth}px)`,
                                transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                        >
                            {extendedMembers.map((member, index) => (
                                <div key={index} className="carousel-card">
                                    <div className="carousel-img">
                                        {member.img ? (
                                            <img src={member.img} alt={member.name} />
                                        ) : (
                                            <div className="placeholder-avatar">👤</div>
                                        )}
                                    </div>
                                    <div className="carousel-overlay">
                                        <h4>{member.name}</h4>
                                        <p>{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="carousel-btn carousel-btn-right" onClick={next} aria-label="Next">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

/* ──────────── COMPONENT ──────────── */
export default function HomePage() {
    const [showPreloader, setShowPreloader] = useState(true)
    const [preloaderFade, setPreloaderFade] = useState(false)
    const [countdown, setCountdown] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' })
    const [activeFilter, setActiveFilter] = useState('technical')
    const [activeDay, setActiveDay] = useState(1)
    const [activeFaq, setActiveFaq] = useState(-1)
    const [scrollProgress, setScrollProgress] = useState(0)
    const [showBackToTop, setShowBackToTop] = useState(false)


    // Preloader
    useEffect(() => {
        const t1 = setTimeout(() => setPreloaderFade(true), 1500)
        const t2 = setTimeout(() => setShowPreloader(false), 2100)
        return () => { clearTimeout(t1); clearTimeout(t2) }
    }, [])

    // Countdown
    useEffect(() => {
        function update() {
            const eventDate = new Date('March 11, 2026 09:00:00').getTime()
            const now = Date.now()
            const diff = eventDate - now
            if (diff > 0) {
                setCountdown({
                    days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
                    hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
                    minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
                    seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
                })
            }
        }
        update()
        const iv = setInterval(update, 1000)
        return () => clearInterval(iv)
    }, [])

    // Scroll progress + back to top
    useEffect(() => {
        let ticking = false
        function onScroll() {
            const scrollY = window.scrollY
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            setScrollProgress(scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0)
            setShowBackToTop(scrollY > 500)
            ticking = false
        }
        function handleScroll() {
            if (!ticking) { requestAnimationFrame(onScroll); ticking = true }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Scroll Reveal  
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible')
            })
        }, { threshold: 0.1, rootMargin: '-50px' })
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [showPreloader]) // re-observe after preloader disappears



    // Matrix rain
    useEffect(() => {
        const bgWrapper = document.querySelector('.bg-wrapper')
        if (!bgWrapper) return
        const canvas = document.createElement('canvas')
        canvas.id = 'matrixCanvas'
        canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:0.12;'
        bgWrapper.appendChild(canvas)
        const ctx = canvas.getContext('2d')
        function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
        resize()
        window.addEventListener('resize', resize)
        const chars = '01</>{}[]()=+-*&|!?#@$%^~`:;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        const fontSize = 14
        const columns = Math.floor(canvas.width / fontSize)
        const drops = Array.from({ length: columns }, () => Math.random() * -100)
        let running = true
        function draw() {
            if (!running) return
            ctx.fillStyle = 'rgba(6, 6, 15, 0.08)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)]
                const x = i * fontSize, y = drops[i] * fontSize
                const hue = 180 + Math.sin(Date.now() * 0.001 + i * 0.1) * 60
                ctx.fillStyle = `hsla(${hue}, 85%, 60%, ${0.3 + Math.random() * 0.35})`
                ctx.font = fontSize + 'px monospace'
                ctx.fillText(char, x, y)
                if (Math.random() > 0.98) { ctx.fillStyle = 'rgba(0, 229, 255, 0.95)'; ctx.fillText(char, x, y) }
                if (y > canvas.height && Math.random() > 0.99) drops[i] = 0
                drops[i] += 0.5 + Math.random() * 0.5
            }
            setTimeout(() => requestAnimationFrame(draw), 65)
        }
        draw()
        // Particles
        if (window.tsParticles) {
            window.tsParticles.load('tsparticles', {
                fullScreen: { enable: false },
                background: { color: { value: 'transparent' } },
                fpsLimit: 60,
                particles: {
                    number: { value: 30, density: { enable: true, area: 900 } },
                    color: { value: ['#00e5ff', '#6366f1', '#a855f7', '#ec4899'] },
                    shape: { type: ['circle', 'square'] },
                    opacity: { value: { min: 0.2, max: 0.6 }, animation: { enable: true, speed: 0.3, minimumValue: 0.1 } },
                    size: { value: { min: 2, max: 5 }, animation: { enable: true, speed: 1, minimumValue: 1 } },
                    links: { enable: true, distance: 150, color: '#6366f1', opacity: 0.12, width: 1 },
                    move: { enable: true, speed: 0.6, direction: 'none', random: true, straight: false, outModes: 'bounce' },
                },
                interactivity: {
                    detectsOn: 'window',
                    events: { onHover: { enable: true, mode: ['grab', 'bubble'] }, resize: true },
                    modes: { grab: { distance: 180, links: { opacity: 0.4, color: '#7c3aed' } }, bubble: { distance: 200, size: 8, duration: 0.3, opacity: 0.7 } },
                },
                detectRetina: true,
            })
        }
        return () => { running = false; window.removeEventListener('resize', resize); canvas.remove() }
    }, [])



    // Cursor glow
    useEffect(() => {
        const cursorGlow = document.createElement('div')
        cursorGlow.id = 'cursorGlow'
        cursorGlow.style.cssText = 'position:fixed;width:500px;height:500px;border-radius:50%;pointer-events:none;z-index:9998;mix-blend-mode:screen;opacity:0;transition:opacity 0.4s;will-change:transform;background:radial-gradient(circle,rgba(0,229,255,0.07) 0%,rgba(124,58,237,0.04) 30%,rgba(236,72,153,0.02) 50%,transparent 70%)'
        document.body.appendChild(cursorGlow)
        let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0, visible = false
        function onMove(e) {
            mouseX = e.clientX; mouseY = e.clientY
            if (!visible) { visible = true; cursorGlow.style.opacity = '1' }
        }
        function onLeave() { visible = false; cursorGlow.style.opacity = '0' }
        function animGlow() {
            glowX += (mouseX - glowX) * 0.08
            glowY += (mouseY - glowY) * 0.08
            cursorGlow.style.transform = `translate(${glowX - 250}px, ${glowY - 250}px)`
            requestAnimationFrame(animGlow)
        }
        document.addEventListener('mousemove', onMove, { passive: true })
        document.addEventListener('mouseleave', onLeave)
        animGlow()
        return () => {
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseleave', onLeave)
            cursorGlow.remove()
        }
    }, [])

    const handleFilter = useCallback((filter) => setActiveFilter(filter), [])
    const filteredEvents = EVENT_CARDS_LIST.filter(e => e.cat === activeFilter)

    const handleContactSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        alert(`Thank you ${formData.get('name')}! Your message has been sent. We'll get back to you soon.`)
        e.target.reset()
    }

    return (
        <>
            {/* Preloader */}
            {showPreloader && (
                <div className={`preloader ${preloaderFade ? 'fade-out' : ''}`} id="preloader">
                    <div className="preloader-content">
                        <div className="preloader-terminal">
                            <div className="terminal-line"><span className="terminal-prompt">&gt;</span> <span className="terminal-typed">Initializing System...</span></div>
                            <div className="terminal-line" style={{ animationDelay: '0.8s' }}><span className="terminal-prompt">&gt;</span> <span className="terminal-typed">Loading ITYUKTA_2K26 Protocol...</span></div>
                            <div className="terminal-line" style={{ animationDelay: '1.4s' }}><span className="terminal-prompt">&gt;</span> <span className="terminal-typed">SYS_STATUS: ONLINE</span></div>
                        </div>
                        <div className="preloader-logo">ITYUKTA <span className="accent">2K26</span></div>
                        <div className="preloader-bar"><div className="preloader-progress"></div></div>
                        <div className="preloader-status">Establishing secure connection...</div>
                    </div>
                </div>
            )}

            {/* Scroll Progress */}
            <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

            {/* Background */}
            <div className="bg-wrapper">
                <div className="bg-image"></div><div className="bg-overlay"></div><div className="bg-mesh"></div><div className="bg-grid"></div><div className="bg-noise"></div>
                <div id="tsparticles"></div>
                <div className="floating-code-container">
                    {['<div class="tech">', 'function init() {', 'const future = code();', 'import { innovation }', 'return success;', '} // ITYUKTA', 'npm run build', 'git commit -m "🚀"', 'console.log("2K26");', 'async await deploy()'].map((code, i) => (
                        <div key={i} className={`code-snippet code-${i + 1}`}>{code}</div>
                    ))}
                </div>
                <div className="binary-overlay"></div>
                <div className="pink-wave-container">
                    <div className="fabric-base"></div>
                    <svg className="wave-svg wave-layer-1" viewBox="0 0 2880 320" preserveAspectRatio="none"><path d="M0,192 C240,128,480,256,720,192 C960,128,1200,256,1440,192 C1680,128,1920,256,2160,192 C2400,128,2640,256,2880,192 L2880,320 L0,320 Z" /></svg>
                    <svg className="wave-svg wave-layer-2" viewBox="0 0 2880 320" preserveAspectRatio="none"><path d="M0,224 C180,160,360,288,540,224 C720,160,900,288,1080,224 C1260,160,1440,288,1620,224 C1800,160,1980,288,2160,224 C2340,160,2520,288,2700,224 L2880,224 L2880,320 L0,320 Z" /></svg>
                    <svg className="wave-svg wave-layer-3" viewBox="0 0 2880 320" preserveAspectRatio="none"><path d="M0,256 C320,200,640,280,960,240 C1280,200,1600,280,1920,240 C2240,200,2560,280,2880,256 L2880,320 L0,320 Z" /></svg>
                    <svg className="wave-svg wave-layer-4" viewBox="0 0 2880 320" preserveAspectRatio="none" style={{ bottom: 'auto', top: 0, transform: 'rotate(180deg)' }}><path d="M0,200 C200,140,400,260,600,200 C800,140,1000,260,1200,200 C1400,140,1600,260,1800,200 C2000,140,2200,260,2400,200 C2600,140,2880,200,2880,200 L2880,320 L0,320 Z" /></svg>
                    <div className="sparkle-container">
                        {Array.from({ length: 12 }, (_, i) => <div key={i} className={`sparkle sparkle-${i + 1}`}></div>)}
                    </div>
                </div>
                <div className="bg-hexagons">
                    {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className={`hexagon hex-${i + 1}`}><div className="hexagon-inner"><div className="hexagon-face"></div></div></div>
                    ))}
                </div>
                {Array.from({ length: 5 }, (_, i) => (
                    <div key={i} className={`floating-cube cube-${i + 1}`}><img src="/images/cube.avif" alt="" /></div>
                ))}
            </div>

            {/* Navigation */}
            <Navbar />

            {/* Hero */}

            <section className="hero" id="home">
                <div className="hero-content">
                    <div className="hud-badge"><span className="hud-dot"></span><span className="hud-text">PROTOCOL_ACTIVE // NATIONAL_SYMPOSIUM</span></div>
                    <h1 className="hero-title-main shine"><span className="title-gradient">ITYUKTA</span></h1>
                    <h2 className="hero-title-year">2K26</h2>
                    <p className="hero-tagline-code">
                        <span className="tagline-word">Innovate</span><span className="tagline-dot"></span><span className="tagline-sep">|</span>
                        <span className="tagline-word">Build</span><span className="tagline-dot"></span><span className="tagline-sep">|</span>
                        <span className="tagline-word">Conquer</span><span className="tagline-dot"></span>
                    </p>
                    <p className="hero-tagline">A Two Day National Level Technical Symposium</p>
                    <div className="hero-actions">
                        <Link to="/register" className="btn btn-hero-primary shine-fast">
                            Register Now
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                        <a href="#about" className="btn btn-hero-secondary">Learn More</a>
                    </div>
                    <div className="hero-sys-status"><span className="sys-indicator"></span> SYS_LOG: Accepting registrations // Seats filling fast</div>
                </div>
            </section>

            {/* Countdown */}
            <section className="countdown-section">
                <div className="container">
                    <div className="countdown-wrapper">
                        <div className="countdown-label"><span className="terminal-prompt">&gt;</span> EVENT_COUNTDOWN:</div>
                        <div className="countdown-grid">
                            {['days', 'hours', 'minutes', 'seconds'].map(unit => (
                                <div key={unit} className="countdown-item reveal">
                                    <div className="countdown-value">{countdown[unit]}</div>
                                    <div className="countdown-unit">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
           <section className="section" id="about">
  <div className="container">
    <div className="about-grid">
      
      <div className="about-content">
        <div className="section-terminal-label">// ABOUT_IT YUKTA</div>

        <h2 className="reveal">
          Redefining the <span className="gradient-text">Digital Landscape</span>
        </h2>

        <p className="reveal">
          ITYUKTA, meaning "well-connected" and "skillfully engaged," embodies a vision of technological empowerment, collaboration, and limitless learning. Guided by the mantra “Igniting Ideas, Empowering Innovation,” ITYUKTA 2k26 is a melting pot of creativity and technology, bringing together bright minds to explore the ever-evolving digital landscape.With flagship workshops on Vibe Coding, and Agentic AI, ITYUKTA 2k26 equips students with cutting-edge skills, transforming theoretical knowledge into real-world expertise. It serves as a launchpad for innovators, problem-solvers, and tech enthusiasts, bridging the gap between academia and industry.It is more than an event—it is a movement that fuels passion, sharpens skills, and nurtures future leaders in technology.Join us at ITYUKTA 2k26 on March 11th and 12th, where ideas take flight, knowledge turns into action, and innovation drives the future! 
        </p>

        <div className="about-vision-box reveal">
          <h4 className="about-vision-label">Our_Vision</h4>
          <p>
            "To create a hub of innovation where code meets reality and solves 
            real-world challenges."
          </p>
        </div>

      </div>

      <div className="about-visual">
        <TechGlobe />
      </div>

    </div>
  </div>
</section>


            {/* Guests */}
            <section className="section" style={{ paddingTop: '1rem' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">Our <span className="gradient-text">Guests</span></h2>
                    </div>
                    <div className="patrons-grid">
                        {GUESTS.map((g, i) => (
                            <div key={i} className="patron-card reveal">
                                <img src={g.img} alt={g.name} className="patron-image" loading="lazy" onError={(e) => { e.target.style.display = 'none' }} />
                                <div className="patron-info">
                                    <h3 className="patron-name">{g.name}</h3>
                                    <div className="patron-right-block">
                                        <p className="patron-title">{g.title}</p>
                                        <p className="patron-org">{g.org}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Patrons */}
            <section className="section" style={{ paddingTop: '1rem' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">Our <span className="gradient-text">Patrons</span></h2>
                    </div>
                    <div className="patrons-grid">
                        {PATRONS.map((p, i) => (
                            <div key={i} className="patron-card reveal">
                                <img src={p.img} alt={p.name} className="patron-image" loading="lazy" onError={(e) => { e.target.style.display = 'none' }} />
                                <div className="patron-info">
                                    <h3 className="patron-name">{p.name}</h3>
                                    <div className="patron-right-block">
                                        <p className="patron-title">{p.title}</p>
                                        <p className="patron-org" dangerouslySetInnerHTML={{ __html: p.org.replace('\n', '<br/>') }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Chair Person */}
            <section className="section" style={{ paddingTop: '1rem' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">Our <span className="gradient-text">Chair Person</span></h2>
                    </div>
                    <div className="chairperson-card reveal">
                        <div className="chairperson-image-wrap">
                            <img src="/images/bindu_madhuri.png" alt="Dr.Ch.Bindu Madhuri" className="chairperson-image" loading="lazy" onError={(e) => { e.target.style.display = 'none' }} />
                        </div>
                        <div className="chairperson-info">
                            <h3 className="chairperson-name">Dr.Ch.Bindu Madhuri</h3>
                            <p className="chairperson-title">Associate Professor and Head of the Department</p>
                            <p className="chairperson-org"></p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Faculty Coordinators */}
            <section className="section" style={{ paddingTop: '1rem' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">
                            Faculty <span className="gradient-text">Co-ordinators</span>
                        </h2>
                    </div>

                    <div className="faculty-coordinators-grid">
                        {FACULTY_COORDINATORS.map((c, i) => (
                            <div key={i} className="faculty-coordinator-card reveal">
                                <div className="faculty-coordinator-image-wrap">
                                    <img
                                        src={c.img}
                                        alt={c.name}
                                        className="faculty-coordinator-image"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="faculty-coordinator-info">
                                    <h3 className="faculty-coordinator-name">{c.name}</h3>
                                    <p className="faculty-coordinator-title">{c.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Faculty */}
            <section className="section" style={{ paddingTop: '1rem' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">Our <span className="gradient-text">Faculty Members</span></h2>
                    </div>
                    <div className="faculty-row reveal">
                        {FACULTY.map((f, i) => (
                            <div key={i} className="faculty-card-new">
                                <div className="faculty-img-wrap-new">
                                    <img src={f.img} alt={f.name} loading="lazy" />
                                </div>
                                <div className="faculty-info-new">
                                    <h4>{f.name}</h4>
                                    <p>{f.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Student Coordinators */}
            <section className="section" style={{ paddingTop: '1rem' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">Student <span className="gradient-text">Co-ordinators</span></h2>
                    </div>
                    <div className="coordinators-grid">
                        {COORDINATORS.map((c, i) => (
                            <div key={i} className="coordinator-card reveal">
                                <div className="coordinator-avatar"><img src={c.img} alt={c.name} loading="lazy" /></div>
                                <div className="coordinator-info">
                                    <h4 className="coordinator-name">{c.name}</h4>
                                    <p className="coordinator-role">{c.role}</p>
                                    {c.contact && <p className="coordinator-contact">Contact: {c.contact}</p>}
                                    <div className="coordinator-socials">
                                        {c.instagram && <a href={c.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sponsors */}
            <section className="section" style={{ paddingTop: '1rem' }}>
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">Sponsors & <span className="gradient-text">Partners</span></h2>
                    </div>
                    <div className="sponsors-ticker reveal" style={{ overflow: 'visible' }}>
                        <div className="sponsors-track" style={{ animation: 'none', justifyContent: 'center', width: '100%' }}>
                            {SPONSORS.map((s, i) => (
                                <div key={i} className="sponsor-item">
                                    {s.type === 'image' ? (
                                        <img src={s.src} alt={s.name} className="sponsor-img-roll" />
                                    ) : (
                                        <i className={s.iconClass}></i>
                                    )}
                                    <span>{s.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Workshops */}
            <section className="section" id="workshops">
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">Our <span className="gradient-text">Workshops</span></h2>
                        <p className="section-description reveal"></p>
                    </div>
                    <div className="workshops-grid">
                        {[
                            { slug: 'vibe-coding', icon: '🎵', title: 'Vibe Coding', desc: 'Experience a new way of coding where creativity meets music. Build projects in a fun, high-energy environment with live beats and collaborative challenges.', price: '₹600' },
                            { slug: 'agentic-ai', icon: '🤖', title: 'Agentic AI', desc: 'Explore the world of autonomous AI agents that can reason, plan, and act. Learn to build intelligent systems that solve real-world problems independently.', price: '₹600' },
                        ].map(w => (
                            <Link key={w.slug} to={`/event/${w.slug}`} className="workshop-card reveal">
                                <div className="workshop-icon">{w.icon}</div>
                                
                                <h3 className="workshop-title">{w.title}</h3>
                                <p className="workshop-desc">{w.desc}</p>
                                <div className="workshop-footer">
                                    <span className="workshop-price-ticket">
                                        🎫 {w.price}
                                    </span>
                                    <span 
                                        className="btn btn-primary workshop-register-btn"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            window.open("https://forms.gle/fLRQovf9H565ec286", "_blank");
                                        }}
                                    >
                                        Register Now
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔥 Combo Offer */}
            <section className="combo-offer-section">
                <div className="combo-offer-glow"></div>
                <div className="container">
                    <div className="combo-offer-card reveal">
                        <div className="combo-badge">🔥 Limited Time Offer</div>

                        <h2 className="combo-title shine-slow">
                            Grab The <span className="gradient-text">Combo Offer</span>
                        </h2>

                        <p className="combo-description">
                            Get access to both workshops — <strong>Vibe Coding</strong> + <strong>Agentic AI</strong>
                        </p>

                        <div className="combo-pricing">
                            <span className="combo-original-price">₹1200</span>
                            <span className="combo-offer-price">₹1000</span>
                        </div>

                        <a
                            href="https://forms.gle/fLRQovf9H565ec286"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary combo-cta-btn shine-fast"
                        >
                            Register Combo Now
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>

                        <p className="combo-savings"> • Includes certificates for both workshops</p>
                    </div>
                </div>
            </section>

            {/* Events */}
            <section className="section" id="events">
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">Explore <span className="gradient-text">Amazing</span> Events</h2>
                        <p className="section-description reveal"></p>
                    </div>
                    <div className="events-filter reveal">
                        {['technical', 'non-technical'].map(f => (
                            <button key={f} className={`filter-btn ${activeFilter === f ? 'active' : ''}`} onClick={() => handleFilter(f)}>
                                {f === 'technical' ? 'Technical' : 'Non-Technical'}
                            </button>
                        ))}
                    </div>
                    <div className="events-grid">
                        {filteredEvents.map((ev, idx) => (
                            <Link key={ev.slug} to={`/event/${ev.slug}`} className="event-card reveal" data-category={ev.cat} style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <div className="event-icon">{ev.icon}</div>
                                <div className="event-category">{ev.cat === 'technical' ? 'Technical' : 'Non-Technical'}</div>
                                <h3>{ev.title}</h3>
                                <p>{ev.desc}</p>
                                <div className="event-meta">{ev.meta.map((m, i) => <span key={i}>{m}</span>)}</div>
                                <div className="event-footer">
                                    <span className="event-price">₹{ev.fee}</span>
                                    <a
                                        href={ev.registrationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="event-register-btn"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Register
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </a>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* Schedule */}
            <section className="section" id="schedule">
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">Events <span className="gradient-text">Timeline</span></h2>
                        <p className="section-description reveal"></p>
                    </div>
                    <div className="schedule-tabs reveal">
                        <button className={`schedule-tab ${activeDay === 1 ? 'active' : ''}`} onClick={() => setActiveDay(1)}>Day 1 — March 11</button>
                        <button className={`schedule-tab ${activeDay === 2 ? 'active' : ''}`} onClick={() => setActiveDay(2)}>Day 2 — March 12</button>
                    </div>
                    <div className="schedule-timeline" style={{ display: activeDay === 1 ? 'block' : 'none' }}>
                        {DAY1.map((item, i) => (
                            <div key={i} className="timeline-item reveal"><div className="timeline-time">{item.time}</div><div className="timeline-content"><h4>{item.title}</h4><p>{item.desc}</p></div></div>
                        ))}
                    </div>
                    <div className="schedule-timeline" style={{ display: activeDay === 2 ? 'block' : 'none' }}>
                        {DAY2.map((item, i) => (
                            <div key={i} className="timeline-item reveal"><div className="timeline-time">{item.time}</div><div className="timeline-content"><h4>{item.title}</h4><p>{item.desc}</p></div></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cultural Night */}
            <section className="culture-section">
                <div className="container">
                    <div className="culture-row">

                        {/* IMAGE LEFT */}
                        <div className="culture-image">
                            <img src={flashNightImg} alt="Cultural Night" />
                        </div>

                        {/* TEXT RIGHT */}
                        <div className="culture-content">
                            <h2>Cultural Night – ITYUKTA 2K26</h2>
                            <p>
                                Cultural Night of ITYUKTA 2K26, held on March 11, was a mesmerizing evening that brought together vibrant performances,
                                dazzling lights, and electrifying energy. The event served as a canvas for students to showcase their diverse talents through
                                dance, music, drama, and art. Traditional and modern themes harmoniously intertwined as performers captivated the audience.
                            </p>

                            <div className="culture-meta">
                                <span>📅 11th March</span>
                                <span>⏰ 6:00 PM</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Flash Mob */}
            <section className="culture-section">
                <div className="container">
                    <div className="culture-row">

                        {/* TEXT LEFT */}
                        <div className="culture-content">
                            <h2>Flash Mob – ITYUKTA 2K26</h2>
                            <p>
                                The FlashMob at ITYUKTA 2K26, held on March 12, was a high-energy performance that electrified the atmosphere.
                                As the beats dropped, dancers emerged from the crowd, transforming an ordinary moment into an extraordinary spectacle.
                            </p>

                            <div className="culture-meta">
                                <span>📅 12th March</span>
                                <span>⏰ 5:00 PM</span>
                            </div>
                        </div>

                        {/* IMAGE RIGHT */}
                        <div className="culture-image">
                            <img src={flashMobImg} alt="Flash Mob" />
                        </div>

                    </div>
                </div>
            </section>
            {/* Pre Events */}
            <section className="section pre-events-section">
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">
                            Pre-<span className="gradient-text">Event Series</span>
                        </h2>
                        <p className="section-description reveal">
                            Exciting pre-events building momentum towards ITYUKTA 2K26
                        </p>
                    </div>

                    <div className="pre-events-grid">

                        {/* CODE KRACK SERIES */}
                        <div className="pre-event-card reveal">
                            <h3>💻 Code Crack Series</h3>
                            <p>Competitive coding challenge series</p>

                            <div className="event-phase completed">
                                <span>Code Krack 1.0</span>
                                <span className="badge completed-badge">Completed ✅</span>
                            </div>

                            <div className="event-phase live">
                                <span>Code Krack 2.0</span>
                                <span className="badge live-badge">Live Now 🔥</span>
                            </div>

                            <a
                                href="https://forms.gle/Vmr3ZxB2PqnGbmbA7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="register-btn"
                            >
                                Register Now
                            </a>

                            <div className="event-phase upcoming">
                                <span>Code Krack 3.0</span>
                                <span className="badge upcoming-badge">Releasing Soon ⏳</span>
                            </div>

                            <div className="event-phase upcoming">
                                <span>Code Krack 4.0</span>
                                <span className="badge upcoming-badge">Releasing Soon ⏳</span>
                            </div>
                        </div>


                        {/* PIXEL PERFECT */}
                        <div className="pre-event-card reveal">
                            <h3>🎨 Pixel Perfect</h3>
                            <p>Design & creativity challenge</p>
                            <div className="coming-soon">
                                Registrations Will Open Soon 🚀
                            </div>
                        </div>


                        {/* MATRIX MIND */}
                        <div className="pre-event-card reveal">
                            <h3>🧠 Matrix Mind</h3>
                            <p>Logic & problem solving competition</p>
                            <div className="coming-soon">
                                Registrations Will Open Soon 🚀
                            </div>
                        </div>


                        {/* DEBUG */}
                        <div className="pre-event-card reveal">
                            <h3>🐞 Debug Relay</h3>
                            <p>Team based debugging battle</p>
                            <div className="coming-soon">
                                Registrations Will Open Soon 🚀
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Core Team Carousel */}
            <TeamCarousel />

            {/* CTA */}
           
            {/* FAQ */}
            <section className="section" id="faq">
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">Got <span className="gradient-text">Questions?</span></h2>
                    </div>
                    <div className="faq-list">
                        {FAQS.map((faq, i) => (
                            <div key={i} className={`faq-item reveal ${activeFaq === i ? 'active' : ''}`}>
                                <button className="faq-question" onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}>
                                    <span>{faq.q}</span><span className="faq-icon">{activeFaq === i ? '−' : '+'}</span>
                                </button>
                                <div className="faq-answer" style={{ maxHeight: activeFaq === i ? '200px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                                    <div className="faq-answer-content">{faq.a}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Venue */}
            <section className="section" id="venue">
                <div className="container">
                    <div className="section-header">
                        <div className="section-eyebrow reveal"></div>
                        <h2 className="section-title reveal shine-slow">Venue & <span className="gradient-text">Contact</span></h2>
                    </div>
                    <div className="venue-grid">
                        <div className="venue-map reveal">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.9546059952545!2d83.37171457497277!3d18.15000538210356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be4f1e5f1b517%3A0x1e27a9221a7114c!2sJawaharlal%20Nehru%20Technological%20University%20Gurajada%20Vizianagaram!5e0!3m2!1sen!2sin!4v1708269225722!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0, borderRadius: '16px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="JNTU-GV Map"></iframe>

                        </div>
                        <div className="venue-contact reveal">
                            <div className="venue-info-card">
                                {[
                                    { icon: '📍', title: 'Venue', desc: 'JNTU-GV College of Engineering, Vizianagaram, Andhra Pradesh' },
                                    { icon: '📅', title: 'Date', desc: 'March 11-12, 2026' },
                                    { icon: '📧', title: 'Email', desc: 'ityukta@jntugv.edu.in' },
                                    { icon: '📞', title: 'Phone', desc: '+91 9182888062' },
                                ].map((item, i) => (
                                    <div key={i} className="venue-info-item">
                                        <span className="venue-info-icon">{item.icon}</span>
                                        <div><h4>{item.title}</h4><p>{item.desc}</p></div>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

           
            {/* Footer */}
            <footer className="footer" id="contact">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <h3>ITYUKTA <span className="accent">2K26</span></h3>
                            <p className="footer-system-text">&lt;system&gt;Premier national-level technical symposium powered by the Department of Information Technology, JNTU-GV CEV.&lt;/system&gt;</p>
                            <div className="footer-social">
                                <a href="https://www.instagram.com/ityukta_2k26?igsh=bTJuYjlucGZua25t" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                                <a href="https://youtube.com/@ityukta2k25?si=VCtfE7sa9vOjWpdV" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                                <a href="https://www.linkedin.com/in/ityukta-6096883b0/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="footer-column"><h4>Quick Links</h4><ul><li><a href="https://forms.gle/fLRQovf9H565ec286" target="_blank" rel="noopener noreferrer">&gt; Registration for Workshop</a></li><li><a href="https://forms.gle/BAcL2WPXVsBCrWqA9" target="_blank" rel="noopener noreferrer">&gt; Registration for Tech Events</a></li><li><a href="https://forms.gle/fYe4zPF6RxT8fDk47" target="_blank" rel="noopener noreferrer">&gt; Registration for Non-Tech Events</a></li><li><a href="https://forms.gle/fYe4zPF6RxT8fDk47" target="_blank" rel="noopener noreferrer">&gt; Registration for Accommodation</a></li></ul></div>

                        <div className="footer-column"><h4>Events</h4><ul><li><Link to="/event/mind-matrix">&gt; Mind Matrix</Link></li><li><Link to="/event/twin-lock">&gt; Twin Lock</Link></li><li><Link to="/event/shadow-pages">&gt; Shadow Pages</Link></li><li><Link to="/event/runtime-rush">&gt; Runtime Rush</Link></li><li><Link to="/event/dive-n-design">&gt; Dive N Design</Link></li><li><Link to="/event/treasure-hunt">&gt; Treasure Hunt</Link></li><li><Link to="/event/meme-matrice">&gt; Meme Matrice</Link></li><li><Link to="/event/movie-mania">&gt; Movie Mania</Link></li><li><Link to="/event/dumb-smash">&gt; Dumb Smash</Link></li><li><Link to="/event/ludo">&gt; Ludo</Link></li></ul></div>
                        <div className="footer-column"><h4>Social Media</h4><ul><li><a href="https://www.instagram.com/ityukta_2k26?igsh=bTJuYjlucGZua25t" target="_blank" rel="noopener noreferrer">&gt; Instagram</a></li><li><a href="https://youtube.com/@ityukta2k25?si=VCtfE7sa9vOjWpdV" target="_blank" rel="noopener noreferrer">&gt; YouTube</a></li><li><a href="https://www.linkedin.com/in/ityukta-6096883b0/" target="_blank" rel="noopener noreferrer">&gt; LinkedIn</a></li></ul></div>
                    </div>
                    <div className="footer-bottom">
                        <p>© 2026 Department of Information Technology, JNTU-GV. Executing...</p>
                        <div className="footer-links"><a href="#"></a><a href="#"></a></div>
                    </div>
                </div>
            </footer>

            {/* Back to Top */}
            <button className={`back-to-top ${showBackToTop ? 'visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 15l-6-6-6 6" /></svg>
            </button>
        </>
    )
}
