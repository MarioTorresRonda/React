import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";

export default function StateLogin() {

const { 
  value: emailValue, 
  handleValueChange: handleEmailChange, 
  handleInputBlur: HandleEmailBlur,
  hasError : emailError
} = useInput( '', (value) => isEmail(value) && isNotEmpty(value) );

const { 
  value: passwordValue, 
  handleValueChange: handlePasswordChange, 
  handleInputBlur: HandlePaswordBlur,
  hasError : passwordError
} = useInput( '', (value) => isNotEmpty(value) && hasMinLength( value, 6) );

function handleSubmit(event) {
  event.preventDefault();
}

  return (
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>

      <div className="control-row">
        <Input 
          label="email"
          id="email" 
          type="email"  
          name="email" 
          onBlur={HandleEmailBlur}
          onChange={handleEmailChange} 
          value={emailValue} 
          error={emailError && 'Please enter a valid email'}
        />

        <Input 
          label="password"
          id="password" 
          type="password" 
          name="password" 
          onBlur={HandlePaswordBlur}
          onChange={handlePasswordChange} 
          value={passwordValue}
          error={passwordError && 'Please enter a valid password'}
        />

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
