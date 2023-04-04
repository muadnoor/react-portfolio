import "./style.css"
import imgOfMe from "../../assets/placeholder.jpeg"

function Header() {
    return(
        <section className="header">
            <img alt="Profile Picture" src={imgOfMe}/>
        </section>
    )
}

export default Header;