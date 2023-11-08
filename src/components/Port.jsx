import React, { useEffect, useRef } from 'react'
import { portText } from '../constants/index'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Port = () => {
    const horizontalRef = useRef(null)
    const sectionRef = useRef([])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 65",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        });

        return () => {
            scrollTween.kill();
        }
    }, [])

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em>포트폴리오</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (
                        <div className={`port__item p${key + 1}`} key={key} ref={(el) => (sectionRef.current[key] = el)}>
                            <span className="num">{port.num}</span>
                            <a href={port.view} target='blank' rel="noreferrer noopener">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
                                    <g>
                                        <path d="M13.85,11.65c0.2,0.18,0.19,0.52,0,0.7l-3,3c-0.19,0.2-0.5,0.19-0.7,0c-0.2-0.18-0.19-0.52,0-0.7
                        L12.79,12l-2.64-2.65c-0.2-0.19-0.19-0.5,0-0.7c0.18-0.2,0.52-0.19,0.7,0L13.85,11.65z" />
                                        <path d="M12,2.067c5.477,0,9.933,4.456,9.933,9.933S17.477,21.933,12,21.933S2.067,17.477,2.067,12
                        S6.523,2.067,12,2.067z M12,20.933c4.926,0,8.933-4.007,8.933-8.933S16.926,3.067,12,3.067S3.067,7.074,3.067,12
                        S7.074,20.933,12,20.933z" />
                                    </g>
                                </svg>
                                <img src={port.img} alt="포트폴리오" rel="noreferrer noopener" />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">
                                {port.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Port