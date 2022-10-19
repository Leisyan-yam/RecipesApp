function RecipeComponent ({label, image, igredient, link, }){
    return(
        <div className="eachrecipe">
        <h3>{label}</h3>
        <img src={image} alt="imageRec" className="recipeImage"/>
        <ul>{igredient.map((element,i) => (
        <li key={i}> <img src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Plant-result-others-inmotus-design-3.png"alt="searchIcon" className="searchIcon"/> {element}</li>
        ) 
        )}</ul>
        <a href={link} target="_blank" rel="noopener noreferrer" className="link"> view the method </a>
        </div>
    )
}
export default RecipeComponent