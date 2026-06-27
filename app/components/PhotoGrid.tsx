'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

const images = [
  '/G111.png',
  '/grid-4.png',
  '/grid-3.png',
  '/grid.png',
  '/grid-2.png',
  '/grid-5.png',
]

const items = [...images, ...images]

export default function PhotoGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const animRef = useRef<number | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const speed = 0.6

    const step = () => {
      if (!isPaused && !isDragging && el) {
        el.scrollLeft += speed
        // Loop back to start seamlessly
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0
        }
      }
      animRef.current = requestAnimationFrame(step)
    }

    animRef.current = requestAnimationFrame(step)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [isPaused, isDragging])

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (ref.current?.offsetLeft ?? 0))
    setScrollLeft(ref.current?.scrollLeft ?? 0)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !ref.current) return
    e.preventDefault()
    const x = e.pageX - ref.current.offsetLeft
    ref.current.scrollLeft = scrollLeft - (x - startX)
  }

  const stopDragging = () => setIsDragging(false)

  return (
    <div
      ref={ref}
      className="w-full flex gap-4 px-6 overflow-x-auto cursor-grab active:cursor-grabbing select-none"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => { setIsPaused(false); stopDragging() }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDragging}
    >
      {items.map((src, i) => (
        <div
          key={i}
          className="flex-shrink-0 rounded-2xl overflow-hidden"
          style={{ width: '280px', height: '370px' }}
        >
          <Image
            src={src}
            alt=""
            width={280}
            height={370}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      ))}
    </div>
  )
}
