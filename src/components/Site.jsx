import React from 'react'
import { siteText } from '../constants'

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <div className="site__title">
                    site coding <em>작업물</em>
                </div>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <div className={`siteitem s${key + 1}`} key={key}>
                            <span className="num">{site.num}</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="btn">
                                <a href={site.view}>view</a>
                                <a href={site.code}>code</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Site