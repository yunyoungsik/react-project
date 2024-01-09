# react를 이용한 포트폴리오 사이트 만들기
리액트(React)는 페이스북에서 개발한 JavaScript 라이브러리로, 사용자 인터페이스를 만들기 위한 도구입니다. 리액트는 단일 페이지 애플리케이션(SPAs)부터 대규모 웹 애플리케이션까지 다양한 프로젝트에서 사용됩니다. 아래에 리액트의 주요 특징과 개념을 설명하겠습니다:
   
1. 컴포넌트 기반 아키텍처: 리액트는 UI를 구성하는 작은 단위를 컴포넌트로 나누어 개발합니다. 각 컴포넌트는 특정 기능이나 UI 요소를 담당하며, 독립적으로 개발 및 관리됩니다.

2. 가상 DOM(Virtual DOM): 리액트는 가상 DOM을 사용하여 렌더링을 최적화합니다. 실제 DOM 요소를 직접 조작하지 않고, 가상 DOM을 통해 효율적으로 UI를 업데이트할 수 있습니다.
   
3. 단방향 데이터 흐름: 리액트는 데이터의 흐름을 단방향으로 유지합니다. 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달하면서 데이터의 흐름을 추적하기 쉽습니다.
   
4. JSX(JavaScript XML): 리액트에서는 JSX라는 문법을 사용하여 JavaScript 코드 내에서 XML 형식의 요소를 작성할 수 있습니다. 이를 통해 UI를 선언적으로 표현할 수 있습니다.
   
5. 컴포넌트 라이프사이클: 리액트 컴포넌트는 여러 단계의 라이프사이클을 가지고 있습니다. 이를 활용하여 컴포넌트가 생성, 업데이트, 제거될 때 필요한 작업을 수행할 수 있습니다.
   
6. 상태(State)와 속성(Props): 리액트 컴포넌트는 상태와 속성을 관리합니다. 상태는 컴포넌트 내에서 관리되는 데이터이며, 속성은 부모 컴포넌트에서 전달되는 값입니다.
   
7. 커뮤니티 및 생태계: 리액트는 매우 활발한 커뮤니티와 풍부한 생태계를 가지고 있어, 다양한 라이브러리와 도구를 활용하여 개발할 수 있습니다.
   
리액트는 선언적이고 유연한 UI 개발을 가능케 하며, 가상 DOM을 통한 효율적인 렌더링 방식을 통해 빠른 성능을 제공합니다. 이러한 특징들은 리액트를 현대적인 웹 애플리케이션 개발에 널리 사용되는 이유 중 하나입니다.

## 설치
1. react 설치 `npx create-react-app . or npx create-react-app 프로젝트 이름`
2. gsap 설치 `npm i gsap`
3. sass 설치 `npm i sass`
4. lenis 설치 `npm i @studio-freight/lenis`
5. react-router-dom 설치 `npm i react-router-dom`

## 작업순서
1. 리액트 설치
2. git에 업로드
3. gsap, sass, lenis 설치,
4. 기존에 작업해둔 html과 css파일을 components폴더와 sass폴더에 구분지어서 저장함
5. utils폴더에는 스크립트 파일 links.js와 smooth.js를 옮겨온 후 App.js에서 import시켜서 사용함
6. gsap의 경우 에러가 발상해여 Port.jsx에서 작업하고 menu의 경우 Header에서 useState를 사용하여 작업함
7. 데이터의 경우 constants폴더에 index.js를 생성하여 배열로 저장후 필요한 부분에 import시켜서 map으로 뿌려줌
8. 완성 후 `npm run build`를 사용하여 번들링을 함

## 트러블 슈팅
<details>
<summary>Whitespace에러</summary>
[Git Bash] warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it   
<br/>
[원인]   
보통 맥 / 리눅스를 쓰는 개발자와 윈도우 쓰는 개발자가 Git으로 협업할 때 발생하는 Whitespace 에러라고 한다.   
   
유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면,
윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로 이루어지는데
Git이 이 둘 중 어느 쪽을 선택할지 혼란이 온 것이다.   
   
[해결방법]   
Git의 core.autocrlf 라는 기능을 켜서 이를 자동 변환 해주도록 하면 된다.   
   
`git config --global core.autocrlf true` // 시스템 전체에 적용   
`git config core.autocrlf true` // 해당 프로젝트에만 적용   
   
이렇게 하게되면 개발자가 git에 코드를 추가했을 때는 CRLF를 LF로 변환해주고,
git의 코드를 개발자가 조회할 때는 LF를 CRLF로 변환해준다고 한다.   
   
혹은, 이런 변환기능을 사용하지 않고 에러 메세지를 끄고 작업하고 싶다면   
`git config --global core.safecrlf false`   
이렇게 하여 해당 경고 메세지 기능을 꺼주면 된다.   
</details>
   
<details>
<summary>gsap 에러</summary>
<br/>
[원인]   
APP.js에 port.js를 gsap를 import시켜서 작동할 경우 치수를 인식 못하여 발생하는 문제 
   
[해결방법]   
Port.jsx에서 useEffect와 useRef를 사용하고 gsap와 ScrollTrigger를 import시키고 #port에 `ref={horizontalRef} = useRef(null)`을 사용하고 port__item에 `ref={(el) => (sectionRef.current[key] = el)`을 사용해서 해결함
</details>
