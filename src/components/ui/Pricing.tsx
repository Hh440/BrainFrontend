
import { Check } from 'lucide-react'
import { Button } from './Button'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Hobby',
    price: 0,
    features: ['5 Projects', 'Up to 10 collaborators', 'Basic analytics'],
    cta: 'Start for free',
    mostPopular: false,
  },
  {
    name: 'Pro',
    price: 19,
    features: ['Unlimited Projects', 'Unlimited collaborators', 'Advanced analytics', 'Priority support'],
    cta: 'Start free trial',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 49,
    features: ['Unlimited Projects', 'Unlimited collaborators', 'Advanced analytics', 'Dedicated support', 'Custom integrations'],
    cta: 'Contact sales',
    mostPopular: false,
  },
]

export function Pricing() {
  return (
    <div className="bg-gray-900 py-12 sm:py-16 lg:py-20" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg leading-6 font-semibold text-gray-300"
          >
            Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-2 text-3xl font-bold text-white sm:text-4xl sm:tracking-tight lg:text-5xl"
          >
            The right price for you, whoever you are
          </motion.p>
        </div>
        <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                {tier.mostPopular && (
                  <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">Most popular</p>
                )}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">${tier.price}</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <ul role="list" className="mt-6 space-y-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex">
                      <Check className="flex-shrink-0 w-6 h-6 text-indigo-500" aria-hidden="true" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-8 block w-full"  text={tier.cta} variant='modern'>
                
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

