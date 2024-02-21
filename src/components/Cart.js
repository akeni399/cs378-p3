import React from 'react';

function Cart( {subtotal, menuItems, setMenuItems}) {

  const handleOrderClick = () => {
    const order = menuItems.filter(item => item.quantity>0);
    if(order.length===0) {
      alert("No items in cart!");
    } else {
      const msg = order.map(item => `${item.title}: ${item.quantity}`).join('\n');
      alert(msg);
    }
  };

  const clearAll = () => {
    const newMenu = menuItems.map(item => ({ ...item, quantity:0}));
    setMenuItems(newMenu);
  };

  return (
    <div class="row">
      <div className="col-4 subtotal">
        <p>Subtotal: {subtotal}</p>
      </div>
      <div className="col-4 order">
        <button class='btn-d' onClick={handleOrderClick}>Order</button> 
      </div>
      <div className=" col-4 clear">
        <button class='btn-d' onClick={clearAll}> Clear All </button>
      </div>
      
    </div>
  );
}

export default Cart;