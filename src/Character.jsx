const Character = (props) => {
  const games=props.main.games
  return ( 
    <>
    <div className="character">
      <p>{props.main.name}</p>
      <img className="profileImg" src={`${props.main.charImg}`} />
      <img src={`${props.main.world}`} />
      <ul>
      {games.map(game => <li key={game}>{game}</li>)}
      </ul>
      </div>

    </>
  )
}

export default Character