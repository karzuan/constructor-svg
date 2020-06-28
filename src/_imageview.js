import React from 'react';
import './style.css';
import girl from './images/girl.svg';
import house1 from './images/house1.svg';
import house2 from './images/house2.svg';
import circle from './images/circle.svg';
import square from './images/square.svg';
import star from './images/star.svg';
import triangle from './images/triangle.svg';

class Imageview extends React.Component {
    render() {
        const pictures = [
            {
                name: "house1",
                url: house1
            },
            {
                name: "house2",
                url: house2
            },
            {
                name: "girl",
                url: girl
            },
            {
                name: "circle",
                url: circle
            },
            {
                name: "square",
                url: square
            },
            {
                name: "star",
                url: star
            },
            {
                name: "triangle",
                url: triangle
            }
        ];
        //const result = words.filter(word => word.length > 6);
        const image = pictures.filter(picture => picture.name === this.props.picture);
        //console.log(image[0].url);

        return (
            <div class="graphic">
                <img src={image[0].url} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Imageview;