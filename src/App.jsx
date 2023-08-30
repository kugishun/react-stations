// DO NOT DELETE

// import { props } from 'cypress/types/bluebird'
import './App.css'
import {Header} from './Header.jsx'
import {Description} from './Description.jsx'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
  <div>
    <Header/>
    <Description/>
  </div>
  );
}

// setDogUrl('https://images.dog.ceo/breeds/bulldog-french/n02108915_2279.jpg')