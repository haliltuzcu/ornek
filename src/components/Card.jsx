import CardStyle from "../scss/card.module.scss"

const Card = ({id,isim,job,comment,img}) => {
  return (
    <div className={CardStyle.Card}>
        <h1>{isim}</h1>
        <h2>{job}</h2>
        <p>{comment}</p>
        <img src={img} alt="" />
    </div>
  )
}

export default Card