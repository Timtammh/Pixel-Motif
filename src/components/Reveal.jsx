import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', as: Tag = 'div', delay = 0, variant = 'rise' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay ? `reveal-delay-${delay}` : ''

  if (variant === 'image') {
    return (
      <Tag ref={ref} className={`reveal-image ${delayClass} ${visible ? 'is-visible' : ''} ${className}`}>
        <div className="reveal-image-inner">{children}</div>
      </Tag>
    )
  }

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${visible ? 'is-visible' : ''} ${className}`}>
      {children}
    </Tag>
  )
}
