import './5.scss';

import { useCallback, useState } from 'react';

export function Five() {
  const [formData, setFormData] = useState<FormValues>({ email: '', firstName: '', lastName: '' });

  const handleFormInput = useCallback((e: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }, []);

  return (
    <div>
      <h1>Form works!</h1>
      <form>
        <input
          className="textinput"
          name="firstName"
          placeholder="First Name"
          type="text"
          value={formData?.firstName}
          onChange={handleFormInput}
        />
        <input
          className="textinput"
          name="lastName"
          placeholder="Last Name"
          type="text"
          value={formData?.lastName}
          onChange={handleFormInput}
        />
        <input
          className="textinput"
          name="email"
          placeholder="Email"
          type="email"
          value={formData?.email}
          onChange={handleFormInput}
        />
      </form>
      <p>{JSON.stringify(formData)}</p>
    </div>
  );
}

type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
};
