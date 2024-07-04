

const CardTeam = (image, name, roll, description) => {
  return (
    <div className="team-member">
    <img src= {image} alt={name} className="team-image" />
    <h2>{name}</h2>
    <h3>{roll}</h3>
    <p>{description}</p>
    </div>
  )
}

export default CardTeam;



