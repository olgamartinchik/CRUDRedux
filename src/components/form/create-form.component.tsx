import { FC, FormEvent, memo, useState, useCallback } from 'react';
import { Form, InputContainer, Label } from '../../assets/styles/form.styles';
import { CREATE_BTN, DESCRIPTION, INPUT_TYPE_TEXT, SUBMIT, TITLE } from '../../constants/props.constants';
import { ProductModel } from '../../models/product.model';
import Button from '../button/button.component';
import Input from '../input/Input.component';
import { v4 as uuidv4 } from 'uuid';

type ProductCreationFormProps = {
    onSubmit: (product: Partial<ProductModel>) => void;
};

const ProductCreationForm: FC<ProductCreationFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            if (!title) {
                setError('Title is required');

                return;
            }
            const product: Partial<ProductModel> = {
                id: uuidv4(),
                title,
                description,
            };
            onSubmit(product);
            setTitle('');
            setDescription('');
            setError('');
        },
        [title, description, onSubmit]
    );
    return (
        <Form onSubmit={handleSubmit}>
            <InputContainer>
                <Label htmlFor='title'>Title:</Label>
                <Input
                    id='title'
                    innerClassName='inputText'
                    type={INPUT_TYPE_TEXT}
                    value={title}
                    placeholder={TITLE}
                    onChange={e => {
                        setTitle(e.target.value);
                        if (title) {
                            setError('');
                        }
                    }}
                />
                <span>{error}</span>
            </InputContainer>

            <InputContainer>
                <Label htmlFor='description'>Description:</Label>
                <Input
                    id='description'
                    type={INPUT_TYPE_TEXT}
                    value={description}
                    placeholder={DESCRIPTION}
                    innerClassName='inputDescription'
                    onChange={e => setDescription(e.target.value)}
                />
            </InputContainer>

            <Button type={SUBMIT} text={CREATE_BTN} innerClassName='createBtn' />
        </Form>
    );
};
export default memo(ProductCreationForm);
