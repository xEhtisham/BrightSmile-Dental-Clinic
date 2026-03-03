import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden">
                            <img src="/placeholder-about.png" alt="Clinic Interior" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">About Our Clinic</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-text-main mb-6">Committed to Your Oral Health and Comfort</h3>
                        <p className="text-text-muted mb-6 text-lg">
                            At BrightSmile Dental Clinic, we combine advanced dental technology with a compassionate approach. Our philosophy is rooted in providing preventative care and comprehensive treatments in a relaxing, anxiety-free environment.
                        </p>
                        <p className="text-text-muted mb-8">
                            We uphold the highest standards of hygiene and patient safety, ensuring every visit leaves you with a brighter, healthier smile.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <li className="flex items-center text-text-main font-medium">
                                <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Certified Dentists
                            </li>
                            <li className="flex items-center text-text-main font-medium">
                                <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Modern Equipment
                            </li>
                            <li className="flex items-center text-text-main font-medium">
                                <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Affordable Pricing
                            </li>
                            <li className="flex items-center text-text-main font-medium">
                                <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Emergency Care
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
