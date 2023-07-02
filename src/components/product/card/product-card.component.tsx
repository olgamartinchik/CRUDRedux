import React, { memo, FC } from 'react';
import { CardContainer, Img, CardSubtitle, CardTitle, CardText, FlexContent, AboutContent } from '../../../assets/styles/card.styles';
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
            <FlexContent>
                <Img src={image} alt=''/>
            </FlexContent>
            <AboutContent>
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
            </AboutContent>
            <FlexContent>
                <CardSubtitle>{price}$</CardSubtitle>
            </FlexContent>
        </CardContainer>
    );
};

export default memo(ProductCard);
