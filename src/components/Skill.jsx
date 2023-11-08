import React from 'react'

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    challenge <em>도전</em>
                </h2>
                <div className="skill__desc">
                    <div>
                        <span>1.</span>
                        <h3>접근성을 높이는 웹 디자인에 도전합니다.</h3>
                        <p>
                            웹 접근성은 모든 사용자들이 웹사이트를 사용할 수 있도록 하는 중요한 요소입니다.
                            나는 웹사이트를 개발함에 있어 접근성을 고려하여 UI/UX를 디자인하고,
                            ARIA 라벨링 및 스킵 네비게이션을 구현하여 누구나 편리하게 이용할 수 있도록 노력합니다.
                        </p>
                    </div>
                    <div>
                        <span>2.</span>
                        <h3>성능 최적화를 위한 코드 최적화에 도전합니다.</h3>
                        <p>
                            빠른 웹사이트로의 접근은 사용자 경험을 향상시키는 중요한 요소입니다.
                            나는 이미지 최적화, 코드 번들링 등의 기술을 사용하여 웹사이트의 로딩 속도를 최적화하고,
                            사용자들에게 빠르고 효율적인 서비스를 제공합니다.
                        </p>
                    </div>
                    <div>
                        <span>3.</span>
                        <h3>다양한 브라우저와 기기에서 호환성을 확보합니다.</h3>
                        <p>
                            웹사이트가 모든 브라우저와 기기에서 정상적으로 동작하는 것은 중요합니다.
                            나는 크로스 브라우징 및 레스폰시브 디자인 원칙을 준수하여,
                            Chrome, Firefox, Safari, Edge와 같은 다양한 브라우저에서도 원활한 작동을 보장하며, 모바일 기기에서도 최적화된 경험을 제공합니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill