import FooterStyle from "../scss/footer.module.scss"

const Footer = () => {
  return (
    <div className={FooterStyle.Footer}>
        <p>Copyright by mg-moria {new Date().getFullYear()} </p>
    </div>
  )
}

export default Footer