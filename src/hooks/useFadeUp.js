import { useEffect, useRef } from 'react';

export const useFadeUp = () => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );

        const elements = ref.current?.querySelectorAll('.fade-up');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return ref;
};
