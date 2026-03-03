import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Get In Touch</h2>
                    <h3 className="text-3xl md:text-4xl font-bold">Visit Our Clinic</h3>
                </div>

                <div className="bg-card rounded-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
                    {/* Contact Information */}
                    <div className="p-8 md:p-12 lg:w-1/3">
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center text-primary">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-base font-semibold mb-1">Clinic Address</h4>
                                    <p className="text-text-muted text-sm leading-relaxed">123 Health Avenue, Suite 400<br />Medical District, NY 10001</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center text-primary">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-base font-semibold mb-1">Phone</h4>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        <a href="tel:+15551234567" className="hover:text-primary transition-colors">+1 (555) 123-4567</a><br />
                                        <a href="tel:+15559876543" className="hover:text-primary transition-colors">+1 (555) 987-6543</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center text-primary">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-base font-semibold mb-1">Email</h4>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        <a href="mailto:info@brightsmile.com" className="hover:text-primary transition-colors">info@brightsmile.com</a><br />
                                        <a href="mailto:appointments@brightsmile.com" className="hover:text-primary transition-colors">appointments@brightsmile.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center text-primary">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-base font-semibold mb-1">Opening Hours</h4>
                                    <p className="text-text-muted text-sm leading-relaxed">Mon – Fri: 8:00 AM – 6:00 PM<br />Sat: 9:00 AM – 2:00 PM<br />Sun: Closed</p>
                                </div>
                            </div>

                            {/* Get Directions Button */}
                            <a href="https://www.google.com/maps/dir/?api=1&destination=40.748440,-73.987820" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-primary-hover transition-colors shadow-sm mt-2">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Get Directions
                            </a>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="lg:w-2/3 min-h-[400px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540552723!2d-73.98782008459418!3d40.74844007932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620835431633!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Clinic Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
