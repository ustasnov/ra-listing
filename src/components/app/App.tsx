import ListingInterface from "../../model/listinginterface";
import { Listing } from '../listing/Listing';
import { data } from "../../model/etsy";


function App() {

  /*
  const stringData = fs.readFileSync("../../model/etsy.json", {
    encoding: "utf8",
    flag: "r",
   });
   */
  const listingData: ListingInterface = { items: JSON.parse(data) };
  //const listingData: ListingInterface = data;

  return (
    <>
      <Listing items={listingData.items} />
    </>
  )
}

export default App

