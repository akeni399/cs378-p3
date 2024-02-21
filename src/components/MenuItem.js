import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, price, imageName, quantity, updateNum}) => {
    const getImage = (imageName) => {
        return require(`../images/${imageName}`);
    };
    const imageSource = getImage(imageName);

    const increment = () => {
        console.log("Incrementing quantity for item with ID:", id);
        updateNum(id, quantity+1);
    };

    const decrement = () => {
        if(quantity>0) {
            console.log("decrementing quantity for item with ID:", id);
            updateNum(id, quantity-1);
        }
    };
    return (
        <div>
            <div class="row container">
            <div class="col-4">
                {imageSource && <img class="img_container" src={imageSource} alt="alt text" />}
            </div>
            <div class="col-8">
                <div class="row">
                    <h3>{title}</h3>
                </div>
                <div class="row">
                    <p>{description}</p>
                </div>
                <div class="row">
                    <div className="col">
                        <p className="price">{price}</p>
                    </div>
                    <div class="col-1 d-flex align-items-center justify-content-center">
                        <button onClick={decrement} class="btn-c"><FaMinus /></button>
                    </div>
                    <span className="col 1 d-flex align-items-center justify-content-center">{quantity}</span>
                    <div class="col-1 d-flex align-items-center justify-content-center">
                        <button onClick={increment} class="btn-c"><FaPlus /></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MenuItem;
