import Image from 'next/image'

const images = [
  '/grid-1.png',
  '/grid-4.png',
  '/grid-3.png',
  '/grid.png',
  '/grid-2.png',
  '/grid-5.png',
]

const items = [...images, ...images]

export default function PhotoGrid() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-4 animate-marquee" style={{ width: 'max-content' }}>
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
            />
          </div>
        ))}
      </div>
    </div>
  )
}
