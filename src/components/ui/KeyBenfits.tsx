

import { motion } from 'framer-motion'
import { Brain, Zap, Users, Lock } from 'lucide-react'

const benefits = [
  {
    title: "Enhanced Cognitive Processing",
    description: "Boost your mental capacity by offloading information and connections to SecondBrain, allowing for clearer thinking and problem-solving.",
    icon: Brain,
  },
  {
    title: "Rapid Idea Generation",
    description: "Leverage AI-powered suggestions to spark creativity and generate innovative ideas by connecting seemingly unrelated concepts.",
    icon: Zap,
  },
  {
    title: "Seamless Collaboration",
    description: "Share knowledge effortlessly with team members, fostering a collaborative environment that accelerates project progress.",
    icon: Users,
  },
  {
    title: "Secure Knowledge Repository",
    description: "Store your valuable ideas and information in a secure, encrypted platform that's accessible whenever and wherever you need it.",
    icon: Lock,
  },
]

export function KeyBenefits() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Unlock Your Mind's Potential
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover how SecondBrain empowers you to think smarter, create faster, and achieve more.
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="flex justify-center items-center w-12 h-12 mx-auto bg-indigo-100 rounded-full">
                <benefit.icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{benefit.title}</h3>
              <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

