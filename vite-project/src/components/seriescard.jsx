import styles from "./seriescard.module.css";
import Styled from "styled-components";

//props destructuring
export const SeriesCard = ({data}) => {
    const {img_url, name, rating, description, genre, cast, trailer_url} = data;
    
    // inline css
    //---------------------------------------------------------------------------------
    // const btn_style = {
    //     padding: "1.2rem 1.2rem",
    //     backgroundColor: `${rating >= 8.5 ? " rgb(77, 215, 77)" : "rgb(255, 255, 0)"}`,
    //     color: "var(--bg-color)",
    //     border: "none",
    //     borderRadius: "0.4rem",
    //     cursor: "pointer",
    //     fontSize: "1.5rem",
    // };
     
    // styled components------------using function object-------------------------------------------------
    const ButtonKamini = Styled.button({
        padding: "1.2rem 1.2rem",
        backgroundColor: `${rating >= 8.5 ? " rgb(77, 215, 77)" : "rgb(255, 255, 0)"}`,
        color: "#000",
        border: "none",
        borderRadius: "0.4rem",
        cursor: "pointer",
        fontSize: "1.5rem",
    });

    // styled components------------using template literals-------------------------------------------------
    // const ButtonKamini = Styled.button`
    //     padding: 1.2rem 1.2rem;
    //     background-color: ${(props) => props.rating >= 8.5 ? "rgb(77, 215, 77)" : "rgb(255, 255, 0)"};    
    //     color: var(--bg-color);
    //     border: none;
    //     border-radius: 0.4rem;
    //     cursor: pointer;
    //     font-size: 1.5rem;
    // `;


    const setcolor = rating >= 8.5 ? styles.super : styles.avg;
    return (
        <li className={styles.card}>
            <div>
                <img 
                    src={img_url} 
                    alt={name} 
                    height="40%" 
                    width="40%" 
                />
            </div>
            <div className={styles["card_content"]}>
            <h2>Name: {name}</h2>
            {/* <h3 style={{margin:"1.2rem"}}>Rating: {rating}</h3> inline css */}

            <h3>Rating: <span className={`${styles.rating} ${setcolor}`}> {rating}</span></h3>
            <p>Summary: {description}</p>
            <p>Genre: {genre}</p>
            <p>Cast: {cast}</p>
            <a href={trailer_url} target="_blank">
                <ButtonKamini rating={rating}>Watch Now</ButtonKamini>
                {/* <button style={btn_style}>Watch Now</button> */}
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
