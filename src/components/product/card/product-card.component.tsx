import React, { memo, FC } from 'react';
import { CardContainer, Img, CardSubtitle, CardTitle } from '../../../assets/styles/card.styles';
import { ProductModel } from '../../../models/product.model';

type ProductCardProps = ProductModel;

const ProductCard: FC<ProductCardProps> = ({ id,
    title,
    price,
    description,   
    image,
    }) => {
    return (
        <CardContainer>
            <div>
                <Img src={image} alt=''/>
            </div>
            <div>
                <CardTitle>{title}</CardTitle>
                <p>{description}</p>
            </div>
            <CardSubtitle>{price}$</CardSubtitle>
        </CardContainer>
    );
};

export default memo(ProductCard);
