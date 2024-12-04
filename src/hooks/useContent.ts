import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../Config"

export const useContent= ()=>{
    const[contents,setContents]= useState([])



    async function fetchContents(){

        try{
            const response =await axios.get(`${BACKEND_URL}/api/v1/contents`,{
                headers:{
                    "Authorization":localStorage.getItem("token")
                }
            })
            setContents(response.data.content)

        }catch(e){
            console.error("Error fetching contents",e)
        }
    }


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