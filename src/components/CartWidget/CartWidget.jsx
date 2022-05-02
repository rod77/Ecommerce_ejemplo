import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import cartLogo from '../../assets/images/cart.png';

const CartWidget = () => {


  return (<>
      {
      <Link to={"/cart"} style={{ backgroundColor: '#e4c360', border: 'none', marginLeft: 16, marginRight: 24 }}>
        <img src={cartLogo} alt="cart" width={32} height={32} />
        <button style={{ backgroundColor: '#e4c360', border: 'none'}}>{0}</button>
      </Link>
      }
  </>
  );
};

export default CartWidget;
