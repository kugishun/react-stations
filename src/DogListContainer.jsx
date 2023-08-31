// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"

export const DogListContainer = () => {
  const [breeds,setBreeds] = useState([""])
  const [selectedBreed,setSelectedBreed] = useState()

  useEffect(() =>{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((json) => {const breed = json.message
      setBreeds(breed)
    for (const data in breed) {
      console.log(data);
    }
  },)
  },[])

  return(
    // <img src={breeds} className="dogimage"/>
    // <p>{breeds}</p>
    <>
    <BreedsSelect breeds = {breeds}/>
    </>
  )
}

export default DogListContainer
