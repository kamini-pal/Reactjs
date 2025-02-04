export const SeriesCard = (props) => { 
    return (
    <li>
    <div>
    <img src = {props.currEle.img_url} height = "40%" width = "40%"></img>
    </div>
    <h2>Name:{props.currEle.name}</h2>
    <h3>Rating:{props.currEle.rating}</h3>
    <p>Summary:{props.currEle.description}</p>
    <p>Genre:{props.currEle.genre}</p>
    <p>Cast:{props.currEle.cast}</p>
    <a href = {props.currEle.trailer_url} target = "_blank">
        <button>Watch Now</button>
    </a>
    </li>
    );
}