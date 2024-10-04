const images = [ "0.jpg", "1.jpg", "2.jpg" ];

const chosenImage = images[Math.floor(Math.random()*images.length)] //이미지들이 담긴 images에서 하나 선택

const bgImage = document.createElement("img"); //자바스크립트 내에서 img태그 생성

bgImage.src = `img/${chosenImage}`; //img태그 안에 이미지 주소 추가

document.body.appendChild(bgImage); //div안에 img태그 추가