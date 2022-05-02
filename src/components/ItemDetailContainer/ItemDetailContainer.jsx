import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [selectedItem, setSelectedItem] = useState()   //State donde grabo el item  segun el id
    const [load, setLoad] = useState(true) //Flag que me permite mostrar un spinner mientras cargo los datos


    useEffect(() => {

        getProductById(id)
            .then(result => {
                setSelectedItem(result)
                setLoad(false) //Si estoy aca es por que ya cargue los items, entonces quito el spinner
            })
            .catch(error => console.log(error))
    }, [id])

    return (
        <>
            {load ? <Spinner /> : <ItemDetail item={selectedItem} />}
        </>
    )
}

export default ItemDetailContainer