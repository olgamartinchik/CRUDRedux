import React, { memo, FC } from 'react';
import {
    CardContainer,
    Img,
    CardSubtitle,
    CardTitle,
    FlexContent,
    AboutContent,
} from '../../../assets/styles/card.styles';
import { ProductModel } from '../../../models/product.model';
import Description from './product-description.component';

type ProductCardProps = ProductModel;

const ProductCard: FC<ProductCardProps> = ({ id, title, price, description, image }) => {
    return (
        <CardContainer>
            <FlexContent>
                <Img src={image} alt='' />
                {/* {description.length} */}
            </FlexContent>
            <AboutContent>
                <CardTitle>{title}</CardTitle>
                <Description text={description} maxLength={description.length} />
            </AboutContent>
            <FlexContent>
                <CardSubtitle>{price}$</CardSubtitle>
            </FlexContent>
        </CardContainer>
    );
};

export default memo(ProductCard);
