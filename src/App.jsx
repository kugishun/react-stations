// DO NOT DELETE

// import { props } from 'cypress/types/bluebird'
import './App.css'
import React, { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl,setDogUrl] = useState('https://images.dog.ceo/breeds/african/n02116738_4019.jpg')
  return (
  <div>
    <header>
      <h1>testDog</h1>
    </header>
    <h3>犬の画像を表示するサイトです</h3>
    <img src = {dogUrl}/>
    <button onClick={()=>setDogUrl('https://images.dog.ceo/breeds/bulldog-french/n02108915_2279.jpg')}>更新</button>
  </div>
  );
}
