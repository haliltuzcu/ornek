import CardStyle from "../scss/card.module.scss"

const Card = ({data}) => {
    console.log(data);
  return (
<div className={CardStyle.Container}>
    {data.map((item)=>{
        const {id, name, job, comment, img } = item
return(
<div key={id} className={CardStyle.Card}>
        <h1>{name}</h1>
        <h2>{job}</h2>
        <p>{comment}</p>
        <img src={img} alt="" />
        <div className={CardStyle.buton}>
            <button className={CardStyle.small}>Small</button>
            <button className={CardStyle.large}>Large</button>
        </div>
    </div> 
)
    })}

</div>
    
  )
}

export default Card


