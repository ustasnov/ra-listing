import { FC } from 'react';
import ItemInterface from "../../model/iteminterface";

export const Item: FC<ItemInterface> = ({
  listing_id, url, MainImage, title, currency_code, price, quantity }) => {

  function getTitle(titl: string) {
    let result = titl;
    if (titl.length > 50) {
      result = titl.slice(0, 50) + "...";
    }
    return result;
  }

  function getPrice(cur_code: string, pr: string) {
    let result = "";
    switch (cur_code) {
      case "USD": {
        result = "$" + pr;
        break;
      }
      case "EUR": {
        result = "€" + pr;
        break;
      }
      default: {
        result = `${pr} ${cur_code}`;
        break;
      }
    }
    return result;
  }

  function getQuantityClass(qua: number) {
    let result = "level-high";
    if (qua <= 10) {
      result = "level-low";
    } else if (qua <= 20) {
      result = "level-medium";
    };
    return `item-quantity ${result}`;
  }

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={MainImage.url_570xN}></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{getTitle(title)}</p>
        <p className="item-price">{getPrice(currency_code, price)}</p>
        <p className={getQuantityClass(quantity)}>{`${quantity} left`}</p>
      </div>
    </div>
  );
}