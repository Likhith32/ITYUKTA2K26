import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {

    const email = "ityukta@jntugv.edu.in"
    const phone = "9182888062"

    const copyEmail = () => {
        navigator.clipboard.writeText(email)
        alert("Email copied to clipboard!")
    }

    return (
        <>
            <Navbar />

            <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h1 className="responsive-title" style={{ fontWeight: 800, color: '#f1f5f9' }}>Contact <span className="gradient-text">Portal</span></h1>
                        <p style={{ color: 'rgba(148,163,184,0.8)', fontSize: '1rem' }}>Have questions? We're here to help.</p>
                    </div>

                    {/* MAP SECTION */}
                    <div style={{
                        borderRadius: '20px',
                        overflow: 'hidden',
                        border: '1px solid rgba(0,229,255,0.1)',
                        marginBottom: '3rem'
                    }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15179.58434720972!2d83.364287!3d18.1530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bf29b7dca617f%3A0xd6814a1f6874e0d4!2sJNTU-GV%20College%20of%20Engineering%20Vizianagaram!5e0!3m2!1sen!2sin!4v1714900000000!5m2!1sen!2sin"
                            width="100%"
                            height="350"
                            style={{ border: 0 }}
                            loading="lazy"
                            title="JNTU-GV Map"
                        ></iframe>
                    </div>

                    <div className="contact-grid">
                        {/* CONTACT INFO */}
                        <div style={{
                            padding: '2rem',
                            borderRadius: '20px',
                            background: 'linear-gradient(145deg, rgba(15,20,45,0.8), rgba(10,12,30,0.95))',
                            border: '1px solid rgba(0,229,255,0.1)'
                        }}>
                            <h2 style={{ color: '#f1f5f9', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                                Details
                            </h2>

                            <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>
                                📞 <strong>Phone:</strong> {phone} <br />
                                <span style={{ fontSize: '0.85rem' }}>
                                    YGS Karthik – Fest Coordinator
                                </span>
                            </p>

                            <p style={{ color: '#94a3b8' }}>
                                📧 <strong>Email:</strong> {email}
                            </p>
                        </div>

                        {/* STILL HAVE QUESTIONS SECTION */}
                        <div style={{
                            padding: '2rem',
                            borderRadius: '20px',
                            background: 'linear-gradient(145deg, rgba(20,25,60,0.95), rgba(10,15,35,0.98))',
                            border: '1px solid rgba(139,92,246,0.2)',
                            textAlign: 'center'
                        }}>
                            <h2 style={{
                                color: '#f1f5f9',
                                marginBottom: '1rem',
                                fontSize: '1.4rem'
                            }}>
                                💬 Quick Help
                            </h2>

                            <p style={{
                                color: 'rgba(148,163,184,0.8)',
                                marginBottom: '1.5rem',
                                fontSize: '0.9rem'
                            }}>
                                Send us an inquiry and we'll get back to you soon.
                            </p>

                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem'
                            }}>
                                <a
                                    href={`mailto:${email}`}
                                    className="btn btn-primary"
                                    style={{
                                        padding: '0.8rem',
                                        borderRadius: '12px',
                                        fontSize: '0.9rem',
                                        justifyContent: 'center'
                                    }}
                                >
                                    📧 Send Email
                                </a>

                                <button
                                    onClick={copyEmail}
                                    style={{
                                        padding: '0.8rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: '#fff',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '12px',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        cursor: 'pointer'
                                    }}
                                >
                                    📋 Copy Email
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </main>

            <Footer />
        </>
    )
}
