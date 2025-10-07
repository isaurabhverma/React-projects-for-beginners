//sneakers
import Deadpool from '../../images/Deadpool.webp';
import Spiderman from '../../images/Spiderman.webp';
import BatMan from '../../images/Bat-Man.webp';
//sneakers

//perfumes
import perfume1 from '../../images/perfume1.webp';
import perfume2 from '../../images/perfume2.webp';
import perfume3 from '../../images/perfume3.webp';
import perfume4 from '../../images/perfume4.webp';
import perfume5 from '../../images/perfume5.webp';
import perfume6 from '../../images/perfume6.webp';
//perfumes

//Bags
import Bag1 from '../../images/Bag1.webp';
import Bag2 from '../../images/Bag2.webp';
import Bag3 from '../../images/Bag3.webp';
import Bag4 from '../../images/Bag4.webp';
import Bag5 from '../../images/Bag5.webp';
import Bag6 from '../../images/Bag6.webp';
import Bag7 from '../../images/Bag7.webp';
//Bags

//Comics
import Comic1 from '../../images/Comic1.webp';
import Comic2 from '../../images/Comic2.webp';
import Comic3 from '../../images/Comic3.webp';
import Comic4 from '../../images/Comic4.webp';
import Comic5 from '../../images/Comic5.webp';
import Comic6 from '../../images/Comic6.webp';
import Comic7 from '../../images/Comic7.webp';
import Comic8 from '../../images/Comic8.webp';
//Comics

//Jeans
import Jeans1 from '../../images/Jeans1.webp';
import Jeans2 from '../../images/Jeans2.webp';
import Jeans3 from '../../images/Jeans3.webp';
import Jeans4 from '../../images/Jeans4.webp';
//Jeans

//Shorts
import Shorts1 from '../../images/Shorts1.webp';
import Shorts2 from '../../images/Shorts2.webp';
import Shorts3 from '../../images/Shorts3.webp';
import Shorts4 from '../../images/Shorts4.webp';
//Shorts

//Trousers
import Pajamas1 from '../../images/Pajamas1.webp';
import Pajamas2 from '../../images/Pajamas2.webp';
import Pajamas3 from '../../images/Pajamas3.webp';
import Pajamas4 from '../../images/Pajamas4.webp';
//Trousers

//Tshirts
import TShirt1 from '../../images/TShirt1.webp';
import TShirt2 from '../../images/TShirt2.webp';
import TShirt3 from '../../images/TShirt3.webp';
import TShirt4 from '../../images/TShirt4.webp';
import TShirt5 from '../../images/TShirt5.webp';
import TShirt6 from '../../images/TShirt6.webp';
//Tshirts

//Shirts
import Shirt1 from '../../images/Shirt1.webp';
import Shirt2 from '../../images/Shirt2.webp';
import Shirt3 from '../../images/Shirt3.webp';
import Shirt4 from '../../images/Shirt4.webp';
import Shirt5 from '../../images/Shirt5.webp';
//Shirts

//Hoodie
import Hoodie1 from '../../images/Hoodie1.webp';
import Hoodie2 from '../../images/Hoodie2.webp';
import Hoodie3 from '../../images/Hoodie3.webp';
import Hoodie4 from '../../images/Hoodie4.webp';
import Hoodie5 from '../../images/Hoodie5.webp';
import Hoodie6 from '../../images/Hoodie6.webp';
//Hoodie
















import { useState , createContext} from 'react';

export const PageState = createContext()
export const ProductState = createContext()

const StateProvider = (props) => {
  const [curclick, setClick] = useState("Women")
  const [women, setWomen] = useState('clicked');
  const [men, setMen] = useState('notclicked');
  const [kid, setKid] = useState('notclicked');

  const handelwomen = () => {
    setWomen('clicked')
    setMen('notclicked')
    setKid('notclicked')
    setClick("Women")
  }
  const handelmen = () => {
    setMen('clicked')
    setWomen('notclicked')
    setKid('notclicked')
    setClick("Men")
  }
  const handelkid = () => {
    setKid('clicked')
    setMen('notclicked')
    setWomen('notclicked')
    setClick("Kid")
  }

  const stateValue = {
    handelkid,
    handelmen,
    handelwomen,
    setClick,
    setKid,
    setMen,
    setWomen,
    women,
    men,
    kid,
    curclick
  }

  return (
    <PageState.Provider value={stateValue}>
      {props.children}
    </PageState.Provider>
  )
}

const ProductData = (props) => {
  const [whichData,setData] = useState("MarvelEdition");

  const changeData = (newData)=>{
    setData(newData);
  }

  const data = {


    "Marvel Edition": [{
      id: 1,
      name: 'Deadpool: Utility Suit',
      price: 2599,
      imageUrl: Deadpool, // Correct path, just the image reference
      sizes: ['UK4', 'UK5', 'UK6', 'UK7', 'UK8', 'UK9', 'UK10', 'UK11'],
    }, {
      id: 2,
      name: 'Spider-Man: Spidey Sigil',
      price: 2999,
      imageUrl: Spiderman, // Correct path, just the image reference
      sizes: ['UK4', 'UK5', 'UK6', 'UK7', 'UK8', 'UK9', 'UK10', 'UK11'],
    }, {
      id: 3,
      name: 'Batman: The Dark Knight 2.0',
      price: 2399,
      imageUrl: BatMan, // Correct path, just the image reference
      sizes: ['UK4', 'UK5', 'UK6', 'UK7', 'UK8', 'UK9', 'UK10', 'UK11'],
    }],



    Perfumes: [
      {
        id: 4,
        name: 'Batman: Rebirth',
        price: 1299, // Hardcoded price
        imageUrl: perfume1,
        sizes: ['50ML', '100ML', '200ML']
      },
      {
        id: 5,
        name: 'Naruto: Akatsuki',
        price: 1599, // Hardcoded price
        imageUrl: perfume2,
        sizes: ['50ML', '100ML', '200ML']
      },
      {
        id: 6,
        name: 'Naruto: Hokage',
        price: 1199, // Hardcoded price
        imageUrl: perfume3,
        sizes: ['50ML', '100ML', '200ML']
      },
      {
        id: 7,
        name: 'Iron Man: Billionaire',
        price: 1999, // Hardcoded price
        imageUrl: perfume4,
        sizes: ['50ML', '100ML', '200ML']
      },
      {
        id: 8,
        name: 'Black Panther: The King',
        price: 1399, // Hardcoded price
        imageUrl: perfume5,
        sizes: ['50ML', '100ML', '200ML']
      },
      {
        id: 9,
        name: 'TSS Originals: Lunaris',
        price: 1699, // Hardcoded price
        imageUrl: perfume6,
        sizes: ['50ML', '100ML', '200ML']
      }
    ],



    Bags: [ {
      id: 10,
      name: "Solid: Sleek Black",
      price: 1699,
      imageUrl: Bag1,
  },
  {
      id: 11,
      name: "Wolverine: Weapon X",
      price: 2999,
      imageUrl: Bag2,
  },
  {
      id: 12,
      name: "The Lion King: Ready To Rule",
      price: 1499,
      imageUrl: Bag3,
  },
  {
      id: 13,
      name: "Marvel: Mightiest Heroes",
      price: 2499,
      imageUrl: Bag4,
  },
  {
      id: 14,
      name: "Solid: Lavender Purple",
      price: 1699,
      imageUrl: Bag5,
  },
  {
      id: 15,
      name: "Solid: Neon Green",
      price: 1699,
      imageUrl: Bag6,
  },
  {
      id: 16,
      name: "Marvel: Superhero Squad",
      price: 1499,
      imageUrl: Bag7,
  },
],



  "Comic Books": [
    {
        id: 1,
        name: "Attack on Titan: Lost Girls The Manga 2",
        price: 899,
        imageUrl: Comic1
    },
    {
        id: 2,
        name: "Attack on Titan: Lost Girls The Manga 1",
        price: 899,
        imageUrl: Comic2
    },
    {
        id: 3,
        name: "Your Lie in April 1",
        price: 899,
        imageUrl: Comic3
    },
    {
        id: 4,
        name: "Wolverine: Old Man Logan",
        price: 2399,
        imageUrl: Comic4
    },
    {
        id: 5,
        name: "Vinland Saga 2",
        price: 1599,
        imageUrl: Comic5
    },
    {
        id: 6,
        name: "Vinland Saga 1",
        price: 1599,
        imageUrl: Comic6
    },
    {
        id: 7,
        name: "Teen Titans Go! to Camp!",
        price: 799,
        imageUrl: Comic7
    },
    {
        id: 8,
        name: "Everything's Archie Vol. 2",
        price: 899,
        imageUrl: Comic8
    }],



    Jeans: [
      {
          id: 1,
          name: "Denim: Dark Blue",
          description: "Men Jeans",
          price: 1799,
          imageUrl: Jeans1,
          sizes: ["28", "30", "32", "34", "36"] // Add sizes
      },
      {
          id: 2,
          name: "Denim: Dark Grey (Slim Fit)",
          description: "Men Jeans",
          price: 1799,
          imageUrl: Jeans2,
          sizes: ["28", "30", "32", "34", "36"] // Add sizes
      },
      {
          id: 3,
          name: "Denim: Dark Blue (Classic Fit)",
          description: "Men Jeans",
          price: 1999,
          imageUrl: Jeans3,
          sizes: ["28", "30", "32", "34", "36"] // Add sizes
      },
      {
          id: 4,
          name: "DC: Comic Canvas",
          description: "Men Jeans",
          price: 2299,
          imageUrl: Jeans4,
          sizes: ["28", "30", "32", "34", "36"] // Add sizes
      }
  ],



  Shorts: [
    {
      id: 1,
      name: "TSS Active: Avengers",
      description: "Men Running Shorts",
      price: 999,
      imageUrl: Shorts1,
      sizes: ["S", "M", "L", "XL", "XXL"] // Add sizes
  },
  {
      id: 2,
      name: "TSS Originals: Black Camo",
      description: "Men Cargo Shorts",
      price: 999,
      imageUrl: Shorts2,
      sizes: ["S", "M", "L", "XL", "XXL"] // Add sizes
  },
  {
      id: 3,
      name: "Solids: Deep Black",
      description: "Men Cargo Shorts",
      price: 1399,
      imageUrl: Shorts3,
      sizes: ["S", "M", "L", "XL", "XXL"] // Add sizes
  },
  {
      id: 4,
      name: "Solids: Denim Blue",
      description: "Men Cargo Shorts",
      price: 999,
      imageUrl: Shorts4,
      sizes: ["S", "M", "L", "XL", "XXL"] // Add sizes
  }
  ],



  Trousers: [
    {
        id: 1,
        name: "Beer Pattern",
        description: "Pajamas",
        price: 699,
        imageUrl: Pajamas1,
        sizes: ["S", "M", "L", "XL", "XXL"] // Add sizes
    },
    {
        id: 2,
        name: "Solids: Smoke Grey",
        description: "Pajamas",
        price: 899,
        imageUrl: Pajamas2,
        sizes: ["S", "M", "L", "XL", "XXL"] // Add sizes
    },
    {
        id: 3,
        name: "Jurassic Park: Logo",
        description: "Pajamas",
        price: 799,
        imageUrl: Pajamas3,
        sizes: ["S", "M", "L", "XL", "XXL"] // Add sizes
    },
    {
        id: 4,
        name: "Solids: Black",
        description: "Pajamas",
        price: 899,
        imageUrl: Pajamas4,
        sizes: ["S", "M", "L", "XL", "XXL"] // Add sizes
    }
],



TShirts: [
  {
    id: 1,
    name: "One Piece: Pirates",
    price: 999,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: TShirt1
  },
  {
    id: 2,
    name: "Solids: Deep Sea Blue",
    price: 999,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: TShirt2
  },
  {
    id: 3,
    name: "Solids: Orient (Colourblock)",
    price: 1299,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: TShirt3
  },
  {
    id: 4,
    name: "House Of Dragon: Logo",
    price: 1299,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: TShirt4
  },
  {
    id: 5,
    name: "Minions: I Love Gru",
    price: 649,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: TShirt5
  },
  {
    id: 6,
    name: "TSS Originals: Muted Clay",
    price: 999,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: TShirt6
  }
],


Shirts: [
  {
    id: 1,
    name: "Thor: Mighty Avenger",
    price: 1999,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: Shirt1
  },
  {
    id: 2,
    name: "Utility Shirt: Moon Grey",
    price: 1399,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: Shirt2
  },
  {
    id: 3,
    name: "Solids: Midnight Black",
    price: 1299,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: Shirt3
  },
  {
    id: 4,
    name: "Solids: Olive Green",
    price: 1299,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: Shirt4
  },
  {
    id: 5,
    name: "Bloom: Believe",
    price: 1699,
    sizes: ['S', 'M', 'L', 'XL'],
    imageUrl: Shirt5
  }
],



Hoodies: [{
  id: 1,
  name: "Batman: The Suit",
  price: 2599,
  sizes: ['S', 'M', 'L', 'XL'],
  imageUrl: Hoodie1
},
{
  id: 2,
  name: "Marvel: Wakanda Heritage",
  price: 1799,
  sizes: ['S', 'M', 'L', 'XL'],
  imageUrl: Hoodie2
},
{
  id: 3,
  name: "TSS Originals: Just Black",
  price: 1999,
  sizes: ['S', 'M', 'L', 'XL'],
  imageUrl: Hoodie3
},
{
  id: 4,
  name: "Zip-Up: Deep Wine",
  price: 1499,
  sizes: ['S', 'M', 'L', 'XL'],
  imageUrl: Hoodie4
},
{
  id: 5,
  name: "TSS Originals: Burgundy Checks",
  price: 1799,
  sizes: ['S', 'M', 'L', 'XL'],
  imageUrl: Hoodie5
},
{
  id: 6,
  name: "Superman: Man of Steel",
  price: 799,
  sizes: ['S', 'M', 'L', 'XL'],
  imageUrl: Hoodie6
}
],


"BestSeller #1": [{
  id: 2,
  name: 'Spider-Man: Spidey Sigil',
  price: 2999,
  imageUrl: Spiderman, // Correct path, just the image reference
  sizes: ['UK4', 'UK5', 'UK6', 'UK7', 'UK8', 'UK9', 'UK10', 'UK11'],
},{
  id: 1,
  name: "Thor: Mighty Avenger",
  price: 1999,
  sizes: ['S', 'M', 'L', 'XL'],
  imageUrl: Shirt1
},{
  id: 11,
  name: "Wolverine: Weapon X",
  price: 2999,
  imageUrl: Bag2,
}],


"BestSeller #2": [
  {
    id: 2,
    name: "Denim: Dark Grey (Slim Fit)",
    description: "Men Jeans",
    price: 1799,
    imageUrl: Jeans2,
    sizes: ["28", "30", "32", "34", "36"] // Add sizes
},
{
  id: 7,
  name: 'Iron Man: Billionaire',
  price: 1999, // Hardcoded price
  imageUrl: perfume4,
  sizes: ['50ML', '100ML', '200ML']
},
{
  id: 4,
  name: "House Of Dragon: Logo",
  price: 1299,
  sizes: ['S', 'M', 'L', 'XL'],
  imageUrl: TShirt4
}]

  }

  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Add to wishlist
  const addToWishlist = (product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
  };

  // Move to cart
  const moveToCart = (product,size) => {
    if (!cart.find(item => item.id === product.id)) {
      product.sizes = size
      setCart([...cart, product]);
      removeFromWishlist(product.id);
    }
  }
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };


  const allFunction = {
    whichData,
    data,
    changeData,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    moveToCart,
    cart,
    removeFromCart
  }



  return (
    <ProductState.Provider value={allFunction}>
      {props.children}
    </ProductState.Provider>
  )
}

export { StateProvider, ProductData };
