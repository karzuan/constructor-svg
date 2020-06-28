import React from 'react';
import './style.css';
import girl from './images/girl.svg';
import House1 from './images/house1.js';
import house2 from './images/house2.svg';
import circle from './images/circle.svg';
import square from './images/square.svg';
import star from './images/star.svg';
import triangle from './images/triangle.svg';

class Imageview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edge: this.props.edge,
            fill: this.props.fill
        }
    }

    render() {
        const pictures = [
            // {
            //     name: "house1",
            //     url: House1
            // },
            // {
            //     name: "house2",
            //     url: house2
            // },
            // {
            //     name: "girl",
            //     url: girl
            // },
            {
                name: "circle",
                image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210"><circle cx="110" transform="translate(-5 -5)" cy="110" r="100" stroke=' + this.props.edge + ' stroke-width="10" fill=' + this.props.fill + ' /></svg>'
            },
            {
                name: "square",
                image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 210"><path stroke="' + this.props.edge + '" stroke-width="10" fill="' + this.props.fill + '" d="M5 5h220v200H5z"/></svg>'
            },
            {
                name: "star",
                image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 728.44 692.81"><path d="M364.22 5.658l-110.89 224.69-247.96 36.03 179.43 174.89-42.36 246.96 221.78-116.6L586 688.228l-42.36-246.96 179.43-174.89-247.96-36.03z" stroke-linejoin="round" stroke="' + this.props.edge + '" stroke-width="20" fill="' + this.props.fill + '"/></svg>'
            },
            {
                name: "triangle",
                image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 102" version="1.0"><path transform="matrix(-.0223 .25776 -.22342 -.02573 199.841 -18.685)" d="M546 834.36L142.37 651.4l360.26-258.08L546 834.36z" stroke="' + this.props.edge + '" stroke-width="10.366" fill="' + this.props.fill + '"/></svg>'
            },
            {
                name: "house1",
                image: '<svg xmlns="http://www.w3.org/2000/svg" width="736.199" height="497.063" version="1.0">' + 
                       '<g fill-rule="evenodd"><path d="M299.934 272.438l382.337-27.866-3.993 160.767-374.35 91.102-3.994-224.003z" fill="#a7a7a7" stroke="#000" stroke-width=".724"/>'+
                       '<path d="M303.696 496.7L53.362 407.484l-4.991-159.696 251.685 24.651 3.64 224.263z" fill="#dedede" stroke="#000" stroke-width=".724"/>'+
                       '<path d="M300.092 273.184L47.78 247.997l-1.747-36.976 89.345-178.988 153.234 198.28 394.085-9.58-.207 23.781-384.893 29.206 2.495-.536z" fill="#421707" stroke="#000" stroke-width=".724"/>'+
                       '<path d="M47.031 231.117l-.292-20.22 88.764-178.73L111.045.362.362 215.576v16.613l46.67-1.072z" fill="#2f1b07" stroke="#000" stroke-width=".724"/><path d="M221.694 207.779l-1.412-67.45-35.294-3.79 2.118 68.208 34.588 3.032z" fill="' + this.props.fill + '" stroke="#000" stroke-width="7.096"/>'+
                       '<path d="M109.922.416L288.113 231.92l447.724-11.79-.5-11.79-184.68-178.987L109.923.416z" fill="#fc7847" stroke="#000" stroke-width=".724"/><path d="M135.761 201.026l-1.596-67.404-34.713-2.65 1.197 68.161 35.112 1.893z" fill="#556a63" stroke="#000" stroke-width="6.707"/>'+
                       '<path d="M235.057 318.998L96.298 299.17l2.496 71.81 41.428 9.645-.998-74.489.998 74.49 48.416 12.325-.998-78.24 1.497 78.776 47.917 13.397-1.997-87.886z" fill="#556a63" stroke="#3e1a1a" stroke-width="5.792"/>'+
                       '<path d="M526.736 442.341l48.593-11.567-.5-135.58-46.918 6.966-1.175 140.181z" fill="#32140a" stroke="#000" stroke-width=".724"/>'+
                       '<path d="M527.368 373.443l4.492 2.144 9.484-3.216-.5 4.823-10.481 4.288-3.12-2.144.125-5.895z" fill="#83675b" stroke="#000" stroke-width=".724"/>'+
                       '<path d="M451.701 398.853l-2.118-84.123-61.411 7.957.705 90.944 62.824-14.778z" fill="#556a63" stroke="#341313" stroke-width="5.575"/>'+
                       '<path d="M617.337 289.576l-.25 73.417 39.931-9.378.75-68.594-40.43 4.555z" fill="#556a63" stroke="#441a1a" stroke-width="5.068"/>'+
                       '<path d="M325.593 98.531l54.905 70.738h39.93l-52.908-68.594-41.927-2.144z" fill="' + this.props.edge + '" stroke="#2e0808" stroke-width="7.82"/>'+
                       '<path d="M542.286 105.873l55.765 59.871h29.647l-56.471-59.113-28.941-.758z" fill="#6a6a60" stroke="#321515" stroke-width="6.879"/>'+
                       '</g></svg>'

            }

        ];
        //const result = words.filter(word => word.length > 6);
        const image = pictures.filter(picture => picture.name === this.props.picture);
        //console.log(image[0].url);

        function parseSvg() {
            return { __html: image[0].image };
        }

        return (
            <div className="graphic">
                <div dangerouslySetInnerHTML={parseSvg()} />
            </div>
        );
    }
}

export default Imageview;