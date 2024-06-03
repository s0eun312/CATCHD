// header
// =================================================================


// 헤더 스크롤 이벤트
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let header = document.querySelector('header');
    let ul = document.querySelector('#header_nav ul');
    let nav = document.querySelectorAll('.nav_button');
    let videoNav = document.getElementById('video_nav');
    let logo = document.querySelector('.header_logo');
    // 스크롤 위치 확인
    console.log(scrollY);

    if (scrollY > 100) {
        header.classList.add('scroll1');
        ul.classList.add('scroll');
        videoNav.classList.add('scroll');
        if (scrollY > 700) {
            header.classList.remove('scroll1');
            header.classList.add('scroll2');
            nav.forEach(button => {
                button.classList.add('scroll');
                button.classList.add('colorChange');
            });
            // 로고 이미지 변경
            logo.src = 'img/header/logo_scroll.png';
        } else {
            header.classList.remove('scroll2');
            nav.forEach(button => {
                button.classList.remove('scroll');
                button.classList.remove('colorChange');
            });
            // 원래 로고 이미지로 변경
            logo.src = 'img/header/header_logo.png';
        }
    } else {
        header.classList.remove('scroll1');
        ul.classList.remove('scroll');
        videoNav.classList.remove('scroll');
        // 원래 로고 이미지로 변경
        logo.src = 'img/header/header_logo.png';
    }

})

// nav 버튼&각 섹션 배열 정리
const nav = document.querySelectorAll('#header_nav .nav_button');
const sections = document.querySelectorAll('.nav_section');
const header = document.querySelector('header');

// 각 버튼 클릭 시, 각 섹션 이동
nav.forEach((button, index) => {
    button.addEventListener('click', () => {
        // sections[index].scrollIntoView({ behavior: 'smooth' });

        // 현재 헤더 높이 계산
        let headerHeight = header.offsetHeight;

        // 각 섹션의 위치로 스크롤할 때 헤더 높이만큼 조정
        window.scrollTo({
            top: sections[index].offsetTop - headerHeight,
            behavior: 'smooth'
        });
    });
});