import ItemInterface from "../../model/iteminterface";
import { Listing } from '../listing/Listing';
import data from "../../model/etsy.json";
import './App.css';

function App() {
  return (
    <>
      <Listing items={data as ItemInterface[]} />
    </>
  )
}

export default App

