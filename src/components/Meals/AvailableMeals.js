import React,{useEffect,useState} from 'react'
import style from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';


    // {
    //   id: 'm1',
    //   name: 'Sushi',
    //   description: 'Finest fish and veggies',
    //   price: 22.99,
    // },
    // {
    //   id: 'm2',
    //   name: 'Schnitzel',
    //   description: 'A german specialty!',
    //   price: 16.5,
    // },
    // {
    //   id: 'm3',
    //   name: 'Barbecue Burger',
    //   description: 'American, raw, meaty',
    //   price: 12.99,
    // },
    // {
    //   id: 'm4',
    //   name: 'Green Bowl',
    //   description: 'Healthy...and green...',
    //   price: 18.99,
    // },
  // ];
   const URL="http://localhost:8081"
  const AvailabeMeals =() =>{
    const  [mealItem, setMealItem]=useState([]);
    const  getAllFood= async ()=>{
      const respones= await fetch(URL+"/getFood");
      const data=await respones.json();
      setMealItem(data.result);
    }
    useEffect(()=>{
      getAllFood();
    },[])
    const mealsList=mealItem.map(meal =><li  key={meal.id}> <MealItem meal={meal}/> </li>)

    return (
        <section className={style.meals}>
            <Card>
                <ul >
                    {mealsList}
                </ul>
            </Card>
 
        </section>
    )

  }

  export default AvailabeMeals;