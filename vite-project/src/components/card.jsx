import seriesdata from "../api/seriesdata.json";
import { SeriesCard } from "./seriescard";

 const Card = () => {
    return (
        <>
            {seriesdata.map((currEle) => (
                <SeriesCard currEle={currEle}  key = {currEle.id} />
            ))}
            </>
    )}
            export default Card;


      {/* // export const Card = () =>{ */}
    // const name = "MisMatched";
    // const rating = 9.2;
    // const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit soluta obcaecati dolore, cumque, vero libero itaque rem laborum, quaerat iusto delectus neque at quod et sapiente. Hic, molestias quas.";
    // const Genre = ()=>{
    //   const genre = "RomCom";
    //   return genre;
    // }
    // let age = 20;
  
    // // let canwatch = "Not Available"
    // // if(age>=18) canwatch = "Watch Now"
    
    //   const canwatch =() =>{
    //     if(age>=18){
    //       return "Watch Now"
    //     }else{
    //       return "Not Available"
    //     }
    //   }
  
//     return (
//       <>
//       <div>
//         <img src="img1.jpeg" alt="not find image" width="40%" height="20%" />
//       </div>
//       <h2>Name: {name}</h2>
//       <h3>Rating:{rating}</h3>
//       <p> Summary: {description} </p>
//       <p> Genre: {Genre()} </p>
  
//       {/* <button>{age>=18?"Watch Now" : " Not Available"}</button> */}
  
//       {/* <button>{canwatch}</button> */}
  
//       <button>{canwatch()}</button>
  
//       </>
//     )
//   }
  
// //   export default Card;
//     //    export {Card}