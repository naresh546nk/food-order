import {Fragment} from 'react'
import MealsSummary from "./MealsSummary";
import AvailabeMeals from "./AvailableMeals";


const Meals =props =>{
    return (
        <Fragment>
        <MealsSummary/>
        <AvailabeMeals/>
        </Fragment>
    )
}

export default Meals;