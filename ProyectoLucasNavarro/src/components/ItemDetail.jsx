import { Button } from '@material-ui/core';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import { CartContext } from './CartContext';
import "./ItemDetail.css"

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const onAdd = (qty) => {
        alert("You have selected " + qty + " items.");
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
        {
            item && item.image
            ? 
            
            <DetailContainer className='ContendorProductoPadre'>
                <WrapperDetail className='ContenedorProducto'>
                    <ImgContainer>
                        <ImageDetail src={item.image[0]} />
                    </ImgContainer>
                   <div className='ContenedorBoth'>
                    <InfoContainer className='DescripcionProducto'>
                        <Title className='TituloProducto'>{item.name}</Title>
                        <Desc className='Descripcion'>{item.description}</Desc>
                        <div className='PrecioStock'>
                        <Price className='Precio'>$ {item.cost}</Price>
                        <Desc className='Stock'>{item.stock} unidades en stock</Desc>
                        </div>
                    </InfoContainer>
                    <div className='Contador'>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="secondary">CheckOut</Button></Link>
                    }
                    </div>
                    </div>
                   
                </WrapperDetail>
            </DetailContainer>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;