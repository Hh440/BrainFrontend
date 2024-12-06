import axios from "axios"
import { useEffect } from "react"
import { BACKEND_URL } from "../../Config"
import { useState,useRef } from "react"
import { Input } from "./Input"
import { Button } from "./Button"


interface TagSelectorProps{
    onChange:(tags: string[])=>void;
}

export const TagSelector = ({onChange}:TagSelectorProps)=>{
   

    
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const TagRef= useRef<HTMLInputElement>(null);


    async function TagCall(){
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/tags`);
            if (response.status === 200 && response.data.tags) {
                setTags(response.data.tags.map((tag: { title: string }) => tag.title));
            } else {
                console.error("No tags found or response invalid.");
            }

            console.log(tags)
        } catch (error) {
            console.error("Error fetching tags:", error);
        }
    }

    const handleAddTag = () => {
        const inputValue = TagRef.current?.value.trim();
        if (inputValue && !selectedTags.includes(inputValue)) {
          const updatedTags = [...selectedTags, inputValue];
          setSelectedTags(updatedTags);
          onChange(updatedTags);
        }
        if (TagRef.current) {
          TagRef.current.value = "";
        }
      };

    const handleToggleTag = (tag: string) => {
        const updatedTags = selectedTags.includes(tag)
          ? selectedTags.filter((t) => t !== tag)
          : [...selectedTags, tag];
    
        setSelectedTags(updatedTags);
         onChange(updatedTags);
      };

    useEffect(()=>{

        TagCall()

        

    },[])


    const handleKey=(e:any)=>{

      if(e.key=="Enter"){
          handleAddTag()
      }

    }

    return(
        <div className="w-full border rounded p-4">
            <div className="flex flex-wrap gap-2 mb-2">
                {selectedTags.map((tag)=>(
                     <span
                     key={tag}
                     className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
                   >
                     {tag}
                     <button
                       onClick={() => handleToggleTag(tag)}
                       className="ml-2 text-red-500 hover:text-red-700"
                     >
                       &times;
                     </button>
                   </span>  
                ))}
                
            </div>

            <div className="flex flex-col items-center gap-2 mb-4">
                <Input reference={TagRef} placeholder="Type a tag"  onKeyDown={(e:any)=>handleKey(e)}/>
               
            
                
            </div>




            <div className="max-h-40 overflow-y-auto border-t">
                {tags.map((tag) => (
                <label key={tag} className="block cursor-pointer p-2">
                    <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleToggleTag(tag)}
                    className="mr-2"
                    />
                    {tag}
                </label>
        ))}
      </div>

        </div>
    )

}