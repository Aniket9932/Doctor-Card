import React from 'react';
import Card from './Card';
import contacts from '../contacts';

function App() {
  return (
    <div>
        <Card 
        name={contacts[0].name} 
        imgURL={contacts[0].imgURL} 
        degree={contacts[0].degree}
        genre={contacts[0].genre}
        exp={contacts[0].exp}
        fee={contacts[0].fee} 
        lang={contacts[0].lang}/>
        <Card 
        name={contacts[1].name} 
        imgURL={contacts[1].imgURL} 
        degree={contacts[1].degree}
        genre={contacts[1].genre}
        exp={contacts[1].exp}
        fee={contacts[1].fee} 
        lang={contacts[1].lang}/>
    </div>
  )
}

export default App;