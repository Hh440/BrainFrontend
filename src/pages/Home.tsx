import { NavBar } from "../components/ui/NavBar"
import { Button } from "../components/ui/Button"
import { Features } from "../components/ui/Features"
import { Work } from "../components/ui/Work"
import { Benefits } from "../components/ui/Benefits"
import { Pricing } from "../components/ui/Pricing"
import { FAQ } from "../components/ui/FAQ"
import { Footer } from "../components/ui/footer"
import { KeyBenefits } from "../components/ui/KeyBenfits"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate= useNavigate()

    const handleClick=()=>{
        navigate('/signup')

    }
    return (
        <div>
            <NavBar />

            <div className="flex flex-col gap-16">
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-96 md:gap-0 gap-2">
                    <div className="bg-blue-600 flex flex-col justify-center items-start pl-8 sm:pl-16 lg:pl-40 gap-6 sm:pt-8 sm:pb-8">
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">Your Digital</h1>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-400">Second Brain</h1>
                        </div>
                        
                        <p className="text-white font-medium text-lg sm:text-xl">
                            Organize your thoughts, boost your productivity, and never <br /> forget important information again with SecondBrain.
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <Button text="Get Started" variant="modern" className="sm:w-auto w-full" OnClick={handleClick}/>
                            <Button text="Live Demo" variant="secondary" className="sm:w-auto w-full" OnClick={handleClick} />
                        </div>
                    </div>
                    <div className="bg-green-600">
                        <img className="w-full h-full object-cover" src="https://imgs.search.brave.com/GqEKyyae1EwGoiakG-FtRAIiyf_ZUgygqzI-Uuw2Daw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9uZXVyYWwtd2Vk/LWNvbXBsZXgtbmVy/dm91cy1zeXN0ZW0t/YnJhaW4tbmV1cm9u/cy1jbG9zZS11cC1i/YWNrZ3JvdW5kXzc3/Njg5NC01NzM4MC5q/cGc_c2VtdD1haXNf/aHlicmlk" alt="Loading...." />
                    </div>
                </div>

                <div>
                    <Features />
                </div>

                <div className="mt-8">
                    <Work />
                </div>

                <div className="mt-2">
                    <Benefits />
                </div>

                <div>
                    <KeyBenefits />
                </div>

                <div>
                    <Pricing />
                </div>

                <div className="mt-3">
                    <FAQ />
                </div>

                <div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
