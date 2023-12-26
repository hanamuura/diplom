import {CustomButton} from "./UI/CustomButton";
import styled from "styled-components";


export const Product = ({product}) => {
    return(
        <MainBlock>
            <ImageContainer>
                <Image src={product.image}/>
            </ImageContainer>
            <TextContainer>
                <ProductName>{product.price} руб.</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
            </TextContainer>
            <CustomButton>В корзину</CustomButton>
        </MainBlock>
    )
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 313px;
  background-color: #F7F7F7;
`

const Image = styled.image`
  width: 222px;
  height: 239px;
`

const ProductDescription = styled.span``

const ProductName = styled.h4``

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`

const MainBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 455px;
  margin-top: 40px;
`