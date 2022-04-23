import "./App.css";

import Heroe from "./components/Heroe";
import heroejson from "./superheroes.json";

function App() {
  return (
    <div className="App">
      {heroejson.map((el) => (
        <Heroe
          name={el.name}
          ratingname={el.ratingname}
          universe={el.universe}
          alter_ego={el.alter_ego}
          activity={el.activity}
          friends={el.friends}
          superpowers={el.superpowers}
          more={el.more}
          photo={el.photo}
        ></Heroe>
      ))}
    </div>
  );
}

export default App;
