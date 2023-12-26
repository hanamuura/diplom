import styled from "styled-components";
import {Product} from "./Product";


export const ProductsList = ({products}) => {
    return(
        <MainBlock>
            {products.map(product => <Product product={product}/>)}
        </MainBlock>
    )
}

const MainBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`