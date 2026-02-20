-- ============================================
-- ITYUKTA 2K26 Database Schema
-- MySQL Database
-- ============================================

-- Create Database
CREATE DATABASE IF NOT EXISTS ityukta2k26;
USE ityukta2k26;

-- ============================================
-- REGISTRATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    registration_id VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    gender VARCHAR(20),
    college VARCHAR(200) NOT NULL,
    branch VARCHAR(50) NOT NULL,
    year VARCHAR(10) NOT NULL,
    pass_type ENUM('day', 'full', 'premium') NOT NULL DEFAULT 'full',
    events TEXT,
    payment_status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
    payment_id VARCHAR(100),
    amount DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_email (email),
    INDEX idx_phone (phone),
    INDEX idx_registration_id (registration_id),
    INDEX idx_payment_status (payment_status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- EVENT REGISTRATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS event_registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    registration_id VARCHAR(50) NOT NULL,
    event_id VARCHAR(50) NOT NULL,
    team_name VARCHAR(100),
    team_members TEXT,
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    
    FOREIGN KEY (registration_id) REFERENCES registrations(registration_id) ON DELETE CASCADE,
    INDEX idx_event_id (event_id),
    UNIQUE KEY unique_registration_event (registration_id, event_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- CONTACT MESSAGES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_id VARCHAR(30) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('new', 'in_progress', 'resolved', 'closed') DEFAULT 'new',
    response TEXT,
    responded_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_ticket_id (ticket_id),
    INDEX idx_email (email),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- EVENTS TABLE (if you want dynamic events)
-- ============================================
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_id VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    category ENUM('technical', 'workshop', 'cultural', 'fun') NOT NULL,
    icon VARCHAR(20),
    description TEXT,
    long_description TEXT,
    event_date VARCHAR(50),
    event_time VARCHAR(50),
    duration VARCHAR(50),
    venue VARCHAR(100),
    fee DECIMAL(10, 2) DEFAULT 0,
    team_size VARCHAR(50),
    max_seats INT,
    current_seats INT DEFAULT 0,
    coordinator_name VARCHAR(100),
    coordinator_phone VARCHAR(15),
    rules TEXT,
    prizes TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_category (category),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- ADMIN USERS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('super_admin', 'admin', 'coordinator') DEFAULT 'coordinator',
    is_active BOOLEAN DEFAULT TRUE,
    last_login TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_username (username),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- INSERT SAMPLE EVENTS DATA
-- ============================================
INSERT INTO events (event_id, name, category, icon, description, fee, team_size, venue, event_date, duration) VALUES
('code-crackathon', 'Code Crackathon', 'technical', '💻', 'Test your coding skills with challenging problem sets', 80, 'Individual', 'LH-27', 'Feb 24, 2026', '2 Hours'),
('project-expo', 'Project Expo', 'technical', '🏆', 'Showcase your innovative projects', 120, '1-4 members', 'LH-33', 'Feb 23-24, 2026', '2 Days'),
('knowledge-knockout', 'Knowledge Knockout', 'technical', '🧠', 'Test your technical knowledge', 70, 'Individual', 'LH-38', 'Feb 23, 2026', '1 Hour'),
('hackathon', '24-Hour Hackathon', 'technical', '🚀', 'Build innovative solutions in 24 hours', 400, '2-4 members', 'Computer Lab', 'Feb 23-24, 2026', '24 Hours'),
('ai-workshop', 'Generative AI Workshop', 'workshop', '🤖', 'Hands-on experience with AI', 200, 'Individual', 'Seminar Hall-1', 'Feb 23, 2026', '4 Hours'),
('fullstack-workshop', 'Full Stack Development', 'workshop', '⚛️', 'Build web apps with React & Node.js', 250, 'Individual', 'Seminar Hall-2', 'Feb 24, 2026', '5 Hours'),
('cultural-night', 'Cultural Night', 'cultural', '🎭', 'Evening of music, dance, and drama', 0, 'Free with pass', 'Open Air Theatre', 'Feb 23, 2026', '4 Hours'),
('gaming', 'Gaming Arena', 'fun', '🎮', 'Compete in popular games', 100, 'Varies', 'Gaming Zone', 'Feb 23-24, 2026', '2 Days'),
('treasure-hunt', 'Treasure Hunt', 'fun', '🗺️', 'Find hidden treasures across campus', 150, '4 members', 'Campus Wide', 'Feb 24, 2026', '2 Hours');

-- ============================================
-- CREATE DEFAULT ADMIN USER
-- Password: admin123 (SHA-256 hashed)
-- CHANGE THIS IN PRODUCTION!
-- ============================================
INSERT INTO admin_users (username, email, password_hash, role) VALUES
('admin', 'admin@ityukta2k26.in', 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'super_admin');
