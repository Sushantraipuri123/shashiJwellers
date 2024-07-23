import React from 'react';
import "./Contact.css";
import { TelephoneFill } from 'react-bootstrap-icons'; 
import { EnvelopeOpenFill } from 'react-bootstrap-icons';
import { GeoAltFill  } from 'react-bootstrap-icons';
import { useForm } from "react-hook-form"

function Contact() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Query sent...!");
    reset(); // Clear the form data
  };

  return (
    <div className="container-fluid">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13504.960975713926!2d76.32074568715818!3d32.197756500000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b51a006e9cfd5%3A0xadd7177679f557a1!2sShashi%20jewellers!5e0!3m2!1sen!2sin!4v1721453812355!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      {/* =========contact form ===== */}

      <div className="container mt-4 pt-lg-3 mb-4">
        <div className="row">
        <div className="col-lg-6 col-md-6  bg-light rounded">
  <h2 className='text-center mb-4 popins'>Get In Touch</h2>
  <div className="touch-content d-flex justify-content-evenly mt-3 flex-wrap align-items-center   ">
    <div className="d-flex align-items-center  ">
      <TelephoneFill className="me-2" /> 
      <span>+91 98166 22883</span>
    </div>
    <div className="d-flex align-items-center">
      <EnvelopeOpenFill className="me-2" />
      <span className='montserrat'>shashijwellers@gmail.com</span>
    </div>
  </div>
  <div className="text-center mt-5  ">
  <GeoAltFill className="me-2" />
  <span className='montserrat'>Near Santoshi Mata Mandir, Dari, Dharamshala,<br/>
  Gabli Dar, Himachal Pradesh 176057</span>
  </div>
</div>
          <div className="col-lg-6 col-md-6 ">
          <h2 className='text-center mb-4 popins'>Contact us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="name" className="form-label montserrat">Name</label>
          <input
            id="name"
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label montserrat">Email</label>
          <input
            id="email"
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="contactNo" className="form-label montserrat">Contact No</label>
          <input
            id="contactNo"
            type="text"
            className={`form-control ${errors.contactNo ? 'is-invalid' : ''}`}
            {...register("contactNo", { required: "Contact No is required" })}
          />
          {errors.contactNo && <div className="invalid-feedback">{errors.contactNo.message}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label montserrat">Message</label>
          <textarea
            id="message"
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            rows="4"
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary montserrat">Submit</button>
      </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
