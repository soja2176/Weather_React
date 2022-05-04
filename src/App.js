import React from 'react';
import Card from '../src/components/Card.jsx';
import Cards from '../src/components/Cards.jsx';
import SearchBar from '../src/components/SearchBar.jsx';


function App() {
  return ( 
      <div>
        <SearchBar
          // onSearch={(ciudad) => alert(ciudad)}
        />
         <hr />
         <div>
        <Card
          // max={Cairns.main.temp_max}
          // min={Cairns.main.temp_min}
          // name={Cairns.name}
          // img={Cairns.weather[0].icon}
          // onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div>
        <Cards
          // cities={data}
        />
      </div>
    
      
      </div>
  );
}

export default App;
