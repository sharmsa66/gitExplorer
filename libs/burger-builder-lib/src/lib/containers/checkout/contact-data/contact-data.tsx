import { Button } from '@git-explorer/ui';
import React, { FC, useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { Loaders, Input } from '@git-explorer/ui';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectIngredients,
  addOrder,
  Customer,
  selectAuthState,
} from '@git-explorer/data';

import classes from './contact-data.module.scss';

/* eslint-disable-next-line */
export interface ContactDataProps {}

export const ContactData: FC<ContactDataProps> = () => {
  const [contact, setContact] = useState<Customer>({
    name: '',
    email: '',
    postalCode: '',
    phone: '',
    street: '',
    deliveryMethod: '',
  });
  const [loading, setLoading] = useState(false);
  const { ingredients, totalPrice } = useSelector(selectIngredients);
  const authState = useSelector(selectAuthState);

  const history = useHistory();
  const dispatch = useDispatch();

  const orderHandler = useCallback(
    async (event) => {
      event.preventDefault();
      setLoading(true);
      const Order = {
        ingredients,
        totalPrice,
        customer: contact,
        userId: authState.localId
      };

      try {
        await dispatch(addOrder({ token: authState.idToken, Order }));
        setLoading(false);
        history.push('/');
      } catch (error) {
        setLoading(false);
      }
    },

    [contact, dispatch, ingredients, history, totalPrice,
       authState.idToken, authState.localId]
  );

  const onInputChangeHandler = (event) => {
    const newContact = { ...contact };
    newContact[event.target.name] = event.target.value;
    setContact(newContact);
  };

  let form = (
    <form onSubmit={orderHandler}>
      <Input
        name="name"
        inputtype="input"
        handleInputChange={onInputChangeHandler}
        elementConfig={{ placeholder: 'Your Name' }}
        value={contact.name}
      />
      <Input
        inputtype="input"
        handleInputChange={onInputChangeHandler}
        name="email"
        elementConfig={{ placeholder: 'Your Email', type: 'email' }}
        value={contact.email}
      />
      <Input
        inputtype="input"
        handleInputChange={onInputChangeHandler}
        name="phone"
        elementConfig={{ placeholder: 'Your Phone', type: 'tel' }}
        value={contact.phone}
      />
      <Input
        inputtype="input"
        handleInputChange={onInputChangeHandler}
        name="street"
        elementConfig={{ placeholder: 'street', type: 'text' }}
        value={contact.street}
      />
      <Input
        inputtype="input"
        handleInputChange={onInputChangeHandler}
        name="postalCode"
        elementConfig={{ placeholder: 'Postal Code', type: 'text' }}
        value={contact.postalCode}
      />
      <Input
        inputtype="select"
        handleInputChange={onInputChangeHandler}
        name="deliveryMethod"
        elementConfig={{
          options: [
            { value: 'fastest', displayName: 'fastest' },
            { value: 'cheapest', displayName: 'cheapest' },
          ],
        }}
        value={contact.deliveryMethod}
      />
      <hr />
      <p>
        <Button btnType="primary" clicked={orderHandler}>
          ORDER
        </Button>
      </p>
    </form>
  );

  if (loading) {
    form = <Loaders show={true} />;
  }

  return (
    <div className={classes['contact-data']}>
      <h2>Please enter contact data</h2>
      <p>loading...{loading}</p>
      {form}
    </div>
  );
};

export default ContactData;
