//props destructuring
// eslint-disable-next-line react/prop-types
export const SeriesCard = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {img_url, name, rating, description, genre, cast, trailer_url} = data;
    return (
        <li>
            <div>
                <img 
                    src={img_url} 
                    alt={name} 
                    height="40%" 
                    width="40%" 
                />
            </div>
            <h2>Name: {name}</h2>
            <h3>Rating: {rating}</h3>
            <p>Summary: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
            <a href={trailer_url} target="_blank">
                <button>Watch Now</button>
            </a>
        </li>
    );
};



// export const SeriesCard = (props) => { 
//     return (
//         <li>
//             <div>
//                 <img 
//                     src={props.data.img_url} 
//                     alt={props.data.name} 
//                     height="40%" 
//                     width="40%" 
//                 />
//             </div>
//             <h2>Name: {props.data.name}</h2>
//             <h3>Rating: {props.data.rating}</h3>
//             <p>Summary: {props.data.description}</p>
//             <p>Genre: {props.data.genre}</p>
//             <p>Cast: {props.data.cast}</p>
//             <a href={props.data.trailer_url} target="_blank">
//                 <button>Watch Now</button>
//             </a>
//         </li>
//     );
// };
