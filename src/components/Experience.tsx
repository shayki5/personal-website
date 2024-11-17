'use client'

import { motion } from 'framer-motion'

interface ExperienceItem {
  company: string
  logo: string
  role: string
  period: string
  location: string
}

const experiences: ExperienceItem[] = [
  {
    company: 'Dell Technologies',
    logo: '/logos/dell.svg',
    role: 'Principal DevOps Engineer',
    period: 'Apr 2024 - Present',
    location: 'Israel'
  },
  {
    company: 'Tipalti',
    logo: '/logos/tipalti.svg',
    role: 'DevOps Engineer',
    period: 'Jul 2021 - Apr 2024 · 2 yrs 10 mos',
    location: 'Israel'
  },
  {
    company: 'Varonis',
    logo: '/logos/varonis.svg',
    role: 'DevOps & ALM Engineer',
    period: 'Mar 2020 - Jul 2021 · 1 yr 5 mos',
    location: 'Israel'
  },
  {
    company: 'Clal Insurance',
    logo: '/logos/clal.svg',
    role: 'DevOps Engineer',
    period: 'Mar 2019 - Mar 2020 · 1 yr 1 mo',
    location: 'Tel Aviv Area, Israel'
  },
  {
    company: 'Sela Group',
    logo: '/logos/sela.svg',
    role: 'DevOps & ALM Engineer',
    period: 'Dec 2017 - Mar 2019 · 1 yr 4 mos',
    location: 'Israel'
  }
]

export default function Experience() {
  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600">My journey in DevOps and Software Engineering</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-6 flex items-start gap-6 hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                <div className="text-lg text-gray-700 mb-2">{exp.company}</div>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
