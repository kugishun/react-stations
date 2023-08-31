// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"

export const DogListContainer = () => {
  const [dogImgage,setDogImage] = useState([])
  const [breeds,setBreeds] = useState([])
  const [selectedBreed,setSelectedBreed] = useState()
  const handleChange= e =>{
    setSelectedBreed(e.target.value)
  }

  useEffect(() =>{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((json) => {const breed = Object.keys(json.message)
      setBreeds(breed)
      console.log(breed)
  },)
  },[])

  const onClickButton = (breed) => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((res) => res.json())
      .then((json) => {
        const url = json["message"];
        setDogImage(url);
      });
  };


  const DogList = (list) => {
    return list.slice(0, 10).map((url, index) => (
      <img className="dogimage2" key={url} src={url} alt={`Dog ${index}`} />
    ));
  };

  return(
    // <img src={breeds} className="dogimage"/>
    // <p>{breeds}</p>
    <>
    <BreedsSelect breeds = {breeds} selectedBreed = {selectedBreed} onChange={handleChange}/>
    <button onClick={() => onClickButton(selectedBreed)}>表示</button>
    {DogList(dogImgage)}
    <p>{selectedBreed}が選択されています</p>
    </>
  )
}

export default DogListContainer
