import { Brain, Lightbulb, Search, Share2 } from 'lucide-react'
import {motion} from 'framer-motion'
const features = [
    {
      name: 'Knowledge Organization',
      description: 'Easily categorize and link your ideas, notes, and resources.',
      icon: Brain,
    },
    {
      name: 'Smart Search',
      description: 'Find exactly what you need with our powerful search capabilities.',
      icon: Search,
    },
    {
      name: 'Idea Generation',
      description: 'Spark creativity with AI-powered suggestions and connections.',
      icon: Lightbulb,
    },
    {
      name: 'Collaboration',
      description: 'Share and collaborate on projects with team members seamlessly.',
      icon: Share2,
    },
  ]

export const Features= ()=>{
    return(
        <div className="flex flex-col justify-center items-center gap-4 ">
            <motion.h3 
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.5}}
            
            className="text-blue-600 uppercase font-medium">
                Features
            </motion.h3>

            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-semibold text-4xl">
                A better way to Organize your thoughts
            </motion.p>

            <div className='mt-10'>

                <div className='space-y-0 grid grid-cols-2 gap-x-20 gap-y-8'>
                    {features.map((feature,index)=>(
                        <motion.div 
                        key={feature.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        
                        className='relative'>
                            <div className='flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white absolute'>
                                <feature.icon aria-hidden={true} className='h-6 w-6'/>
                            </div>
                            <div className="ml-16">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{feature.name}</h3>
                                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                            </div>

                        </motion.div>

                    ))}
                </div>
            </div>

            

        </div>
    )
}