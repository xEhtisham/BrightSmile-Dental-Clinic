import React from 'react';
import { useFadeUp } from '../hooks/useFadeUp';

const services = [
    {
        title: 'General Checkup',
        description: 'Comprehensive dental exams, cleanings, and x-rays to maintain optimal oral health.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        )
    },
    {
        title: 'Teeth Whitening',
        description: 'Professional whitening treatments for a brighter, more confident smile.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
        )
    },
    {
        title: 'Root Canal Treatment',
        description: 'Expert endodontic therapy to save decayed or infected teeth securely.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
        )
    },
    {
        title: 'Dental Implants',
        description: 'Durable and natural-looking tooth replacements to restore your smile.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
        )
    },
    {
        title: 'Orthodontics',
        description: 'Braces and clear aligners to straighten teeth and correct bite issues.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        )
    },
    {
        title: 'Cosmetic Dentistry',
        description: 'Veneers, bonding, and aesthetic treatments designed to enhance your smile.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        )
    }
];

const Services = () => {
    const sectionRef = useFadeUp();

    return (
        <section id="services" className="py-20 bg-surface" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Services</h2>
                    <h3 className="text-3xl md:text-4xl font-bold">Comprehensive Dental Care</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="fade-up bg-card p-8 rounded-xl border border-gray-100 hover:border-primary/20 transition-all duration-300" style={{ transitionDelay: `${index * 80}ms` }}>
                            <div className="w-12 h-12 bg-primary-light text-primary rounded-xl flex items-center justify-center mb-6">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                            <p className="text-text-muted mb-6 leading-relaxed">{service.description}</p>
                            <a href="#contact" className="text-primary font-medium hover:text-primary-hover inline-flex items-center transition-colors">
                                Learn More
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
