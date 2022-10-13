import './5.scss'

import { useState } from 'react'

export default function Five() {
  const [formData, setFormData] = useState<formValues>({firstName: "", lastName: "", email: ""})

  function handleFormInput(e: any) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
      <h1>Form works!</h1>
      <form>
        <input type="text" onChange={handleFormInput} value={formData?.firstName} className='textinput' name='firstName' placeholder='First Name' />
        <input type="text" onChange={handleFormInput} value={formData?.lastName} className='textinput' name='lastName' placeholder='Last Name' />
        <input type="email" onChange={handleFormInput} value={formData?.email} className='textinput' name="email" placeholder='Email' />
      </form>
      <p>{JSON.stringify(formData)}</p>
    </div>
  )
}

interface formValues {
  firstName: string
  lastName: string
  email: string
}
