function handleStart(){
    alert("N빵페이 서비스를 준비 중입니다!");
}

function scrollFeatures(){
    document.getElementById("features")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function makeInvite(){

    const roomId =
    Math.random().toString(36).substring(2,8);

    const link =
    `https://nbread-pay.com/${roomId}`;

    alert("초대 링크 생성 완료!\n\n" + link);
}