import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, price, imageName}) => {
    const getImage = (imageName) => {
        return require(`../images/${imageName}`);
    };
    const imageSource = getImage(imageName);
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
                    <div class="col-9">
                        <p className="price">{price}</p>
                    </div>
                    <div class="col-3 btn-container">
                        <button class="btn-c">add</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MenuItem;
