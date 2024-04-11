import { FC } from 'react';
import ListingInterface from "../../model/listinginterface";
import { Item } from "../item/item";

export const Listing: FC<ListingInterface> = ({ items }) => {

  return (
    <div className="item-list">
      {items.map((item) => <Item
        key={item.listing_id} 
        listing_id={item.listing_id}
        url={item.url}
        MainImage={item.MainImage}
        title={item.title}
        currency_code={item.currency_code}
        price={item.price}
        quantity={item.quantity} />)}
    </div>
  );
}