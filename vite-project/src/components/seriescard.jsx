//props destructuring
export const SeriesCard = ({data}) => {
    const {img_url, name, rating, description, genre, cast, trailer_url} = data;
    
    const btn_style = {
        padding: "3.2rem 1.2rem",
        backgroundColor: "var(--btn-hover-bg-color)",
        color: "var(--bg-color)",
        border: "none",
        fontsize: "1.2rem",
    };
    return (
        <li className="card">
            <div>
                <img 
                    src={img_url} 
                    alt={name} 
                    height="40%" 
                    width="40%" 
                />
            </div>
            <div className="card-content">
            <h2>Name: {name}</h2>
            {/* <h3 style={{margin:"1.2rem"}}>Rating: {rating}</h3> inline css */}

            <h3>Rating: {rating}</h3>
            <p>Summary: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
            <a href={trailer_url} target="_blank">
                <button style={btn_style}>Watch Now</button>
            </a>
            </div>
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
