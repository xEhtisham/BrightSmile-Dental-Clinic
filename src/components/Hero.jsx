import React from 'react';
import LazyImage from './LazyImage';

const Hero = () => {
    return (
        <section id="home" className="bg-background pt-32 pb-16 md:pt-40 md:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Text Content */}
                    <div className="md:w-1/2 flex flex-col items-start text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                            Healthy Smiles <br className="hidden md:block" /> Start Here
                        </h1>
                        <p className="text-lg text-text-muted mb-8 max-w-md leading-relaxed">
                            Advanced dental care in a calm, modern environment — designed around your comfort.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
                            <a href="#appointment" className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-medium text-center transition-colors shadow-sm">
                                Book Appointment
                            </a>
                            <a href="tel:+1234567890" className="bg-surface border text-primary border-primary hover:bg-primary-light px-8 py-3.5 rounded-lg font-medium text-center transition-colors">
                                Call Now
                            </a>
                        </div>

                        {/* Micro trust indicators */}
                        <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 mb-10 text-sm text-text-muted">
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Same-day emergency appointments
                            </span>
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Most insurance plans accepted
                            </span>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center gap-10 pt-6 border-t border-gray-200 w-full">
                            <div>
                                <p className="text-2xl font-bold text-primary">10+</p>
                                <span className="text-sm text-text-muted font-medium">Years Experience</span>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-primary">5000+</p>
                                <span className="text-sm text-text-muted font-medium">Happy Patients</span>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="md:w-1/2 w-full">
                        <div className="aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden shadow-lg relative">
                            <LazyImage src="/placeholder-hero.png" alt="Modern dental clinic interior" className="w-full h-full object-cover" width="100%" height="auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
