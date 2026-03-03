import React from 'react';
import { useFadeUp } from '../hooks/useFadeUp';

const features = [
    {
        title: 'Patient-Centered Care',
        description: 'Personalized treatment plans focused on comfort and long-term oral health.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
        )
    },
    {
        title: 'Advanced Technology',
        description: 'Modern equipment ensuring precise diagnosis and effective treatments.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        )
    },
    {
        title: 'Transparent Pricing',
        description: 'Clear treatment plans with no hidden costs — know what to expect upfront.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
        )
    }
];

const WhyChooseUs = () => {
    const sectionRef = useFadeUp();

    return (
        <section className="py-20 bg-background" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Why Choose Us</h2>
                    <h3 className="text-3xl md:text-4xl font-bold">What Sets Us Apart</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="fade-up bg-card p-10 rounded-xl border border-gray-100 text-center hover:border-primary/20 transition-colors" style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="w-14 h-14 bg-primary-light text-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                                {feature.icon}
                            </div>
                            <h4 className="text-lg font-bold mb-3">{feature.title}</h4>
                            <p className="text-text-muted leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
