import { useEffect, useRef } from 'react'
import './TechGlobe.css'

const TECHS = [
    'devicon-react-original colored',
    'devicon-javascript-plain colored',
    'devicon-typescript-plain colored',
    'devicon-python-plain colored',
    'devicon-html5-plain colored',
    'devicon-css3-plain colored',
    'devicon-nodejs-plain colored',
    'devicon-docker-plain colored',
    'devicon-git-plain colored',
    'devicon-mysql-plain colored',
    'devicon-mongodb-plain colored',
    'devicon-vuejs-plain colored',
    'devicon-angularjs-plain colored',
    'devicon-linux-plain colored',
    'devicon-firebase-plain colored',
    'devicon-amazonwebservices-original colored',
    'devicon-flutter-plain colored',
    'devicon-kotlin-plain colored',
    'devicon-rust-plain',
    'devicon-go-original-wordmark colored',
    'devicon-swift-plain colored',
    'devicon-redis-plain colored',
    'devicon-postgresql-plain colored',
    'devicon-kubernetes-plain colored',
    'devicon-tensorflow-original colored',
    'devicon-cplusplus-plain colored',
    'devicon-github-original',
    'devicon-java-plain colored',
]

export default function TechGlobe() {
    const wrapperRef = useRef(null)

    useEffect(() => {
        const wrapper = wrapperRef.current
        if (!wrapper) return

        // Clear any previous content
        wrapper.innerHTML = ''

        const RADIUS = 155
        const COUNT = TECHS.length
        const items = []

        // Build icon elements
        TECHS.forEach((cls, i) => {
            const el = document.createElement('div')
            el.className = 'tg-icon'
            el.innerHTML = `<i class="${cls}"></i>`
            wrapper.appendChild(el)

            // Fibonacci sphere — evenly distribute points on sphere surface
            const phi = Math.acos(-1 + (2 * i + 1) / COUNT)
            const theta = Math.sqrt(COUNT * Math.PI) * phi

            items.push({
                el,
                ox: RADIUS * Math.sin(phi) * Math.cos(theta),
                oy: RADIUS * Math.sin(phi) * Math.sin(theta),
                oz: RADIUS * Math.cos(phi),
            })
        })

        let rotY = 0
        let rotX = 0.25          // slight downward tilt like the reference image
        let mouseInflX = 0
        let mouseInflY = 0
        let animId

        const onMouseMove = (e) => {
            const rect = wrapper.getBoundingClientRect()
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            mouseInflX = (e.clientY - cy) / (rect.height / 2)
            mouseInflY = (e.clientX - cx) / (rect.width / 2)
        }

        window.addEventListener('mousemove', onMouseMove, { passive: true })

        function frame() {
            rotY += 0.007 + mouseInflY * 0.004
            rotX += mouseInflX * 0.002
            // Clamp X tilt so it doesn't flip upside down
            rotX = Math.max(-0.6, Math.min(0.6, rotX))

            const cosY = Math.cos(rotY), sinY = Math.sin(rotY)
            const cosX = Math.cos(rotX), sinX = Math.sin(rotX)

            // Project all items
            const projected = items.map(item => {
                // Rotate Y
                let x = item.ox * cosY - item.oz * sinY
                let z = item.ox * sinY + item.oz * cosY
                let y = item.oy
                // Rotate X
                const y2 = y * cosX - z * sinX
                const z2 = y * sinX + z * cosX

                const fov = 380
                const scale = fov / (fov + z2)
                const depth = (z2 + RADIUS) / (RADIUS * 2)   // 0=back → 1=front

                return { el: item.el, x, y: y2, z: z2, scale, depth }
            })

            // Paint back-to-front so front icons render on top
            projected.sort((a, b) => a.z - b.z)

            projected.forEach(({ el, x, y, depth }) => {
                const opacity = Math.max(0.12, 0.15 + depth * 0.85)
                const fontSize = 14 + depth * 30          // 14px (back) → 44px (front)
                const blur = Math.max(0, (1 - depth) * 2.5)
                const zIdx = Math.round(depth * 100)

                el.style.cssText = `
                    position:absolute;
                    left:50%;top:50%;
                    transform:translate(-50%,-50%) translate(${x.toFixed(1)}px,${y.toFixed(1)}px);
                    font-size:${fontSize.toFixed(1)}px;
                    opacity:${opacity.toFixed(2)};
                    filter:blur(${blur.toFixed(1)}px);
                    z-index:${zIdx};
                    pointer-events:${depth > 0.45 ? 'auto' : 'none'};
                `
            })

            animId = requestAnimationFrame(frame)
        }

        frame()

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <div className="tg-wrapper" ref={wrapperRef} />
    )
}
