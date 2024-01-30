const Character = (props) => {
  const games=props.main.games
  return ( 
    <>
    <div className="character">
      <img className="profileImg" src={`${props.main.charImg}`} />
      <h2>{props.main.name}</h2>
      <div className="universe"><img src={`${props.main.world}`} /></div>
      <ul>
      {games.map(game => <li key={game}>{game}</li>)}
      </ul>
      </div>

    </>
  )
}

export default Character