import { useEffect, useRef } from 'react'

// Glitter particle pool
const COLORS = [
    '#00e5ff', '#7c3aed', '#ec4899', '#a78bfa',
    '#f472b6', '#34d399', '#fbbf24', '#ffffff',
    '#60a5fa', '#e879f9',
]

const STAR_SHAPES = ['★', '✦', '✧', '·', '✶', '⋆', '✸']

export default function CursorGlitter() {
    const containerRef = useRef(null)
    const mousePos = useRef({ x: 0, y: 0 })
    const lastPos = useRef({ x: 0, y: 0 })
    const animFrameRef = useRef(null)
    const particlesRef = useRef([])
    const tickRef = useRef(0)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const spawnParticle = (x, y) => {
            const el = document.createElement('span')
            const color = COLORS[Math.floor(Math.random() * COLORS.length)]
            const shape = STAR_SHAPES[Math.floor(Math.random() * STAR_SHAPES.length)]
            const size = Math.random() * 14 + 8          // 8–22px
            const angle = Math.random() * 360
            const distance = Math.random() * 60 + 20     // 20–80px drift
            const duration = Math.random() * 600 + 500   // 500–1100ms
            const dx = Math.cos((angle * Math.PI) / 180) * distance
            const dy = Math.sin((angle * Math.PI) / 180) * distance - 40 // slight upward bias

            el.textContent = shape
            el.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                font-size: ${size}px;
                color: ${color};
                pointer-events: none;
                user-select: none;
                z-index: 999999;
                transform: translate(-50%, -50%) scale(1) rotate(0deg);
                opacity: 1;
                text-shadow: 0 0 6px ${color}, 0 0 12px ${color};
                transition: transform ${duration}ms cubic-bezier(0.16,1,0.3,1),
                            opacity ${duration}ms ease-out;
                will-change: transform, opacity;
            `

            container.appendChild(el)

            // Trigger animation on next frame
            requestAnimationFrame(() => {
                el.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(0) rotate(${Math.random() * 360}deg)`
                el.style.opacity = '0'
            })

            // Remove after animation
            setTimeout(() => {
                if (el.parentNode === container) container.removeChild(el)
            }, duration + 50)
        }

        const onMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY }
        }

        const loop = () => {
            tickRef.current++
            const { x, y } = mousePos.current
            const { x: lx, y: ly } = lastPos.current
            const dx = x - lx
            const dy = y - ly
            const speed = Math.sqrt(dx * dx + dy * dy)

            // Spawn more particles when moving faster
            if (speed > 2) {
                const count = Math.min(Math.floor(speed / 6) + 1, 4)
                for (let i = 0; i < count; i++) {
                    // Interpolate spawn position along movement path
                    const t = i / count
                    spawnParticle(lx + dx * t, ly + dy * t)
                }
                lastPos.current = { x, y }
            }

            // Idle sparkle — one random star every ~30 frames even when still
            if (tickRef.current % 30 === 0 && speed < 2) {
                spawnParticle(x, y)
            }

            animFrameRef.current = requestAnimationFrame(loop)
        }

        window.addEventListener('mousemove', onMouseMove, { passive: true })
        animFrameRef.current = requestAnimationFrame(loop)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            cancelAnimationFrame(animFrameRef.current)
        }
    }, [])

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            style={{
                position: 'fixed',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 999999,
                overflow: 'hidden',
            }}
        />
    )
}
