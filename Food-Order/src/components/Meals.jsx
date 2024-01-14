export default function Meals( {meals} ) {
    console.log( { meals } );
    return (
        <div id="meals">
            { meals.map( (meal) => { return (
                <div className="meal-item" >
                   <img src={meal.image} alt={meal.name} /> 
                </div>
            ) } ) }
        </div>
    )
}