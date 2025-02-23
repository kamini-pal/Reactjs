import Card  from "./components/card"
import "./components/seriescard.module.css"

export const App = () => {
  return(
   <section className="container">
        <h1 className="heading-card">List of best series </h1>
     
     <Card />
   </section>
  )

  };
