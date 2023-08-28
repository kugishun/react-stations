// DO NOT DELETE

// import { props } from 'cypress/types/bluebird'
import './App.css'
import {Header} from './Header.jsx'
import {Description} from './Description.jsx'
import React, { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl,setDogUrl] = useState('https://images.dog.ceo/breeds/african/n02116738_4019.jpg')
  return (
  <div>
    <Header/>
    <Description/>
    <img src = {dogUrl}/>
    <button onClick={()=>fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    // .then((json) => console.log(json.message))
    .then((json) => setDogUrl(json.message))}>更新</button>
  </div>
  );
}

// setDogUrl('https://images.dog.ceo/breeds/bulldog-french/n02108915_2279.jpg')