import React, { useState } from 'react';

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', service: '', date: '', message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
            setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
            setTimeout(() => setSubmitted(false), 8000);
        }, 1500);
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const inputClass = "w-full px-4 py-3.5 bg-surface rounded-lg border border-gray-200 focus:bg-card focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200 text-text-main";

    return (
        <section id="appointment" className="py-24 bg-primary-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-card rounded-2xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">

                    {/* Left Side */}
                    <div className="lg:w-2/5 bg-primary relative p-10 lg:p-16 flex flex-col justify-center overflow-hidden">
                        <div className="relative z-10">
                            <span className="text-primary-light font-semibold tracking-widest uppercase text-xs mb-4 block">Reserve Your Time</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                A Brighter Smile Awaits.
                            </h2>
                            <p className="text-white/85 mb-10 text-lg leading-relaxed">
                                Booking your visit is the first step towards exceptional dental comfort. Our specialists provide personalized, anxiety-free care tailored to your needs.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-white mr-4 shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">Flexible Scheduling</h4>
                                        <p className="text-sm text-white/70">Early morning & evening slots available</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-white mr-4 shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">Priority Response</h4>
                                        <p className="text-sm text-white/70">We confirm requests within 1–2 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-3/5 p-10 lg:p-14">
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-16">
                                <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center text-primary mb-6">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Appointment Request Received</h3>
                                <p className="text-text-muted max-w-sm mb-4 leading-relaxed">
                                    Your appointment request has been received. Our team will contact you shortly to confirm your booking.
                                </p>
                                <p className="text-sm text-text-muted">
                                    We typically confirm appointments within 1–2 business hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-text-main ml-0.5">Patient Name</label>
                                        <input required type="text" name="name" value={formData.name} onChange={handleChange}
                                            className={inputClass} placeholder="Enter your full name" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-text-main ml-0.5">Email Address</label>
                                        <input required type="email" name="email" value={formData.email} onChange={handleChange}
                                            className={inputClass} placeholder="Enter your email" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-text-main ml-0.5">Phone Number</label>
                                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                                            className={inputClass} placeholder="Enter your phone number" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-text-main ml-0.5">Select Service</label>
                                        <select required name="service" value={formData.service} onChange={handleChange}
                                            className={`${inputClass} appearance-none`}>
                                            <option value="" disabled>Choose a service...</option>
                                            <option value="general">General Consultation</option>
                                            <option value="whitening">Teeth Whitening</option>
                                            <option value="root_canal">Root Canal Therapy</option>
                                            <option value="implants">Dental Implants</option>
                                            <option value="orthodontics">Orthodontics / Braces</option>
                                            <option value="cosmetic">Cosmetic Dentistry</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-text-main ml-0.5">Preferred Date</label>
                                    <input required type="date" name="date" value={formData.date} onChange={handleChange}
                                        className={inputClass} />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-text-main ml-0.5">Additional Notes <span className="text-text-muted font-normal">(Optional)</span></label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} rows="3"
                                        className={inputClass}
                                        placeholder="Any specific symptoms or questions..."></textarea>
                                </div>

                                <button type="submit" disabled={loading}
                                    className={`w-full text-white font-medium text-base py-4 rounded-lg transition-all duration-200 shadow-sm ${loading ? 'bg-primary/70 cursor-not-allowed' : 'bg-primary hover:bg-primary-hover hover:shadow-md'}`}>
                                    {loading ? 'Submitting Request…' : 'Confirm Appointment Request'}
                                </button>

                                <p className="text-center text-xs text-text-muted mt-2">
                                    We typically confirm appointments within 1–2 business hours.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
