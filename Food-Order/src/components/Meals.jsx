import Meal from "./Meal";

export default function Meals( {meals} ) {
    return (
        <div id="meals">
            { meals.map( (meal) => { return (
               <Meal {...meal} key={meal.id} />
            ) } ) }
        </div>
    )
}