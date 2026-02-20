/* ═══════════════════════════════════════════════
   ITYUKTA 2K26 — Express.js Backend Server
   Converted from Java Servlets:
     - RegistrationServlet.java → POST /api/register
     - ContactServlet.java → POST /api/contact
     - EventsServlet.java → GET /api/events
   ═══════════════════════════════════════════════ */

import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Database connection pool (mirrors DatabaseUtil.java)
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'ityukta_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

// ═══════════════════════════════════════════
// ROUTE: POST /api/register
// Converted from: RegistrationServlet.doPost()
// ═══════════════════════════════════════════
app.post('/api/register', async (req, res) => {
    try {
        const { name, email, phone, college, year, branch, passType, events } = req.body

        // Validate required fields
        if (!name?.trim() || !email?.trim() || !phone?.trim()) {
            return res.status(400).json({ success: false, error: 'Please fill in all required fields.' })
        }

        // Generate registration ID (mirrors Java implementation)
        const now = new Date()
        const regId = `REG-${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(Math.floor(Math.random() * 100)).padStart(2, '0')}`

        // Insert into database
        const eventsStr = Array.isArray(events) ? events.join(',') : (events || '')
        const [result] = await pool.execute(
            'INSERT INTO registrations (registration_id, name, email, phone, college, year_of_study, branch, pass_type, selected_events) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [regId, name.trim(), email.trim(), phone.trim(), college?.trim() || '', year || '', branch?.trim() || '', passType || 'full', eventsStr]
        )

        res.json({
            success: true,
            registrationId: regId,
            message: `Registration successful! Your ID is ${regId}`,
            data: { name: name.trim(), passType: passType || 'full' }
        })
    } catch (err) {
        console.error('Registration error:', err)
        // Check for duplicate email
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ success: false, error: 'This email is already registered.' })
        }
        res.status(500).json({ success: false, error: 'Registration failed. Please try again.' })
    }
})

// ═══════════════════════════════════════════
// ROUTE: POST /api/contact
// Converted from: ContactServlet.doPost()
// ═══════════════════════════════════════════
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body

        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return res.status(400).json({ success: false, error: 'Please fill in all required fields.' })
        }

        // Validate email (mirrors isValidEmail())
        const emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, error: 'Please enter a valid email address.' })
        }

        // Generate ticket ID (mirrors generateTicketId())
        const now = new Date()
        const ticketId = `TKT-${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(Math.floor(Math.random() * 100)).padStart(2, '0')}`

        // In production: save to database or send email
        // For now, just return success
        res.json({
            success: true,
            ticketId,
            message: `Thank you ${name.trim()}! Your message has been received. Ticket ID: ${ticketId}`
        })
    } catch (err) {
        console.error('Contact error:', err)
        res.status(500).json({ success: false, error: 'Failed to send message. Please try again.' })
    }
})

// ═══════════════════════════════════════════
// ROUTE: GET /api/events
// Converted from: EventsServlet.doGet()
// ═══════════════════════════════════════════
app.get('/api/events', (req, res) => {
    // Import events data (same data used by frontend)
    // In production this would come from the database
    res.json({ success: true, message: 'Events served from frontend data' })
})

// ═══════════════════════════════════════════
// ROUTE: GET /api/events/:id
// Converted from: EventsServlet.doGet() with eventId param
// ═══════════════════════════════════════════
app.get('/api/events/:id', (req, res) => {
    res.json({ success: true, message: 'Event details served from frontend data' })
})

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', server: 'ITYUKTA 2K26 API', timestamp: new Date().toISOString() })
})

// Start server
app.listen(PORT, () => {
    console.log(`\n  ╔═══════════════════════════════════════╗`)
    console.log(`  ║    ITYUKTA 2K26 API Server            ║`)
    console.log(`  ║    Running on http://localhost:${PORT}    ║`)
    console.log(`  ╚═══════════════════════════════════════╝\n`)
})
