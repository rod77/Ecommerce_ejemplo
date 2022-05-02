import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../data/asyncMock';

const ItemListContainer = () => {

  const { categoryId } = useParams()

  const [items, setItems] = useState() //State donde grabo los items
  const [load, setLoad] = useState(true) //Flag que me permite mostrar un spinner mientras cargo los datos


  useEffect(() => {
    getProducts(categoryId)
      .then(result => {
        setItems(result)
        setLoad(false) //Si estoy aca es por que ya cargue los items, entonces quito el spinner
      })
      .catch(error => console.log(error))

  }, [categoryId])

  return (
    <>
      {load ? <Spinner /> : <ItemList data={items} />}
    </>
  );
};

export default ItemListContainer;
