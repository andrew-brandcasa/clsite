import React, { useState } from 'react';

interface ContactFormProps {
  title?: string;
  submitText?: string;
  fields?: string[];
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  title = "Contact Form",
  submitText = "Send Message",
  fields = ['name', 'email', 'phone', 'subject', 'message']
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-2xl font-serif text-[#2C5530] mb-6">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {fields.includes('name') && (
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530] focus:border-transparent"
            />
          </div>
        )}

        {fields.includes('email') && (
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530] focus:border-transparent"
            />
          </div>
        )}

        {fields.includes('phone') && (
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530] focus:border-transparent"
            />
          </div>
        )}

        {fields.includes('subject') && (
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530] focus:border-transparent"
            />
          </div>
        )}

        {fields.includes('message') && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C5530] focus:border-transparent"
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#D4AF37] text-white py-3 px-6 rounded-md hover:bg-[#c29c2a] transition-colors font-medium"
        >
          {submitText}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;