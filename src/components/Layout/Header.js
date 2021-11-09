import react from 'react';
import mealsImage from '../../assets/meals.jpg';

import style from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


const Header = props =>{
    return (
     <react.Fragment>
         <header className={style.header}  >
             <h1>Killer Pizza from Mars</h1>
             <HeaderCartButton  onShowCart={props.onShowCart} onHideCart={props.onHideCart} />
         </header>
         
         <div className={style['main-image']}>
             <img src={mealsImage} alt="A table full of delecious meals" />
         </div>
    </react.Fragment>
    );
    
};

export default Header;