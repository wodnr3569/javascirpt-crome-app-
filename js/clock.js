const clock = document.querySelector("#clock");

function getClock (){
    //date 안에 들어있는 코드를 clock의 innerText에 넣는 함수
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hour}:${minutes}:${second}`);
}

getClock();  //웹사이트가 로딩되자마자 시간이 뜨도록
setInterval(getClock, 1000);  //getClock함수를 1초마다 한번씩 호출 
 