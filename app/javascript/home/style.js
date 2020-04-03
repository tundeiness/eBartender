import styling from 'styled-components';

const HeadingDiv = styling.div`
background-color: #eb5537;
height: 5rem;
`;

const Footer = styling.div`
background-color: gainsboro;
`;

const Success = styling.div`
background-color: green;
color: white;
padding: 1rem;
position: absolute;
top: ${props => props.top}px;
right: 1rem;
z-index: 1000;
transition: top .5s ease;
`

const Err = styling.div`
background-color: red;
color: white;
padding: 1rem;
position: absolute;
top: ${props => props.top}px;
right: 1rem;
z-index: 1000;
transition: top .5s ease;
`

const Info = styling.div`
background-color: grey;
color: white;
padding: 1rem;
position: absolute;
top: ${props => props.top}px;
right: 1rem;
z-index: 1000;
transition: top .5s ease;
`

export { HeadingDiv, Footer, Success, Err, Info };
