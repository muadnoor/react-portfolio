import "./style.css"
import workImg from "../../assets/cardplaceholder.jpeg"

function Portfolio() {
    return(
        <section className="portfolio">
            <h1>My Portfolio</h1>
            <section className="work">
                <div className="card">
                    <img alt="project screenshot" src={workImg}/>
                    <h1>Porject Name</h1>
                    <div>
                        <button><a>Repo</a></button>
                        <button><a>Live</a></button>
                    </div>
                </div>
                <div className="card">
                    <img alt="project screenshot" src={workImg}/>
                    <h1>Porject Name</h1>
                    <div>
                        <button><a>Repo</a></button>
                        <button><a>Live</a></button>
                    </div>
                </div>
                <div className="card">
                    <img alt="project screenshot" src={workImg}/>
                    <h1>Porject Name</h1>
                    <div>
                        <button><a>Repo</a></button>
                        <button><a>Live</a></button>
                    </div>
                </div>
                <div className="card">
                    <img alt="project screenshot" src={workImg}/>
                    <h1>Porject Name</h1>
                    <div>
                        <button><a>Repo</a></button>
                        <button><a>Live</a></button>
                    </div>
                </div>
                <div className="card">
                    <img alt="project screenshot" src={workImg}/>
                    <h1>Porject Name</h1>
                    <div>
                        <button><a>Repo</a></button>
                        <button><a>Live</a></button>
                    </div>
                </div>
                <div className="card">
                    <img alt="project screenshot" src={workImg}/>
                    <h1>Porject Name</h1>
                    <div>
                        <button><a>Repo</a></button>
                        <button><a>Live</a></button>
                    </div>
                </div>
                <div className="card">
                    <img alt="project screenshot" src={workImg}/>
                    <h1>Porject Name</h1>
                    <div>
                        <button><a>Repo</a></button>
                        <button><a>Live</a></button>
                    </div>
                </div>
                <div className="card">
                    <img alt="project screenshot" src={workImg}/>
                    <h1>Porject Name</h1>
                    <div>
                        <button><a>Repo</a></button>
                        <button><a>Live</a></button>
                    </div>
                </div>
                <div className="card">
                    <img alt="project screenshot" src={workImg}/>
                    <h1>Porject Name</h1>
                    <div>
                        <button><a>Repo</a></button>
                        <button><a>Live</a></button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Portfolio;