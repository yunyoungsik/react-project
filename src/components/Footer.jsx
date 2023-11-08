import React from 'react'

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div className="footer__inner">
                <h2 className="footer__text">
                    <div>yunyoungsik</div>
                    <span>@0-SIK</span>
                </h2>
                <div className="footer__info">
                    <div className="left">
                        <div className="title">
                            <a href="mailto:yunyoungsik@kakao.com">MAIL</a>
                        </div>
                        <p className="desc">누르시면 메일을 보내실 수 있습니다.</p>
                    </div>
                    <div className="right">
                        <h3>social</h3>
                        <ul>
                            <li>
                                <a href="https://github.com/yunyoungsik/vite-project">github</a>
                                <em>깃헙에 들어오시면 모든 소스를 볼 수 있습니다.</em>
                            </li>
                            <li>
                                <a href="/">tistory</a>
                                <em>티스토리에 들어오시면 좋은 정보 볼 수 있습니다.</em>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__right">
                    &copy; 2023 0-SIK<br />
                    이 사이트는 비트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    )
}

export default Footer