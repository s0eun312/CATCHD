// main
// =================================================================

// 탑 스크롤 버튼
let topScroll = document.querySelector('.topScroll');
let topScrollBtn = document.querySelector('.topScrollBtn');

// top scroll effect
topScroll.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
// 호버시 이미지 변경
topScroll.addEventListener('mouseover', () => {
    topScrollBtn.src = 'img/main/topScrollHover.png'
});
topScroll.addEventListener('mouseout', () => {
    topScrollBtn.src = 'img/main/topScroll.png'
});

// 페르소나 라인 스크롤 이벤트
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let personaLine = document.querySelector('.persona_line');

    if (scrollY > 3080) {
        personaLine.classList.add('scroll')
    } else {
        personaLine.classList.remove('scroll')
    }

});

// 니즈인사이트베네핏 스크롤 투명도
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let conclusion = document.querySelector('.conclusion');

    if (scrollY > 3080) {
        conclusion.classList.add('add')
    } else {
        conclusion.classList.remove('add')
    }

});

// colors_text Fade-in 키프레임
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let blue = document.querySelector('.blue div');
    let mint = document.querySelector('.mint div');

    if (scrollY > 6272) {
        blue.classList.add('fade_in');
        mint.classList.add('fade_in');
    } else {
        blue.classList.remove('fade_in');
        mint.classList.remove('fade_in');
    }

    // mint
    if (scrollY > 6572) {
        mint.classList.add('fade_in');
    } else {
        mint.classList.remove('fade_in');
    }
});

// Service main 섹션 키프레임
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let h3 = document.querySelector('.serviceMain_text h3')
    let p = document.querySelector('.serviceMain_text p');
    let routineDiv = document.querySelector('.routine_div');
    let todoDiv = document.querySelector('.todo_div');
    let conceptDiv = document.querySelector('.concept_div');

    // h3, p
    if (scrollY > 7272) {
        h3.classList.add('slideInRight');

        // .3초 후에 함수 실행
        setTimeout(() => {
            p.classList.add('fadeIn');
        }, 300); // 1000 밀리언 = 1초
        // p.classList.add('fadeIn');
    } else {
        h3.classList.remove('slideInRight');
        p.classList.remove('fadeIn');
    }

    // routinDiv
    if (scrollY > 7580) {
        routineDiv.classList.add('slideUp');
    } else {
        routineDiv.classList.remove('slideUp');
    }

    // todoDiv
    if (scrollY > 7690) {
        todoDiv.classList.add('slideInRight');
    } else {
        todoDiv.classList.remove('slideInRight');
    }

    // conceptDiv
    if (scrollY > 7712) {
        conceptDiv.classList.add('scaleUp');
    } else {
        conceptDiv.classList.remove('scaleUp');
    }
});

// Self diagnosis 섹션 키프레임
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let h3 = document.querySelector('.diagnosis_text h3');
    let p = document.querySelector('.diagnosis_text p');
    let line = document.querySelector('.d_line');
    let contents = document.querySelector('.dContents_text');

    // h3
    if (scrollY > 8488) {
        h3.classList.add('slideUp');

        // .5초 후에 함수 실행
        setTimeout(() => {
            p.classList.add('fadeIn');
        }, 500); // 1000 밀리언 = 1초
    } else {
        h3.classList.remove('slideUp');
        p.classList.remove('fadeIn');
    }

    // line, contents
    if (scrollY > 8910) {
        // .3초 후에 함수 실행
        setTimeout(() => {
            line.classList.add('slideInLeft');
        }, 300); // 1000 밀리언 = 1초

        contents.classList.add('slideInLeft');
    } else {
        line.classList.remove('slideInLeft');
        contents.classList.remove('slideInLeft');
    }
});

// Routine 섹션 키프레임
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let h3 = document.querySelector('.routine_text h3');
    let p = document.querySelector('.routine_text p');
    let check = document.querySelector('.check');
    let checklist = document.querySelector('.checklist');
    let slider = document.querySelector('.slider');

    // h3, p
    if (scrollY > 9510) {
        h3.classList.add('slideUp');

        // .5초 후에 함수 실행
        setTimeout(() => {
            p.classList.add('fadeIn');
        }, 500); // 1000 밀리언 = 1초
    } else {
        h3.classList.remove('slideUp');
        checklist.classList.remove('fadeIn');
    }

    // check
    if (scrollY > 11090) {
        check.classList.add('slideInRight');
    } else {
        check.classList.remove('slideInRight');
    }

    // checklist
    if (scrollY > 11490) {
        checklist.classList.add('slideInRight');
    } else {
        checklist.classList.remove('slideInRight');
    }

    // slider
    if (scrollY > 10645) {
        slider.classList.add('slideInRight');
    } else {
        slider.classList.remove('slideInRight');
    }
});

// Medical 섹션 키프레임
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let h3 = document.querySelector('.medical_text h3');
    let p = document.querySelector('.medical_text p');
    let hospital = document.querySelector('.hospital_text');
    let doctor = document.querySelector('.doctor_text');

    // h3, p
    if (scrollY > 12000) {
        h3.classList.add('slideUp');

        // .5초 후에 함수 실행
        setTimeout(() => {
            p.classList.add('fadeIn');
        }, 500); // 1000 밀리언 = 1초
    } else {
        h3.classList.remove('slideUp');
        p.classList.remove('fadeIn');
    }

    // hospital
    if (scrollY > 12559) {
        hospital.classList.add('slideInLeft');
    } else {
        hospital.classList.remove('slideInLeft');
    }

    // doctor
    if (scrollY > 13410) {
        doctor.classList.add('slideInRight');
    } else {
        doctor.classList.remove('slideInRight');
    }
});

// Other 섹션 키프레임
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let community = document.querySelector('.community_text');
    let coupon = document.querySelector('.coupon_text');

    // community
    if (scrollY > 14560) {
        community.classList.add('slideInRight');
    } else {
        community.classList.remove('slideInRight');
    }

    // coupon
    if (scrollY > 15110) {
        coupon.classList.add('slideInLeft');
    } else {
        coupon.classList.remove('slideInLeft');
    }
});

//Download 페이지 이동
let download = document.querySelector('.download_button');

download.addEventListener('click', () => {
    window.location.href = "download.html";
});
