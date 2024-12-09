import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is a 'Second Brain'?",
    answer: "A 'Second Brain' is a digital system for storing, organizing, and retrieving your knowledge and ideas. It acts as an extension of your mind, helping you to remember, connect, and utilize information more effectively."
  },
  {
    question: "How is SecondBrain different from other note-taking apps?",
    answer: "SecondBrain goes beyond simple note-taking. It uses advanced linking and AI-powered suggestions to help you create connections between ideas, generate new insights, and retrieve information contextually."
  },
  {
    question: "Can I use SecondBrain for both personal and professional purposes?",
    answer: "SecondBrain is versatile and can be used for a wide range of purposes, from managing personal projects and hobbies to organizing professional research and team collaborations."
  },
  {
    question: "Is my data secure with SecondBrain?",
    answer: "Yes, we take data security very seriously. All your data is encrypted both in transit and at rest. We use industry-standard security measures to protect your information, and you have full control over your data."
  },
  {
    question: "Can I collaborate with others using SecondBrain?",
    answer: "Yes, SecondBrain offers robust collaboration features. You can share specific notes or entire projects with team members, allowing for seamless cooperation on ideas and projects."
  },
]
export const FAQ= ()=>{
    const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-8 ">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}