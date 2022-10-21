import './5.scss';

import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import { FormValues } from './Five.types';

export function Five() {
  const [formData, setFormData] = useState<FormValues>({
    comments: '',
    email: '',
    employment: '',
    favColor: '',
    firstName: '',
    isFriendly: false,
    lastName: '',
  });

  const handleFormInput = useCallback(
    (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) => {
      const { name, value, type, checked } = e.target as HTMLInputElement;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    },
    []
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="five">
      <h1>User Input Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="userdata">
          <input
            className="textinput"
            name="firstName"
            placeholder="First Name"
            type="text"
            value={formData.firstName}
            onChange={handleFormInput}
          />
          <input
            className="textinput"
            name="lastName"
            placeholder="Last Name"
            type="text"
            value={formData.lastName}
            onChange={handleFormInput}
          />
          <input
            className="textinput"
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleFormInput}
          />
        </div>

        <textarea
          className="areainput"
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleFormInput}
        />
        <div className="boxcheck">
          <input
            checked={formData.isFriendly}
            id="isFriendly"
            name="isFriendly"
            type="checkbox"
            onChange={handleFormInput}
          />
          <label htmlFor="isFriendly">Are you friendly?</label>
        </div>

        <fieldset>
          <legend>Radiobuttons</legend>
          <input
            checked={formData.employment === 'unemployed'}
            id="test1"
            name="employment"
            type="radio"
            value="unemployed"
            onChange={handleFormInput}
          />
          <label htmlFor="test1">Unemployed</label>
          <br />
          <input
            checked={formData.employment === 'part-time'}
            id="test2"
            name="employment"
            type="radio"
            value="part-time"
            onChange={handleFormInput}
          />
          <label htmlFor="test2">Part-time</label>
          <br />
          <input
            checked={formData.employment === 'full-time'}
            id="test3"
            name="employment"
            type="radio"
            value="full-time"
            onChange={handleFormInput}
          />
          <label htmlFor="test3">Full-time</label>
        </fieldset>

        <select id="favColor" name="favColor" value={formData.favColor} onChange={handleFormInput}>
          <option value="">---</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button type="submit">Send</button>
      </form>

      <p>{JSON.stringify(formData)}</p>
    </div>
  );
}
