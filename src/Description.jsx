// @ts-check
import { useState } from 'react';
import DogImage from './DogImage';

export const Description = () => {
  const [dogUrl,setDogUrl] = useState('https://images.dog.ceo/breeds/african/n02116738_4019.jpg')

  const onClickButton = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((json) => {const url = json['message']
    setDogUrl(url)})
  }

  return (
    <div>
    <h3>犬の画像を表示するサイトです</h3>
    <DogImage imageUrl = {dogUrl}/>
    <button onClick={onClickButton}>更新</button>
    </div>
  )
}

export default Description
