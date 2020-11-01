import React from 'react';
import products from './data';
import { ProductButton, ProductDesc, ProductImg, ProductInfo, ProductItem, ProductPrice, ProductsContainer, ProductsHeading, ProductTitle, ProductWrapper } from './ProductsElements';


const Products = () => {
    return (
        <ProductsContainer>
            <ProductsHeading>Heading</ProductsHeading>

            <ProductWrapper>
                {products.map((product, index) => {
                    return (
                        <ProductItem key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductItem>
                    );
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
