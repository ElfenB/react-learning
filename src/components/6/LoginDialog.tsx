import { CSSProperties, ChangeEvent, FormEvent, useState } from 'react';

import { FormValues } from './LoginDialog.types';

const style: Record<string, CSSProperties> = {
  component: {
    background: 'var(--background-color)',
    borderRadius: '8px',
    boxShadow: '1px 1px 15px -8px rgba(0,0,0,0.7)',
    color: 'var(--color)',
    left: 'calc(50vw - 10rem)',
    padding: '1rem',
    position: 'absolute',
    top: '30%',
    width: '20rem',
    wordBreak: 'break-word',
  },
  debug: {
    textAlign: 'center',
  },
  textinput: {
    borderRadius: '5px',
    borderStyle: 'solid',
    padding: '0.8rem 1rem',
  },
};

export default function LoginDialog() {
  const [formData, setFormData] = useState<FormValues>({
    email: '',
    newsletter: true,
    password: '',
    passwordRepeat: '',
  });

  const handleFormInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      // TODO: Check on type of name
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const matchingPasswords: boolean = formData.password === formData.passwordRepeat;
    if (matchingPasswords) {
      // passwords match
      console.log(formData);
      formData.newsletter ? console.log('Thank you for signing up to our newsletter!') : '';
    } else {
      // passwords dont match
      alert('error, passwords don\'t match');
    }
  };

  return (
    <div style={style.component}>
      <h1>Login</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          name="email"
          placeholder="Email"
          style={style.textinput}
          type="email"
          value={formData.email}
          onChange={handleFormInput}
        />
        <input
          name="password"
          placeholder="Password"
          style={style.textinput}
          type="password"
          value={formData.password}
          onChange={handleFormInput}
        />
        <input
          name="passwordRepeat"
          placeholder="Repeat password"
          style={style.textinput}
          type="password"
          value={formData.passwordRepeat}
          onChange={handleFormInput}
        />
        <div className="newsletter-checkbox">
          <input
            checked={formData.newsletter}
            id="newsletter"
            name="newsletter"
            type="checkbox"
            onChange={handleFormInput}
          />
          <label htmlFor="newsletter">I want to join the newsletter</label>
        </div>
        <button style={style.textinput} type="submit">
          Login
        </button>
      </form>
      <p style={style.debug}>{JSON.stringify(formData)}</p>
    </div>
  );
}
