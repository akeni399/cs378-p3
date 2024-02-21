import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuItem from './components/MenuItem';
import Logo from './components/Logo';
import Slogan from './components/Slogan';
import Tagline from './components/Tagline';
import Cart from './components/Cart';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const App = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: 'Gyoza',
      description: 'Japanese dumplings',
      imageName: 'gyoza.png',
      price: 5.99,
      quantity: 0,
    },
    {
      id: 2,
      title: 'Sushi',
      description: 'Japanese rice rolls',
      imageName: 'sushi.png',
      price: 6.99,
      quantity: 0,
    },
    {
      id: 3,
      title: 'Ramen',
      description: 'Japanese noodle soup',
      imageName: 'ramen.png',
      price: 7.99,
      quantity: 0,
    },
    {
      id: 4,
      title: 'Matcha Cake',
      description: 'Japanese green tea cake',
      imageName: 'matcha-cake.png',
      price: 4.99,
      quantity: 0,
    },
    {
      id: 5,
      title: 'Mochi',
      description: 'Japanese rice cake',
      imageName: 'mochi.png',
      price: 3.99,
      quantity: 0,
    },
    {
      id: 6,
      title: 'Yakitori',
      description: 'Japanese skewered chicken',
      imageName: 'yakitori.png',
      price: 2.99,
      quantity: 0,
    },
    {
      id: 7,
      title: 'Takoyaki',
      description: 'Japanese octopus balls',
      imageName: 'takoyaki.png',
      price: 5.99,
      quantity: 0,
    },
    {
      id: 8,
      title: 'Sashimi',
      description: 'Japanese raw fish',
      imageName: 'sashimi.png',
      price: 8.99,
      quantity: 0,
    },
    {
      id: 9,
      title: 'Okonomiyaki',
      description: 'Japanese savory pancake',
      imageName: 'okonomiyaki.png',
      price: 6.99,
      quantity: 0,
    },
    {
      id: 10,
      title: 'Katsu Curry',
      description: 'Japanese curry with fried pork',
      imageName: 'katsu-curry.png',
      price: 9.99,
      quantity: 0,
    }
]);

const updateNum = (itemId, num) => {
  setMenuItems(prev =>
    prev.map(item =>
      item.id===itemId? {...item, quantity: num} : item
      )
    );
};

const subtotal = menuItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <div>
      <Logo />
      <Slogan />
      <Tagline /> 
      <div className="menu">
        {/* Display menu items dynamically here by iterating over the provided menuItems */}
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price} 
            imageName = {item.imageName}
            quantity={item.quantity}
            updateNum = {updateNum}
            />
        ))}
        <Cart subtotal={subtotal} menuItems={menuItems} setMenuItems={setMenuItems} />
      </div>
    </div>

    
  );

};

export default App;
