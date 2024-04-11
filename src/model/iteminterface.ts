import MainImageInterface from "./mainimageinterface";

interface ItemInterface {
  listing_id: number,
  url: string,
  MainImage: MainImageInterface,
  title: string,
  currency_code: string,
  price: string,
  quantity: number
}

export default ItemInterface
