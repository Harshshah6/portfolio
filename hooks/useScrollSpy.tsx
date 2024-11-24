'use client'
import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds:string[]) => {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const sections = sectionIds.map(id => document.getElementById(id));

        // IntersectionObserver setup
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, {
            threshold: 0.5, // Section needs to be at least 20% visible
        });

        sections.forEach((section) => {
            if(section!=null)observer.observe(section);
        });

        // Cleanup observer on unmount
        return () => {
            observer.disconnect();
        };
    }, [sectionIds]);

    return activeLink;
};

export default useScrollSpy;
