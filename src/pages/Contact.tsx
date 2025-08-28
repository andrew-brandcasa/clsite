import React from 'react';
import ContactForm from '../../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      <div className="bg-[#2C5530] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-4">Contact Casa Larga</h1>
          <p className="text-xl md:text-2xl text-gray-200">We're Here to Help</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* General Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">General Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-[#2C5530] mb-3">Address</h3>
              <p className="text-gray-600">
                2287 Turk Hill Road<br />
                Fairport, NY 14450
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Phone className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-[#2C5530] mb-3">Phone</h3>
              <p className="text-gray-600">(585) 223-4210</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Mail className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-semibold text-[#2C5530] mb-3">Email</h3>
              <p className="text-gray-600">info@casalarga.com</p>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-[#2C5530] text-center mb-12">Department Contacts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Wine Shop & Tastings",
                phone: "(585) 223-4210 ext. 2",
                email: "tastings@casalarga.com"
              },
              {
                title: "Private Events",
                phone: "(585) 223-4210 ext. 3",
                email: "events@casalarga.com"
              },
              {
                title: "Wine on Wheels",
                phone: "(585) 223-4210 ext. 4",
                email: "catering@casalarga.com"
              },
              {
                title: "Wholesale & Trade",
                phone: "(585) 223-4210",
                email: "wholesale@casalarga.com"
              },
              {
                title: "Custom Labels",
                phone: "(585) 223-4210",
                email: "custom@casalarga.com"
              }
            ].map((dept, index) => (
              <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-[#2C5530] mb-3">{dept.title}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{dept.phone}</p>
                  <p>{dept.email}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hours and Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#2C5530] text-white p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-[#D4AF37] mr-3" />
              <h3 className="text-2xl font-serif">Hours</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#D4AF37] mb-2">Monday - Thursday</h4>
                <p>11:00 a.m. - 6:00 p.m.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#D4AF37] mb-2">Friday & Saturday</h4>
                <p>10:00 a.m. - 6:00 p.m.</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#D4AF37] mb-2">Sunday</h4>
                <p>12:00 p.m. - 5:00 p.m.</p>
              </div>
            </div>
          </div>

          <ContactForm 
            title="Send Us a Message"
            submitText="Send Message"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;