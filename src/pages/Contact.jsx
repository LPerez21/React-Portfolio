import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = email =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    if (!value) {
      setErrors(prev => ({ ...prev, [name]: 'This field is required' }));
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors(prev => ({ ...prev, email: 'Enter a valid email' }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = 'This field is required';
    if (!formData.email) {
      newErrors.email = 'This field is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.message) newErrors.message = 'This field is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Send</button>
      </form>

      <p style={{ marginTop: '2rem' }}>
        Or reach me directly at: <strong>LuisPerez.LP@gmail.com</strong>
      </p>
    </section>
  );
}
