import Character from './Character'
import './App.css'

function App() {

  return (
    <div className='container'>
      <div className="characterCard">
      
      <Character main = {{name:"Princess Peach", charImg:"https://www.smashbros.com/assets_v2/img/fighter/peach/ss_1.jpg", world:"/assets/world/super-mario.png", games:['Super Princess Peach', 'Princess Peach: Showtime!','Mario Party Series' ]}}/>

    </div>

     <div className="characterCard">
      <Character main ={{name: 'Incineroar', charImg:"https://www.smashbros.com/assets_v2/img/fighter/incineroar/ss_6.jpg", world: 'Pokemon',
          games:['Pokémon Sun and Moon', 'Pokémon Sword and Shield','Pokémon Scarlet and Violet' ]
        }}/>
      </div>

     <div className="characterCard">
        <Character main ={{name: 'Corrin',
        charImg:"https://www.smashbros.com/assets_v2/img/fighter/corrin/ss_4.jpg",
        world: 'Fire Emblem',
            games:['Fire Emblem Fates', 'Fire Emblem Heroes','Fire Emblem Warriors' ]
          }}/>
      </div>
    </div>
  )
}

export default App
