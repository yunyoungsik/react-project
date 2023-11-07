# react를 이용한 포트폴리오 사이트 만들기

## 설치
1. 폴더를 만들고 리액트를 설치 `npx create-react-app . or npx create-react-app 프로젝트 이름`
2. git에 업로드
    - git에서 commit후 public으로 업로드

## 트러블 슈팅
<details>
<summary>Whitespace에러</summary>
[Git Bash] warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it  

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