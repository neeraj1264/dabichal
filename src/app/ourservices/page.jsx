// app/services/page.tsx
'use client'

export default function ServicesPage() {
  const services = [
    { icon: '/icons/Vector-1.svg', title: 'Personal Care' },
    { icon: '/icons/Frame-1.svg', title: 'Assistance with Travel and Transport' },
    { icon: '/icons/Vector-4.svg', title: 'Accessing Employment' },
    { icon: '/icons/Frame-4.svg', title: 'Assistance with Life Stage Transitions' },
    { icon: '/icons/Frame-5.svg', title: 'Shared Living, Daily & Household Tasks' },
    { icon: '/icons/Frame-2.svg', title: 'Social and Community Participation' },
    { icon: '/icons/Frame-6.svg', title: 'Group and Centre-Based Activities' },
    { icon: '/icons/Vector-1-1.svg', title: 'Innovative Community Participation' },
    { icon: '/icons/Frame-3.svg', title: 'Assistance with Medication Management' },
  ]

  return (
    <div className="bg-gray-50 py-32 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h6 className="text-xl text-pink font-semibold ">Treasured Care For You</h6>
        <h3 className="text-3xl sm:text-4xl font-bold text-black mt-2 ">
          Services Designed With You in Mind
        </h3>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-4">
            <img src={service.icon} alt={service.title} className="w-[48px] max-w-full object-contain text-pink" />
            <h6 className="text-xl font-semibold text-black">{service.title}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}
