import { useEffect, useRef } from 'react'

const companyLogos = [
  "google_logo.svg.png",
  "Logo.svg.png",
  "microsoft_logo.svg.png",
  "deloitte_logo.svg.png",
  "jp_morgan_logo.svg.png",
  "Group (1).png",
  "Group (3).png",
  "Logo.svg (1).png",
  
]

export function CompanyLogos() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll = scrollRef.current
    if (!scroll) return

    let position = 0
    const speed = 0.5

    const animate = () => {
      position -= speed
      const width = scroll.firstElementChild?.clientWidth || 0
      if (position <= -width) {
        position = 0
      }
      scroll.style.transform = `translateX(${position}px)`
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative">
          <div className="flex space-x-12  object-contain" ref={scrollRef}>
            {companyLogos.map((logo, index) => (
             <img
             key={index}
             src={logo}
             alt={`Company ${index + 1}`}
             className="w-[100px] h-[22.4px] p-0"
           />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}