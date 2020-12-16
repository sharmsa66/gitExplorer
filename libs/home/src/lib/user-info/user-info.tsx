import React, { useState } from 'react';

import classes from './user-info.module.scss';
import { Input } from '@git-explorer/ui';

/* eslint-disable-next-line */
export interface UserInfoProps {}

export function UserInfo() {
  const [userInfo, setUserInfo] = useState({
    firstName: {
      elementType: 'input',
      labelText: '',
      elementConfig: {
        type: 'text',
        placeholder: 'First Name',
      },
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    lastName: {
      elementType: 'input',
      labelText: '',
      elementConfig: {
        type: 'text',
        placeholder: 'Last Name',
      },
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    email: {
      elementType: 'input',
      labelText: '',
      elementConfig: {
        type: 'email',
        placeholder: 'Email',
      },
      value: '',
      validation: {
        required: true,
        pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"

      },
      valid: false
    },
    phone: {
      elementType: 'input',
      labelText: '',
      elementConfig: {
        type: 'tel',
        placeholder: 'Phone',
      },
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    street: {
      elementType: 'input',
      labelText: '',
      elementConfig: {
        type: 'text',
        placeholder: 'Street',
      },
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    city: {
      elementType: 'input',
      labelText: '',
      elementConfig: {
        type: 'text',
        placeholder: 'City',
      },
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    state: {
      elementType: 'input',
      labelText: '',
      elementConfig: {
        type: 'text',
        placeholder: 'State',
      },
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    zipcode: {
      elementType: 'input',
      labelText: '',
      elementConfig: {
        type: 'text',
        placeholder: 'ZipCode',
      },
      value: '',
      validation: {
        required: true,
        pattern: "(^\\d{5}$)|(^\\d{5}-\\d{4}$)"
      },
      valid: false
    },
    membership: {
      elementType: 'select',
      labelText: '',
      elementConfig: {
        options: [
          { value: 1, displayName: 'Gold' },
          { value: 2, displayName: 'Silver' },
          { value: 3, displayName: 'Bronze' },
        ],
      },
      value: '',
      validation: {
        required: true
      },
      valid: false
    },
    married: {
      elementType: 'checkbox',
      labelText: 'Please indicate your marriage status',
      elementConfig: {

      },
      value: '',
      validation: {
        required: true
      },
      valid: false
    }
  });

  const checkValidity = (value, rules) =>{
    let isValid = true;
      if(rules['required']){
        isValid = value.trim() !== '' && isValid;
      }

      if(rules['pattern']){
         const pattern = new RegExp(rules['pattern']);
         isValid = pattern.test(value) && isValid;
      }

      return isValid;
}


  const handleInputChange = (event, key) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const newUser = { ...userInfo };
    const elem = newUser[key];
    elem.value = value;
    elem.valid =  checkValidity(value,elem.validation);
     console.log(newUser);
    setUserInfo(newUser);
  };

  const handleSubmitHandler = (event) => {
    event.preventDefault();
    const frmData = {};
     Object.keys(userInfo).forEach((key) => {
       frmData[key] =userInfo[key].value
    });
    alert(JSON.stringify(frmData));
  };


  const formData = Object.keys(userInfo).map((item) => {
    return {
      key: item,
      value: userInfo[item].value,
      elementType: userInfo[item].elementType,
      elementConfig: userInfo[item].elementConfig,
      label: userInfo[item].labelText
    };
  });
  return (
    <div className={classes.container}>
      <h2>User Information</h2>
      <form onSubmit={(event) => handleSubmitHandler(event)}>
        {formData.map((elem) => {
          return (
            <Input
              key={elem.key}
              elementConfig={elem.elementConfig}
              name={elem.key}
              inputtype={elem.elementType}
              label={elem.label}
              value={elem.value}
              handleInputChange={(event) => handleInputChange(event, elem.key)}
            />
          );
        })}

        <div className={classes['submit-container']}>
          <button type="submit">Save...</button>
        </div>
      </form>
    </div>
  );
}

export default UserInfo;
