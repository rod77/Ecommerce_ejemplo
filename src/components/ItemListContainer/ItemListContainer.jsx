import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import Spinner from '../Spinner/Spinner';
import { useParams } from 'react-router-dom';
import db from '../../services/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const { categoryId } = useParams()

  const [items, setItems] = useState() //State donde grabo los items
  const [load, setLoad] = useState(true) //Flag que me permite mostrar un spinner mientras cargo los datos

  const getData = async (category) =>{
    try {
      setLoad(true)
      const document = category ? query(collection(db,"Items"),where('category','==',category))
                                : collection(db,"Items")
      const col = await getDocs(document)
      const result = col.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      setItems(result)
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }  

  // const getDataCategory = async (id) =>{
  //   try {
  //     const q = query(collection(db,"Items"),where('category','==',id))
  //     const querySnapshot = await getDocs(q)
  //     const result = querySnapshot.docs.map((doc) => doc = { id:doc.id,...doc.data()})
  //     setItems(result)
  //     setLoad(false)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }  
 

  useEffect(() => {
    getData(categoryId)
  }, [categoryId])
  
  return (
    <>
      {load ? <Spinner /> : <ItemList data={items} />}
    </>
  );
};

export default ItemListContainer;
