import react from 'react';
import mealsImage from '../../assets/meals.jpg';

import style from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = props =>{
    return (
     <react.Fragment>
         <header className={style.header}>
             <h1>  React Meal</h1>
             <HeaderCartButton/>
         </header>
         
         <div className={style['main-image']}>
             <img src={mealsImage} alt="A table full of delecious meals" />
         </div>
    </react.Fragment>
    );
    
};

export default Header;