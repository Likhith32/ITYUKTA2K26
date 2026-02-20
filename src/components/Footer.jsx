import { Link } from 'react-router-dom'

export default function Footer({ minimal = false }) {
    if (minimal) {
        return (
            <footer className="footer" style={{ padding: '32px 0' }}>
                <div className="container">
                    <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
                        <p className="footer-copyright">
                            © 2026 ITYUKTA. Made with ❤️ by <a href="#">IT Department, JNTU-GV</a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img
                                src="/images/LOGOFINAL (1).png"
                                alt="ITYUKTA 2K26"
                                className="footer-logo-img"
                            />
                        </Link>
                        <p className="footer-system-text">
                            <span>&lt;system&gt;</span> National Level Technical Symposium
                            organized by the Department of Information Technology,
                            JNTU-GV College of Engineering, Vizianagaram.
                            <span>&lt;/system&gt;</span>
                        </p>
                        <p className="footer-system-text" style={{ marginTop: '0.5rem' }}>
                            📧 <a href="mailto:ityukta2k26@gmail.com" style={{ color: '#00e5ff' }}>ityukta2k26@gmail.com</a>
                        </p>
                    </div>
                    <div className="footer-links">
                        <h4>{'>'} Quick_Links</h4>
                        <ul>
                            <li><a href="https://forms.gle/fLRQovf9H565ec286" target="_blank" rel="noopener noreferrer">{'>'} Registration for Workshop</a></li>
                            <li><a href="https://forms.gle/BAcL2WPXVsBCrWqA9" target="_blank" rel="noopener noreferrer">{'>'} Registration for Tech Events</a></li>
                            <li><a href="https://forms.gle/fYe4zPF6RxT8fDk47" target="_blank" rel="noopener noreferrer">{'>'} Registration for Non_Tech Events</a></li>
                            <li><a href="https://forms.gle/fYe4zPF6RxT8fDk47" target="_blank" rel="noopener noreferrer">{'>'} Registration for Accommodation</a></li>

                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>{'>'} Events</h4>
                        <ul>
                            <li><Link to="/events/mind-matrix">{'>'} Mind Matrix</Link></li>
                            <li><Link to="/events/twin-lock">{'>'} Twin Lock</Link></li>
                            <li><Link to="/events/shadow-pages">{'>'} Shadow Pages</Link></li>
                            <li><Link to="/events/runtime-rush">{'>'} Runtime Rush</Link></li>
                            <li><Link to="/events/dive-n-design">{'>'} Dive N Design</Link></li>
                            <li><Link to="/events/treasure-hunt">{'>'} Treasure Hunt</Link></li>
                            <li><Link to="/events/meme-matrice">{'>'} Meme Matrice</Link></li>
                            <li><Link to="/events/movie-mania">{'>'} Movie Mania</Link></li>
                            <li><Link to="/events/dumb-smash">{'>'} Dumb Smash</Link></li>
                            <li><Link to="/events/ludo">{'>'} Ludo</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>{'>'} Social_Node</h4>
                        <ul>
                            <li>
                                <a href="https://www.instagram.com/ityukta_2k26?igsh=bTJuYjlucGZua25t"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    {'>'} Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@ityukta2k25?si=VCtfE7sa9vOjWpdV"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    {'>'} YouTube
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ityukta-6096883b0/"
                                   target="_blank"
                                   rel="noopener noreferrer">
                                    {'>'} LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2026 ITYUKTA. Made with ❤️ by <a href="#">IT Department, JNTU-GV</a>
                        <span className="footer-status"> | Executing...</span>
                    </p>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/ityukta_2k26?igsh=bTJuYjlucGZua25t" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://youtube.com/@ityukta2k25?si=VCtfE7sa9vOjWpdV" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ityukta-6096883b0/" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="footer-bottom-links">
                        <Link to="#">{'>'} Privacy_Protocol</Link>
                        <Link to="#">{'>'} Terms_Config</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
