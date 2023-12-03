import { useState } from 'react';
import{ styled } from 'styled-components'
import Button from './Button'
import LabelInput from './LabelInput';

const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlDiv>
        <LabelInput label="Email" invalid={emailNotValid} type="email" onChange={(event) => handleInputChange('email', event.target.value)} />
        <LabelInput label="Password" invalid={passwordNotValid} type="password" onChange={(event) => handleInputChange('password', event.target.value) } />
        {/* <p className='paragraph' >
          <Label $invalid={emailNotValid} >Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          <Label>Password</Label>
          <Input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p> */}
      </ControlDiv>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button /*className='button'*/ onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
