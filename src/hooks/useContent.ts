import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../Config"



interface Tag {
    title: string;
}

interface Content {
    title: string;
    link: string;
    tags: Tag[]; 
    type: string;
}

export const useContent= ()=>{
    const[contents,setContents]= useState<Content[]>([])



    async function fetchContents(){

        try{
            axios.get(`${BACKEND_URL}/api/v1/content`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
                .then(response => {
                    setContents(response.data.content);
                    
                })

        }catch(e){
            console.error("Error fetching contents",e)
        }
    }


            useEffect(() => {   
                console.log(contents); 
            }, [contents]); 

        useEffect(()=>{
            fetchContents()

            let interval= setInterval(()=>{

                fetchContents()

            },10*100)

            return ()=>{
                clearInterval(interval)
            }

        },[])


            


    return contents
}