import "./Card.css"

function ExperienceCard({icon, data, caption}) {
    return (
        <div className="experience-card">
            {icon && <div className="icon"><i className={icon}></i></div>}
            <div className="data">
                <h2>{data}</h2>
                <p>{caption}</p>
            </div>
        </div>
    )
}

export default ExperienceCard;