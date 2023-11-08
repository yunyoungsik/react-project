import React from 'react'
import img00 from '../assets/img/img00.jpg'

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <h1 className="intro__title">
                    frontend developer
                </h1>
                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

                <div className="intro__text">
                    <div className="text">
                        <div>talent is</div>
                        <div>found at the end of the</div>
                        <div>effort</div>
                    </div>
                    <div className="img">
                        <img src={img00} alt="프로필 이미지" />
                    </div>
                </div>

                <div className="intro__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    )
}

export default Intro