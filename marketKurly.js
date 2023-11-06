// 아이디 입력시 발생
event1 = document.querySelector("#alert");
idInputArea = document.querySelector("#id-input");
idInputArea.addEventListener('click',() => {
    event1.innerHTML = "6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합";
    event1.style.color = 'rgb(240, 63, 64)';
    event1.style.fontSize = '13px';
    event1.style.marginTop = '-4px';
    event1.style.padding = '10px 0px';
});

// 휴대폰 이벤트 발생
phone = document.querySelector("#inputPhone");
event2 = document.querySelector("#phone");
phone.addEventListener('keydown',() => {
    console.log(phone.value);
    if(phone.value.length > 0){
        event2.style.border = '1px solid rgb(95, 0, 128)';
        event2.style.color = 'rgb(95, 0, 128)';
    }else if(phone.value.length <= 0){
        event2.style.border = '1px solid gray';
        event2.style.color = 'gray';
    }
});

// 
man = document.querySelector("#man");
man2 = document.querySelector("#man2");
girl = document.querySelector("#girl");
girl2 = document.querySelector("#girl2");
noselect = document.querySelector("#noselect");
noselect2 = document.querySelector("#noselect2");
// event3 = document.querySelector("");
man.addEventListener("click",() => {
    girl.style.backgroundColor = "white";
    girl2.style.color = "white";
    noselect.style.backgroundColor = "white";
    noselect2.style.color = "white";
    man.style.backgroundColor = "rgb(81, 1, 81)";
    man2.style.color = "rgb(81, 1, 81)";
});
girl.addEventListener("click",() => {
    girl.style.backgroundColor = "rgb(81, 1, 81)";
    girl2.style.color = "rgb(81, 1, 81)";
    noselect.style.backgroundColor = "white";
    noselect2.style.color = "white";
    man.style.backgroundColor = "white";
    man2.style.color = "white";
});
noselect.addEventListener("click",() => {
    girl.style.backgroundColor = "white";
    girl2.style.color = "white";
    noselect.style.backgroundColor = "rgb(81, 1, 81)";
    noselect2.style.color = "rgb(81, 1, 81)";
    man.style.backgroundColor = "white";
    man2.style.color = "white";
});

//
fred = document.querySelector("#fred");
fred2 = document.querySelector("#fred2");
eve = document.querySelector("#eve");
eve2 = document.querySelector("#eve2");
fred.addEventListener("click",() => {
    eve.style.backgroundColor = "white";
    eve2.style.color = "white";
    fred.style.backgroundColor = "rgb(81, 1, 81)";
    fred2.style.color = "rgb(81, 1, 81)";
});
eve.addEventListener("click",() => {
    fred.style.backgroundColor = "white";
    fred2.style.color = "white";
    eve.style.backgroundColor = "rgb(81, 1, 81)";
    eve2.style.color = "rgb(81, 1, 81)";
});

// 이용약간 동의 
allokok = document.querySelector("#allokok");
allokok2 = document.querySelector("#allokok2");
okok = document.querySelector("#okok");
okok2 = document.querySelector("#okok2");
meatok = document.querySelector("#meatok");
meatok2 = document.querySelector("#meatok2");
myatok = document.querySelector("#myatok");
myatok2 = document.querySelector("#myatok2");
coatok = document.querySelector("#coatok");
coatok2 = document.querySelector("#coatok2");
smok = document.querySelector("#smok");
smok2 = document.querySelector("#smok2");
emok = document.querySelector("#emok");
emok2 = document.querySelector("#emok2");
mok = document.querySelector("#mok");
mok2 = document.querySelector("#mok2");

console.log(window.getComputedStyle(allokok).backgroundColor);

allokok.addEventListener("click",() => {
    if(window.getComputedStyle(allokok).backgroundColor == "rgb(255, 255, 255)"){
        allokok.style.backgroundColor = "rgb(81, 1, 81)";
        allokok2.style.color = "rgb(81, 1, 81)";
        okok.style.backgroundColor = "rgb(81, 1, 81)";
        okok2.style.color = "rgb(81, 1, 81)";
        meatok.style.backgroundColor = "rgb(81, 1, 81)";
        meatok2.style.color = "rgb(81, 1, 81)";
        myatok.style.backgroundColor = "rgb(81, 1, 81)";
        myatok2.style.color = "rgb(81, 1, 81)";
        coatok.style.backgroundColor = "rgb(81, 1, 81)";
        coatok2.style.color = "rgb(81, 1, 81)";
        smok.style.backgroundColor = "rgb(81, 1, 81)";
        smok2.style.color = "rgb(81, 1, 81)";
        emok.style.backgroundColor = "rgb(81, 1, 81)";
        emok2.style.color = "rgb(81, 1, 81)";
        mok.style.backgroundColor = "rgb(81, 1, 81)";
        mok2.style.color = "rgb(81, 1, 81)";
    }else {
        allokok.style.backgroundColor = "rgb(255, 255, 255)";
        allokok2.style.color = "rgb(255, 255, 255)";
        okok.style.backgroundColor = "rgb(255, 255, 255)";
        okok2.style.color = "rgb(255, 255, 255)";
        meatok.style.backgroundColor = "rgb(255, 255, 255)";
        meatok2.style.color = "rgb(255, 255, 255)";
        myatok.style.backgroundColor = "rgb(255, 255, 255)";
        myatok2.style.color = "rgb(255, 255, 255)";
        coatok.style.backgroundColor = "rgb(255, 255, 255)";
        coatok2.style.color = "rgb(255, 255, 255)";
        smok.style.backgroundColor = "rgb(255, 255, 255)";
        smok2.style.color = "rgb(255, 255, 255)";
        emok.style.backgroundColor = "rgb(255, 255, 255)";
        emok2.style.color = "rgb(255, 255, 255)";
        mok.style.backgroundColor = "rgb(255, 255, 255)";
        mok2.style.color = "rgb(255, 255, 255)";
    }
    
});
   
okok.addEventListener("click",() => {
    if(window.getComputedStyle(okok).backgroundColor == "rgb(255, 255, 255)"){
        okok.style.backgroundColor = "rgb(81, 1, 81)";
        okok2.style.color = "rgb(81, 1, 81)";
    }else {
        okok.style.backgroundColor = "rgb(255, 255, 255)";
        okok2.style.color = "rgb(255, 255, 255)";
    }
});
meatok.addEventListener("click",() => {
    if(window.getComputedStyle(meatok).backgroundColor == "rgb(255, 255, 255)"){
        meatok.style.backgroundColor = "rgb(81, 1, 81)";
        meatok2.style.color = "rgb(81, 1, 81)";
    }else {
        meatok.style.backgroundColor = "rgb(255, 255, 255)";
        meatok2.style.color = "rgb(255, 255, 255)";
    }
});
myatok.addEventListener("click",() => {
    if(window.getComputedStyle(myatok).backgroundColor == "rgb(255, 255, 255)"){
        myatok.style.backgroundColor = "rgb(81, 1, 81)";
        myatok2.style.color = "rgb(81, 1, 81)";
    }else {
        myatok.style.backgroundColor = "rgb(255, 255, 255)";
        myatok2.style.color = "rgb(255, 255, 255)";
    }
});
coatok.addEventListener("click",() => {
    if(window.getComputedStyle(coatok).backgroundColor == "rgb(255, 255, 255)"){
        coatok.style.backgroundColor = "rgb(81, 1, 81)";
        coatok2.style.color = "rgb(81, 1, 81)";
    }else {
        coatok.style.backgroundColor = "rgb(255, 255, 255)";
        coatok2.style.color = "rgb(255, 255, 255)";
    }
});
smok.addEventListener("click",() => {
    if(window.getComputedStyle(smok).backgroundColor == "rgb(255, 255, 255)"){
        smok.style.backgroundColor = "rgb(81, 1, 81)";
        smok2.style.color = "rgb(81, 1, 81)";
    }else {
        smok.style.backgroundColor = "rgb(255, 255, 255)";
        smok2.style.color = "rgb(255, 255, 255)";
    }
});
emok.addEventListener("click",() => {
    if(window.getComputedStyle(emok).backgroundColor == "rgb(255, 255, 255)"){
        emok.style.backgroundColor = "rgb(81, 1, 81)";
        emok2.style.color = "rgb(81, 1, 81)";
    }else {
        emok.style.backgroundColor = "rgb(255, 255, 255)";
        emok2.style.color = "rgb(255, 255, 255)";
    }
});
mok.addEventListener("click",() => {
    if(window.getComputedStyle(mok).backgroundColor == "rgb(255, 255, 255)"){
        mok.style.backgroundColor = "rgb(81, 1, 81)";
        mok2.style.color = "rgb(81, 1, 81)";
    }else {
        mok.style.backgroundColor = "rgb(255, 255, 255)";
        mok2.style.color = "rgb(255, 255, 255)";
    }
});

const lastbtn = document.querySelector("#lastbtn");
lastbtn.addEventListener("click",() => {
    alert("회원가입이 완료 되었습니다.");
});
// 마켓컬리
mklan = document.querySelector("#mklan");
mklan.addEventListener("click" , () => {
    window.location.href = "https://www.kurly.com/main";
});

bulan = document.querySelector("#bulan");
bulan.addEventListener("click" , () => {
    window.location.href = "https://www.kurly.com/main/beauty";
});
// 신상품
newitem = document.querySelector("#new-item");
newitem.addEventListener("click" , () => {
    window.location.href = "https://www.kurly.com/collections/market-newproduct";
});
// 베스트
best = document.querySelector("#best");
best.addEventListener("click" , () => {
    window.location.href = "https://www.kurly.com/collections/market-best";
});
// 알뜰쇼핑
shopping = document.querySelector("#shopping");
shopping.addEventListener("click" , () => {
    window.location.href = "https://www.kurly.com/collections/market-time-sales";
});

Benefits = document.querySelector("#Benefits");
Benefits.addEventListener("click" , () => {
    window.location.href = "https://www.kurly.com/market-benefit";
});

adreesBtn = document.querySelector("#adreesBtn");
adreesBtn.addEventListener("click" , () => {
    window.open("https://www.kurly.com/address/shipping-address","adrres","width=500,height=500,left=200, top=400");
});

kaka = document.querySelector("#kaka");
kaka.addEventListener("click" , () => {
    window.open("https://accounts.kakao.com/login/?continue=https%3A%2F%2Fpfa.kakao.com%2F_xcSDxjxl%2Fchat#login");
});

bigorder = document.querySelector("#bigorder");
bigorder.addEventListener("click" , () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScWcjRuN6eWJK-G8x3NwBfE8IyKZIOq7jhD3fUXuKSWwPqzJw/viewform");
});

oneone = document.querySelector("#oneone");
oneone.addEventListener("click" , () => {
    if(confirm("로그인 후 이용해주세요.")){
        window.open("https://www.kurly.com/member/login?internalUrl=%2Fmypage%2Finquiry%2Flist");
    }
});

pwd = document.querySelector("#pwd");
checkPwd = document.querySelector("#checkPwd");
pwdCheckInfo = document.querySelector("#pwd-check-Info");
info = document.createTextNode("비밀번호가 일치하지 않습니다.");
info2 = document.createTextNode("최소 10자 이상 입력");
pwdInfo = document.querySelector("#pwd-info")
info3 = document.createTextNode("영문/숫자/특수문자(공백 제외)만 허용하며,2개 이상 조합");

// 비밀번호 확인로직
checkPwd.addEventListener("keyup",() => {
    if(checkPwd.value===pwd.value){
        info.remove();
    }
    if(checkPwd.value.length>=pwd.value.length){
        if(checkPwd.value!==pwd.value){
            pwdCheckInfo.appendChild(info);
            pwdCheckInfo.style.color = 'rgb(240, 63, 64)';
            pwdCheckInfo.style.fontSize = '13px';
            pwdCheckInfo.style.marginTop = '-4px';
            pwdCheckInfo.style.padding = '10px 0px';
        }
    }
});

pwd.addEventListener("keyup",() => {
        if(pwd.value.length < 10){
            info3.remove();
            pwdInfo.appendChild(info2);
            pwdInfo.style.color = 'rgb(240, 63, 64)';
            pwdInfo.style.fontSize = '13px';
            pwdInfo.style.marginTop = '-4px';
            pwdInfo.style.padding = '10px 0px';
        }
        if(pwd.value.length > 10){
            info2.remove();
            pwdInfo.appendChild(info3);
            pwdInfo.style.color = 'rgb(240, 63, 64)';
            pwdInfo.style.fontSize = '13px';
            pwdInfo.style.marginTop = '-4px';
            pwdInfo.style.padding = '10px 0px';
        }
});
