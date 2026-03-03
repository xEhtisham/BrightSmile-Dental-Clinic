import React from 'react';
import { useFadeUp } from '../hooks/useFadeUp';

const testimonials = [
    {
        name: 'James Wilson',
        review: 'The staff here is incredibly professional. They made me feel at ease during my root canal procedure. Highly recommended!',
        rating: 5
    },
    {
        name: 'Olivia Martinez',
        review: 'I got my teeth whitened here and the results are amazing. The clinic is spotless and modern. A wonderful experience overall.',
        rating: 5
    },
    {
        name: 'Robert Davis',
        review: 'Dr. Chen is fantastic. He explained my orthodontic options clearly and helped me choose the best path forward. Very trustworthy.',
        rating: 5
    }
];

const Star = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

const Testimonials = () => {
    const sectionRef = useFadeUp();

    return (
        <section id="testimonials" className="py-20 bg-surface" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">What Our Patients Say</h2>
                    <h3 className="text-3xl md:text-4xl font-bold">Real Stories from Real Patients</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="fade-up bg-card p-8 rounded-xl border border-gray-100" style={{ transitionDelay: `${idx * 100}ms` }}>
                            <div className="flex space-x-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} />)}
                            </div>
                            <p className="text-text-muted italic mb-6 leading-relaxed">"{testimonial.review}"</p>
                            <div className="font-semibold">— {testimonial.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
