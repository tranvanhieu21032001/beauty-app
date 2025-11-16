import React, { useEffect } from 'react';
import imgSrc from '../../assets/images/IMG_0699.webp';
import eyebrow1 from '../../assets/images/eyebrow1.webp';
import eyebrow2 from '../../assets/images/eyebrow2.webp';
import eyebrow3 from '../../assets/images/eyebrow3.webp';
import eyebrow4 from '../../assets/images/eyebrow4.webp';
import eyebrow5 from '../../assets/images/eyebrow5.webp';
import eyebrow6 from '../../assets/images/eyebrow6.webp';
import eyebrow7 from '../../assets/images/eyebrow7.webp';
import eyebrow8 from '../../assets/images/eyebrow8.webp';
import eyebrow9 from '../../assets/images/eyebrow9.webp';
import eyebrow10 from '../../assets/images/eyebrow10.webp';
import eyebrow11 from '../../assets/images/eyebrow11.webp';
import eyebrow12 from '../../assets/images/eyebrow12.webp';
import eyebrow13 from '../../assets/images/eyebrow13.webp';
import eyebrow14 from '../../assets/images/eyebrow14.webp';
import eyebrow15 from '../../assets/images/eyebrow15.webp';
import eyebrow16 from '../../assets/images/eyebrow16.webp';
import eyebrow17 from '../../assets/images/eyebrow17.webp';
import eyebrow18 from '../../assets/images/eyebrow18.webp';
import eyebrow19 from '../../assets/images/eyebrow19.webp';
import lip1 from '../../assets/images/lip1.webp';
import lip2 from '../../assets/images/lip2.webp';
import lip3 from '../../assets/images/lip3.webp';
import lip4 from '../../assets/images/lip4.webp';
import lip5 from '../../assets/images/lip5.webp';
import lip6 from '../../assets/images/lip6.webp';
import lip7 from '../../assets/images/lip7.webp';
import lip8 from '../../assets/images/lip8.webp';
import lip9 from '../../assets/images/lip9.webp';
import lip10 from '../../assets/images/lip10.webp';
import lip11 from '../../assets/images/lip11.webp';
import lip12 from '../../assets/images/lip12.webp';
import lip13 from '../../assets/images/lip13.webp';
import lip14 from '../../assets/images/lip14.webp';
import lip15 from '../../assets/images/lip15.webp';
import lip16 from '../../assets/images/lip16.webp';
import lip17 from '../../assets/images/lip17.webp';
import lip18 from '../../assets/images/lip18.webp';
import lip19 from '../../assets/images/lip19.webp';
import lip20 from '../../assets/images/lip20.webp';
import lip21 from '../../assets/images/lip21.webp';
import lip22 from '../../assets/images/lip22.webp';
import lip23 from '../../assets/images/lip23.webp';

import lash1 from '../../assets/images/lash1.webp';
import lash2 from '../../assets/images/lash2.webp';
import lash3 from '../../assets/images/lash3.webp';
import lash4 from '../../assets/images/lash4.webp';

import scar1 from '../../assets/images/scar1.webp';
import scar2 from '../../assets/images/scar2.webp';

import skin1 from '../../assets/images/skin1.webp';
import skin2 from '../../assets/images/skin2.webp';
import skin3 from '../../assets/images/skin3.webp';
import skin4 from '../../assets/images/skin4.webp';
import skin5 from '../../assets/images/skin5.webp';
import skin6 from '../../assets/images/skin6.webp';
import skin7 from '../../assets/images/skin7.webp';
import skin8 from '../../assets/images/skin8.webp';
import skin9 from '../../assets/images/skin9.webp';
import skin10 from '../../assets/images/skin10.webp';
import skin11 from '../../assets/images/skin11.webp';
import skin12 from '../../assets/images/skin12.webp';
import skin13 from '../../assets/images/skin13.webp';
import FadeInScale from '../../components/animations/FadeInScale.js';
import { useLocation } from 'react-router-dom';

const data = [
    {
        section: "Eyebrow Treatments",
        id: "eyebrow-treatments",
        items: [
            {
                title: "Ombre Brows & Full Lip",
                url: eyebrow1,
            },
            {
                title: "Ombre Brows",
                url: eyebrow2,
            },
            {
                title: "Ombre Brows",
                url: eyebrow3,
            },
            {
                title: "Ombre Brows",
                url: eyebrow4,
            },
            {
                title: "Ombre Brows",
                url: eyebrow5,
            },
            {
                title: "Brows",
                url: eyebrow6,
            },
            { title: "Ombre Brows", url: eyebrow7 },
            { title: "Ombre Brows", url: eyebrow8 },
            { title: "Ombre Brows", url: eyebrow9 },
            { title: "Ombre/Powder Brows", url: eyebrow10 },
            { title: "Powder Brows", url: eyebrow11 },
            { title: "Microblading", url: eyebrow12 },
            { title: "HD Brows", url: eyebrow13 },
            { title: "Ombre Brows", url: eyebrow14 },
            { title: "Ombre Brows", url: eyebrow15 },
            { title: "HD Brows", url: eyebrow16 },
            { title: "Ombre Brows", url: eyebrow17 },
            { title: "Ombre/Powder Brows", url: eyebrow18 },
            { title: "Brow Micropigmentation", url: eyebrow19 },
        ]
    },
    {
        section: "Lip Treatments",
        id: "lip-treatments",
        items: [
            { title: "Aquarelle Lips", url: lip1 },
            { title: "Aquarelle Lips", url: lip2 },
            { title: "Full Lip", url: lip3 },
            { title: "Full Lip & Ombre Brows", url: lip4 },
            { title: "Full Lip", url: lip5 },
            { title: "Full Lip", url: lip6 },
            { title: "Aquarelle Lip", url: lip7 },
            { title: "Aquarelle Lip", url: lip8 },
            { title: "Aquarelle Lip", url: lip9 },
            { title: "Lip Neutralisation", url: lip10 },
            { title: "Full Lip", url: lip11 },
            { title: "Aquarelle Lips", url: lip12 },
            { title: "Lip Neutralisation", url: lip13 },
            { title: "Aquarelle Lips", url: lip14 },
            { title: "Aquarelle Lips", url: lip15 },
            { title: "Aquarelle Lips", url: lip16 },
            { title: "Full Lip", url: lip17 },
            { title: "Aquarelle Lips", url: lip18 },
            { title: "Full Lips", url: lip19 },
            { title: "Full Lips", url: lip20 },
            { title: "Aquarelle Lips", url: lip21 },
            { title: "Aquarelle Lips", url: lip22 },
            { title: "Aquarelle Lips", url: lip23 },
        ]
    },
    {
        section: "Beauty Treatments",
        id: "beauty-treatments",
        items: [
            { title: "Lash Lift", url: lash1 },
            { title: "Lash Lift", url: lash2 },
            { title: "Lash Lift", url: lash3 },
            { title: "Lash Lift & Brow Lamination", url: lash4 },
        ]
    },
    {
        section: "Paramedic Treatments",
        id: "paramedic-treatments",
        items: [
            { title: "Scar Camouflage", url: scar1 },
            { title: "Scar Camouflage", url: scar2 },
        ]
    },
    {
        section: "Skin Treatments",
        id: "skin-treatments",
        items: [
            { title: "Month after 1 Microneedling (SkinPen) session", url: skin1 },
            { title: "Month after 3rd Microneedling (SkinPen) session", url: skin2 },
            { title: "Skin boosters and microneedling treatments", url: skin3 },
            { title: "Month after 1 Microneedling (SkinPen) session", url: skin4 },
            { title: "1 Session Microneedling (SkinPen)", url: skin5 },
            { title: "Month after 1 Microneedling (SkinPen) session", url: skin6 },
            { title: "3 Sessions Microneedling (SkinPen)", url: skin7 },
            { title: "1 Session of Microneedling with Skin Pen", url: skin8 },
            { title: "Eczema before & after 28 day course of Skin Ultimate", url: skin9 },
            { title: "1 Session of Microneedling (SkinPen)", url: skin10 },
            { title: "1 Session of Microneedling (SkinPen)", url: skin11 },
            { title: "1 Session of Microneedling (SkinPen)", url: skin12 },
            { title: "L3 Sessions of Microneedling (SkinPen)", url: skin13 },
        ]
    },
];

const Portfolio = () => {
     const { hash } = useLocation();
    
        useEffect(() => {
            if (hash) {
                const id = hash.substring(1);
                const timeoutId = setTimeout(() => {
                    const element = document.getElementById(id);
    
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
    
                return () => clearTimeout(timeoutId);
    
            }
        }, [hash]);
    return (
        <div className='bg-secondary text-main'>
            <div className="p-8 max-w-7xl mx-auto">
                {data.map((section, idx) => (
                    <div key={idx} className="mb-12" id={section.id}>
                        <FadeInScale className="text-3xl lg:text-5xl font-semibold italic mb-6">{section.section}</FadeInScale>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.items.map((item, i) => {
                                const calculatedDelay = 0.1 * (i + 1);
                                const finalDelay = Math.min(calculatedDelay, 0.3);
                                return (
                                    <FadeInScale
                                        key={i}
                                        className="space-y-2"
                                        delay={finalDelay}
                                    >
                                        <div className="flex space-x-2 h-[240px] lg:h-[300px]">
                                            <img src={item.url} alt="url" className="w-full h-full object-cover rounded" />
                                        </div>
                                        <p className="text-center font-semibold">{item.title}</p>
                                    </FadeInScale>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Portfolio;
