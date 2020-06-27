import React from 'react';
import './style.css';
import girl from './images/girl.svg';
import house1 from './images/house1.svg';
import house2 from './images/house2.svg';

class Imageview extends React.Component {
    render() {
        const pictures = [
            {name: "house1",
             url: house1
            },
            {name: "house2",
             url: house2
            },
            {name: "girl",
             url: girl
            }
        ];
        //const result = words.filter(word => word.length > 6);
        const image = pictures.filter( picture => picture.name === this.props.picture );
        //console.log(image[0].url);

        return (
        <img src={image[0].url} className="App-logo" alt="logo" />
        );
    }
}

export default Imageview;