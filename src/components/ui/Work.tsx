


const steps = [
    {
      title: 'Capture',
      description: 'Quickly jot down ideas, notes, and information from various sources.',
    },
    {
      title: 'Organize',
      description: 'Categorize and link your notes to create a web of knowledge.',
    },
    {
      title: 'Retrieve',
      description: 'Easily find and access your information when you need it.',
    },
    {
      title: 'Connect',
      description: 'Discover new insights by connecting seemingly unrelated ideas.',
    },
    {
      title: 'Create',
      description: 'Use your organized knowledge to fuel creativity and productivity.',
    },
  ]
  
export const Work= ()=>{
    return(
        <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl font-semibold">How SecondBrain Works</h1>
            <p className="text-slate-400 text-xl mt-3">Transform your thinking process in five simple steps</p>
            <div className="flex flex-col items-center mt-16 gap-4">
                {steps.map((step,index)=>(
                    
                    <div key={step.title} className="flex items-center w-full max-w-2xl">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="ml-4 flex-grow">
                      <h3 className="text-xl font-medium text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{step.description}</p>
                    </div>
                  </div>

                ))}

            </div>
            
            

        </div>
    )
}