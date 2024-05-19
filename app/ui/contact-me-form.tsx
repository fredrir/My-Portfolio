import React, { useState } from 'react';

export function ContactMeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [buttonText, setButtonText] = useState('Submit');
  const [status, setStatus] = useState({ submitted: false, message: '' });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setButtonText('Sending...');

    await fetch('https://formspree.io/f/xeqyqwqv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        setStatus({ submitted: true, message: 'Message sent successfully' });
        setButtonText('Submit');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((err) => {
        setStatus({ submitted: false, message: 'Error sending message' });
        setButtonText('Submit');
      });
  };

  return (
    <div
      className="ContactMeForm my-4 rounded border-2 border-white p-4 shadow-lg"
      id="bottom-of-page"
      style={{
        background:
          'linear-gradient(135deg, rgba(25, 0, 51, 0.7), rgba(75, 0, 30, 0.7))',
        maxWidth: '450px',
        minWidth: '400px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <div>
          <label
            className="text-shadow block text-[16px] font-bold text-white"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            className="text-shadow block text-[16px] font-bold text-white"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            className="text-shadow block text-[16px] font-bold text-white"
            htmlFor="phone"
          >
            Phone Number:
          </label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: '100%' }}
          />
        </div>
        <div>
          <label
            className="text-shadow block text-[16px] font-bold text-white"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: '100%', resize: 'none' }}
          />
        </div>
        <button
          type="submit"
          style={{
            background: 'linear-gradient(45deg, #ff6e7f, #9966cb)',
            color: 'white',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
