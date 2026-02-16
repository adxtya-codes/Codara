'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const projects = [
        {
            name: 'GTA Cars',
            image: '/projects/gta-cars-1.png',
            images: ['/projects/gta-cars-1.png', '/projects/gta-cars-2.png'],
            link: 'https://gtacars.ae',
        },
        {
            name: 'EZ-Poster',
            image: '/projects/ez-poster-1.png',
            images: ['/projects/ez-poster-1.png', '/projects/ez-poster-2.png'],
            link: 'https://ezposter.xyz',
        },
        {
            name: 'Fun-Art App',
            image: '/projects/fun-art-1.png',
            images: ['/projects/fun-art-1.png', '/projects/fun-art-2.png'],
            link: 'https://funart.app',
        },
        {
            name: 'Rune Luck Casino',
            image: '/projects/rune-luck-1.png',
            images: null,
            link: 'https://rune-server.org/threads/runeluck-%E2%80%94-1-osrs-gambling-runescape-casino-poker-dice-blackjack.707806/',
        },
        {
            name: 'UCF Crop-Bot',
            image: '/projects/ucf.png',
            images: null,
            link: '#',
        }
    ];

    return (
        <section className="projects-section">
            <div className="projects-container">

                <h6 className="projects-label" style={{ marginBottom: '10px' }}>OUR TOP PROJECTS</h6>
                <h2 className="projects-headline" style={{ marginTop: '0' }}>
                    We are passionate about what we<br />
                    do, and it shows in our work.
                </h2>

                <div className="projects-content">
                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <a
                                key={index}
                                href={project.link}
                                target={project.link === '#' ? '_self' : '_blank'}
                                rel={project.link === '#' ? '' : 'noopener noreferrer'}
                                className={`project-item ${hoveredProject === index ? 'active' : ''}`}
                                onMouseEnter={() => setHoveredProject(index)}
                                onMouseLeave={() => setHoveredProject(null)}
                                style={{ display: 'block', textDecoration: 'none' }}
                            >
                                <h3>{project.name}</h3>
                            </a>
                        ))}
                    </div>

                    <div className="projects-image-container">
                        {hoveredProject !== null && (
                            <div className="project-image-wrapper">
                                {projects[hoveredProject].images ? (
                                    // Multiple images for GTA Cars - split screen effect
                                    <div className="project-dual-images">
                                        <Image
                                            src={projects[hoveredProject].images[0]}
                                            alt={`${projects[hoveredProject].name} - 1`}
                                            width={800}
                                            height={900}
                                            quality={100}
                                            unoptimized={true}
                                            className="project-image project-image-left"
                                        />
                                        <Image
                                            src={projects[hoveredProject].images[1]}
                                            alt={`${projects[hoveredProject].name} - 2`}
                                            width={800}
                                            height={900}
                                            quality={100}
                                            unoptimized={true}
                                            className="project-image project-image-right"
                                        />
                                    </div>
                                ) : (
                                    // Single image for other projects
                                    <Image
                                        src={projects[hoveredProject].image}
                                        alt={projects[hoveredProject].name}
                                        width={500}
                                        height={600}
                                        className="project-image"
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
