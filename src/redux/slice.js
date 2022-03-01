import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  products: [
    {
      "id": 1,
      "title": "Chapati",

      "url": "https://static.toiimg.com/photo/69008929.cms",
      "price": "15",
    },
    {
      "id": 2,
      "title": "Pickle",

      "url": "https://www.shakahariblog.com/wp-content/uploads/2014/06/Mango-Pickle1.jpg",
      "price": "60",
    },
    {
      "id": 3,
      "title": "Curd",

      "url": "https://www.netmeds.com/images/cms/wysiwyg/blog/Post/Curd_rice_898.jpg",
      "price": "50",
    },
    {
      "id": 4,
      "title": "Gulab Jamun",

      "url": "https://wallpapercave.com/wp/wp2157196.jpg",
      "price": "500",
    },
    {
      "id": 5,
      "title": "Daal",

      "url": "https://riyasoriginal.com/wp-content/uploads/Tarka-Daal-1536x1024.jpeg",
      "price": "320",
    },
    {
      "id": 6,
      "title": "Panner Angara",

      "url": "https://i0.wp.com/www.rasoimenu.com/wp-content/uploads/2020/01/Paneer-Angara-Recipe.jpg?fit=1920%2C1080&ssl=1",
      "price": "400",
    },
    {
      "id": 7,
      "title": "Rice",

      "url": "https://images7.alphacoders.com/382/382535.jpg",
      "price": "200",
    },
    {
      "id": 8,
      "title": "Biryani",

      "url": "https://www.rasoirani.com/wp-content/uploads/2020/04/veg-hyderabadi-biryani.jpg",
      "price": "300",
    },
    {
      "id": 8,
      "title": "Mango Lassi",

      "url": "https://www.watchwhatueat.com/wp-content/uploads/2016/06/Healthy-Mango-Drink-2.jpg",
      "price": "250",
    },
  ],
  thali: [

  ]
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {


    addTothali: (state, action) => {

      state.thali.push(action.payload);
    },
    RemoveItem: (state, action) => {
      state.thali.splice(action.payload, 1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTothali, RemoveItem } = counterSlice.actions;

export default counterSlice.reducer