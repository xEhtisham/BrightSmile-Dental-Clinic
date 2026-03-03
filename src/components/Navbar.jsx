import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e, id) => {
        e.preventDefault();
        setIsOpen(false);
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const navLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Doctors', href: '#doctors' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[rgba(243,240,233,0.97)] backdrop-blur-md shadow-md border-gray-200/60' : 'bg-[rgba(243,240,233,0.95)] backdrop-blur-md shadow-sm border-gray-200/30'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-2xl font-bold text-primary">
                            BrightSmile <span className="text-text-main font-semibold">Dental Clinic</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                                className="nav-link text-text-muted hover:text-primary transition-colors font-medium py-1">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center">
                        <a href="#appointment" onClick={(e) => handleNavClick(e, '#appointment')}
                            className="bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary-hover transition-colors shadow-sm">
                            Book Appointment
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} type="button" className="text-text-main hover:text-primary focus:outline-none p-2 rounded-lg hover:bg-gray-100/50 transition-colors">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden bg-[rgba(243,240,233,0.97)] backdrop-blur-md shadow-lg border-t border-gray-200/50 absolute w-full left-0">
                    <nav className="flex flex-col px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)}
                                className="block px-4 py-3 text-base font-medium text-text-main hover:text-primary hover:bg-primary-light/40 rounded-lg transition-colors">
                                {link.label}
                            </a>
                        ))}
                        <a href="#appointment" onClick={(e) => handleNavClick(e, '#appointment')}
                            className="block px-4 py-3 mt-3 text-base font-medium text-center text-white bg-primary rounded-lg shadow-sm">
                            Book Appointment
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
