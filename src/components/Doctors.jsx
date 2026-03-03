import React from 'react';
import { useFadeUp } from '../hooks/useFadeUp';

const doctors = [
    {
        name: 'Dr. Sarah Jenkins',
        specialization: 'Chief Dental Surgeon',
        bio: 'Over 15 years of experience in complex dental surgeries and full mouth rehabilitation.',
        experience: '15+ Years',
        image: '/placeholder-doc-1.png'
    },
    {
        name: 'Dr. Michael Chen',
        specialization: 'Orthodontist',
        bio: 'Specializes in clear aligners and traditional braces for patients of all ages.',
        experience: '10 Years',
        image: '/placeholder-doc-2.png'
    },
    {
        name: 'Dr. Emily Carter',
        specialization: 'Cosmetic Dentist',
        bio: 'Passionate about creating beautiful, natural-looking smiles through aesthetic dentistry.',
        experience: '8 Years',
        image: '/placeholder-doc-3.png'
    }
];

const Doctors = () => {
    const sectionRef = useFadeUp();

    return (
        <section id="doctors" className="py-20 bg-background" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
                    <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Dental Specialists</h2>
                    <h3 className="text-3xl md:text-4xl font-bold">Meet Our Expert Team</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {doctors.map((doc, index) => (
                        <div key={index} className="fade-up bg-card rounded-xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-300 group" style={{ transitionDelay: `${index * 100}ms` }}>
                            <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold mb-1">{doc.name}</h4>
                                <p className="text-primary font-medium mb-4">{doc.specialization}</p>
                                <p className="text-text-muted text-sm mb-4 leading-relaxed line-clamp-3">{doc.bio}</p>
                                <div className="flex items-center pt-4 border-t border-gray-100">
                                    <svg className="w-5 h-5 text-text-muted mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span className="text-sm font-medium">{doc.experience} Experience</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
