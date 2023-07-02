console.log('Script is working fine');

let rst = document.getElementsByClassName('reset_btn')
let stt = document.getElementsByClassName('start_btn')
let stp = document.getElementsByClassName('stop_btn')

console.log('rst', rst);
console.log('stt', stt);
console.log('stp', stp);

let timeRef

// toggle display 
function start() {
    rst[0].style.display = 'block'
    stp[0].style.display = 'block'
    stt[0].style.display = 'none'

    function increment(no_str) {
        let no = parseInt(no_str);
        no = no + 1;
        return `${no}`
    }

    let hoursT = document.querySelector('.hours .tens').textContent
    let hoursO = document.querySelector('.hours .ones').textContent
    let minutesT = document.querySelector('.minutes .tens').textContent
    let minutesO = document.querySelector('.minutes .ones').textContent
    let secondsT = document.querySelector('.seconds .tens').textContent
    let secondsO = document.querySelector('.seconds .ones').textContent

    hoursT = parseInt(hoursT)
    hoursO = parseInt(hoursO)
    minutesT = parseInt(minutesT)
    minutesO = parseInt(minutesO)
    secondsT = parseInt(secondsT)
    secondsO = parseInt(secondsO)

    console.log('hours', hoursT, hoursO);
    console.log('minutes', minutesT, minutesO);
    console.log('seconds', secondsT, secondsO);

    let timerArr = [secondsO, secondsT, minutesO, minutesT, hoursO, hoursT]
    let i = 0;
    function timer() {
        for (i = 0; i < timerArr.length;) {
            timerArr[i]++;
            if (timerArr[i] === 10) {
                timerArr[i + 1]++;
                timerArr[i] = 0;
                if (timerArr[i + 1] === 6) {
                    timerArr[i + 1] = 0
                    i = i + 2;
                } else {
                    break;
                }
            } else {
                break;
            }
        }
        console.log(timerArr);

        document.querySelector('.hours .tens').textContent = timerArr[5]
        document.querySelector('.hours .ones').textContent = timerArr[4]
        document.querySelector('.minutes .tens').textContent = timerArr[3]
        document.querySelector('.minutes .ones').textContent = timerArr[2]
        document.querySelector('.seconds .tens').textContent = timerArr[1]
        document.querySelector('.seconds .ones').textContent = timerArr[0]


    }

    timeRef = setInterval(timer, 1000);

}

function stop() {
    clearInterval(timeRef);
    rst[0].style.display = 'none'
    stp[0].style.display = 'none'
    stt[0].style.display = 'block'
}

function reset() {
    if (timeRef != undefined) {
        clearInterval(timeRef);
    }
    rst[0].style.display = 'none'
    stp[0].style.display = 'none'
    stt[0].style.display = 'block'
    document.querySelector('.hours .tens').textContent = 0
    document.querySelector('.hours .ones').textContent = 0
    document.querySelector('.minutes .tens').textContent = 0
    document.querySelector('.minutes .ones').textContent = 0
    document.querySelector('.seconds .tens').textContent = 0
    document.querySelector('.seconds .ones').textContent = 0
}

let lappedArr = []

function lap(){

    let hoursT = document.querySelector('.hours .tens').textContent
    let hoursO = document.querySelector('.hours .ones').textContent
    let minutesT = document.querySelector('.minutes .tens').textContent
    let minutesO = document.querySelector('.minutes .ones').textContent
    let secondsT = document.querySelector('.seconds .tens').textContent
    let secondsO = document.querySelector('.seconds .ones').textContent

    let hh = document.querySelector('.lapped_time .h').textContent = hoursT + hoursO
    let mm = document.querySelector('.lapped_time .m').textContent = minutesT + minutesO
    let ss = document.querySelector('.lapped_time .s').textContent = secondsT + secondsO

    let lapBtn = document.getElementsByClassName('lapped_time')
    lapBtn[0].style.display = 'block'

    let lapObj =  {hh,mm,ss}
    lappedArr.push(lapObj)

    console.log('IN LAP hh',hh);
    console.log('IN LAP mm',mm);
    console.log('IN LAP ss',ss);
    console.log('LApped Array',lappedArr);

    // let showAllLap = document.querySelector('.show_all_lap');
    // showAllLap.style.display = 'block'

}