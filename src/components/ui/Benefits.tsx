
import { CheckCircle } from 'lucide-react'

const benefits = [
  "Improved productivity and efficiency",
  "Enhanced creativity and innovation",
  "Better decision-making through organized information",
  "Reduced mental clutter and cognitive load",
  "Seamless integration with your existing workflow",
  "Collaborative features for team projects",
  "Customizable to fit your unique thinking process",
  "Secure and private storage of your valuable ideas",
]

export const Benefits= ()=>{
    return(
        <section className='bg-indigo-50 py-20'>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl text-center text-gray-900 font-semibold"> Benefits of Using SecondBrain</h1>
            <div className="grid grid-cols-3 gap-8 mt-8">
                {benefits.map((benefit,index)=>(
                    <div key={index} className="flex items-start gap-1">
                        <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                        <p className="ml-3 text-lg text-gray-700">{benefit}</p>
                  </div>
                ))}


            </div>
            </div>
           
        </section>

    )
}