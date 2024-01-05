function tst1() {
 var nm = document.getElementById("name0");
 var pas = document.getElementById("pas");
  if (nm.value=="Avni" && pas.value=="A123"||nm.value=="Dinesh" && pas.value=="D123"||nm.value=="Hardika" && pas.value=="H123"|| nm.value=="Abhishek" && pas.value=="Abhishek264" || nm.value=="Alpesh" && pas.value=="Alpesh273" || nm.value=="Amit" && pas.value=="Amit294" || nm.value=="Ankita" && pas.value=="Ankita305" || nm.value=="Arti" && pas.value=="Arti311" || nm.value=="Bhagirath" && pas.value=="Bhagirath321" || nm.value=="Bhavdip" && pas.value=="Bhavdip345" || nm.value=="Bhavika" && pas.value=="Bhavika392" || nm.value=="Bhavin" && pas.value=="Bhavin395" || nm.value=="Chetan" && pas.value=="Chetan396" || nm.value=="Dhruvraj" && pas.value=="Dhruvraj408" || nm.value=="Dimpal" && pas.value=="Dimpal429" || nm.value=="Dipika" && pas.value=="Dipika463" || nm.value=="Divyaraj" && pas.value=="Divyaraj501" || nm.value=="Ekta" && pas.value=="Ekta508" || nm.value=="Ganpat" && pas.value=="Ganpat512" || nm.value=="Gayatri" && pas.value=="Gayatri514" || nm.value=="Hardik" && pas.value=="Hardik516" || nm.value=="Haresh" && pas.value=="Haresh519" || nm.value=="Haresh" && pas.value=="Haresh542" || nm.value=="Harsh" && pas.value=="Harsh545" || nm.value=="Harshad" && pas.value=="Harshad546" || nm.value=="Harshita" && pas.value=="Harshita555" || nm.value=="Hetal" && pas.value=="Hetal563" || nm.value=="Hetal" && pas.value=="Hetal565" || nm.value=="Hitesh" && pas.value=="Hitesh574" || nm.value=="Janviba" && pas.value=="Janviba575" || nm.value=="Jaimin" && pas.value=="Jaimin579" || nm.value=="Jayapal" && pas.value=="Jayapal580" || nm.value=="Jayesh" && pas.value=="Jayesh593" || nm.value=="Jayesh" && pas.value=="Jayesh608" || nm.value=="Jayesh" && pas.value=="Jayesh614" || nm.value=="Jignesh" && pas.value=="Jignesh661" || nm.value=="Kajal" && pas.value=="Kajal679" || nm.value=="Kinjal" && pas.value=="Kinjal683" || nm.value=="Kuldip" && pas.value=="Kuldip689" || nm.value=="Kuldip" && pas.value=="Kuldip699" || nm.value=="Lakhaman" && pas.value=="Lakhaman713" || nm.value=="Mahendra" && pas.value=="Mahendra714" || nm.value=="Mahesh" && pas.value=="Mahesh723" || nm.value=="Manish " && pas.value=="Manish 732" || nm.value=="Manshi" && pas.value=="Manshi736" || nm.value=="Mehul" && pas.value=="Mehul738" || nm.value=="Mitaraj" && pas.value=="Mitaraj739" || nm.value=="Mitraj" && pas.value=="Mitraj753" || nm.value=="Mitraj" && pas.value=="Mitraj755" || nm.value=="Montu" && pas.value=="Montu772" || nm.value=="Narendra" && pas.value=="Narendra783" || nm.value=="Naresh" && pas.value=="Naresh796" || nm.value=="Nayan" && pas.value=="Nayan831" || nm.value=="Nidhi" && pas.value=="Nidhi839" || nm.value=="Pankaj" && pas.value=="Pankaj848" || nm.value=="Parthiv" && pas.value=="Parthiv849" || nm.value=="Parthiv" && pas.value=="Parthiv882" || nm.value=="Pooja" && pas.value=="Pooja883" || nm.value=="Pradip" && pas.value=="Pradip884" || nm.value=="Purvaraj" && pas.value=="Purvaraj889" || nm.value=="Rahul" && pas.value=="Rahul890" || nm.value=="Rahul" && pas.value=="Rahul892" || nm.value=="Rashmi" && pas.value=="Rashmi894" || nm.value=="Ravi" && pas.value=="Ravi917" || nm.value=="Ravi" && pas.value=="Ravi919" || nm.value=="Raviraj" && pas.value=="Raviraj923" || nm.value=="Raviraj" && pas.value=="Raviraj927" || nm.value=="Sandip" && pas.value=="Sandip938" || nm.value=="Saroj" && pas.value=="Saroj939" || nm.value=="Shital" && pas.value=="Shital950" || nm.value=="Shivji" && pas.value=="Shivji954" || nm.value=="Sneha" && pas.value=="Sneha974" || nm.value=="Unnati" && pas.value=="Unnati976" || nm.value=="Vishvaraj" && pas.value=="Vishvaraj987" || nm.value=="Vivek" && pas.value=="Vivek998") {
  uc();  
  const numbers = Array(213).fill().map((_, index) => index + 51);
  numbers.sort(() => Math.random() - 0.5);
  document.getElementById("demo").value = numbers.slice(0, 50);
  
  let debounce2,
    input2 =
    document.getElementById('demo'),
    output2 =
    document.getElementById(
      'container2'),
    update2 = function() {
      let words2 =
        input2.value.trim().split(/,\s*/);
      while (output2.firstChild)
        output2.removeChild(
          output2.firstChild);
      for (let i = 0; i < words2.length; i++) {
        let txtArea2 =
          document.createElement('textarea');
        txtArea2.value = words2[i];
        output2.appendChild(txtArea2);
      }
    };
  input2.addEventListener('input',
    function() {
      window.clearTimeout(debounce2);
      debounce2 =
        window.setTimeout(update2, 150);
    }, false);
  update2();
  
var T1 = document.getElementsByTagName("textarea")[2].value;
var T2 = document.getElementsByTagName("textarea")[3].value;
var T3 = document.getElementsByTagName("textarea")[4].value;
var T4 = document.getElementsByTagName("textarea")[5].value;
var T5 = document.getElementsByTagName("textarea")[6].value;
var T6 = document.getElementsByTagName("textarea")[7].value;
var T7 = document.getElementsByTagName("textarea")[8].value;
var T8 = document.getElementsByTagName("textarea")[9].value;
var T9 = document.getElementsByTagName("textarea")[10].value;
var T10 = document.getElementsByTagName("textarea")[11].value;
var T11 = document.getElementsByTagName("textarea")[12].value;
var T12 = document.getElementsByTagName("textarea")[13].value;
var T13 = document.getElementsByTagName("textarea")[14].value;
var T14 = document.getElementsByTagName("textarea")[15].value;
var T15 = document.getElementsByTagName("textarea")[16].value;
var T16 = document.getElementsByTagName("textarea")[17].value;
var T17 = document.getElementsByTagName("textarea")[18].value;
var T18 = document.getElementsByTagName("textarea")[19].value;
var T19 = document.getElementsByTagName("textarea")[20].value;
var T20 = document.getElementsByTagName("textarea")[21].value;
var T21 = document.getElementsByTagName("textarea")[22].value;
var T22 = document.getElementsByTagName("textarea")[23].value;
var T23 = document.getElementsByTagName("textarea")[24].value;
var T24 = document.getElementsByTagName("textarea")[25].value;
var T25 = document.getElementsByTagName("textarea")[26].value;
var T26 = document.getElementsByTagName("textarea")[27].value;
var T27 = document.getElementsByTagName("textarea")[28].value;
var T28 = document.getElementsByTagName("textarea")[29].value;
var T29 = document.getElementsByTagName("textarea")[30].value;
var T30 = document.getElementsByTagName("textarea")[31].value;
var T31 = document.getElementsByTagName("textarea")[32].value;
var T32 = document.getElementsByTagName("textarea")[33].value;
var T33 = document.getElementsByTagName("textarea")[34].value;
var T34 = document.getElementsByTagName("textarea")[35].value;
var T35 = document.getElementsByTagName("textarea")[36].value;
var T36 = document.getElementsByTagName("textarea")[37].value;
var T37 = document.getElementsByTagName("textarea")[38].value;
var T38 = document.getElementsByTagName("textarea")[39].value;
var T39 = document.getElementsByTagName("textarea")[40].value;
var T40 = document.getElementsByTagName("textarea")[41].value;
var T41 = document.getElementsByTagName("textarea")[42].value;
var T42 = document.getElementsByTagName("textarea")[43].value;
var T43 = document.getElementsByTagName("textarea")[44].value;
var T44 = document.getElementsByTagName("textarea")[45].value;
var T45 = document.getElementsByTagName("textarea")[46].value;
var T46 = document.getElementsByTagName("textarea")[47].value;
var T47 = document.getElementsByTagName("textarea")[48].value;
var T48 = document.getElementsByTagName("textarea")[49].value;
var T49 = document.getElementsByTagName("textarea")[50].value;
var T50 = document.getElementsByTagName("textarea")[51].value;

Y1 = "X" + T1;
Y2 = "X" + T2;
Y3 = "X" + T3;
Y4 = "X" + T4;
Y5 = "X" + T5;
Y6 = "X" + T6;
Y7 = "X" + T7;
Y8 = "X" + T8;
Y9 = "X" + T9;
Y10 = "X" + T10;
Y11 = "X" + T11;
Y12 = "X" + T12;
Y13 = "X" + T13;
Y14 = "X" + T14;
Y15 = "X" + T15;
Y16 = "X" + T16;
Y17 = "X" + T17;
Y18 = "X" + T18;
Y19 = "X" + T19;
Y20 = "X" + T20;
Y21 = "X" + T21;
Y22 = "X" + T22;
Y23 = "X" + T23;
Y24 = "X" + T24;
Y25 = "X" + T25;
Y26 = "X" + T26;
Y27 = "X" + T27;
Y28 = "X" + T28;
Y29 = "X" + T29;
Y30 = "X" + T30;
Y31 = "X" + T31;
Y32 = "X" + T32;
Y33 = "X" + T33;
Y34 = "X" + T34;
Y35 = "X" + T35;
Y36 = "X" + T36;
Y37 = "X" + T37;
Y38 = "X" + T38;
Y39 = "X" + T39;
Y40 = "X" + T40;
Y41 = "X" + T41;
Y42 = "X" + T42;
Y43 = "X" + T43;
Y44 = "X" + T44;
Y45 = "X" + T45;
Y46 = "X" + T46;
Y47 = "X" + T47;
Y48 = "X" + T48;
Y49 = "X" + T49;
Y50 = "X" + T50;

g1 = "g" + T1;
g2 = "g" + T2;
g3 = "g" + T3;
g4 = "g" + T4;
g5 = "g" + T5;
g6 = "g" + T6;
g7 = "g" + T7;
g8 = "g" + T8;
g9 = "g" + T9;
g10 = "g" + T10;
g11 = "g" + T11;
g12 = "g" + T12;
g13 = "g" + T13;
g14 = "g" + T14;
g15 = "g" + T15;
g16 = "g" + T16;
g17 = "g" + T17;
g18 = "g" + T18;
g19 = "g" + T19;
g20 = "g" + T20;
g21 = "g" + T21;
g22 = "g" + T22;
g23 = "g" + T23;
g24 = "g" + T24;
g25 = "g" + T25;
g26 = "g" + T26;
g27 = "g" + T27;
g28 = "g" + T28;
g29 = "g" + T29;
g30 = "g" + T30;
g31 = "g" + T31;
g32 = "g" + T32;
g33 = "g" + T33;
g34 = "g" + T34;
g35 = "g" + T35;
g36 = "g" + T36;
g37 = "g" + T37;
g38 = "g" + T38;
g39 = "g" + T39;
g40 = "g" + T40;
g41 = "g" + T41;
g42 = "g" + T42;
g43 = "g" + T43;
g44 = "g" + T44;
g45 = "g" + T45;
g46 = "g" + T46;
g47 = "g" + T47;
g48 = "g" + T48;
g49 = "g" + T49;
g50 = "g" + T50;

document.getElementById(Y1).id = 'X1';
document.getElementById(Y2).id = 'X2';
document.getElementById(Y3).id = 'X3';
document.getElementById(Y4).id = 'X4';
document.getElementById(Y5).id = 'X5';
document.getElementById(Y6).id = 'X6';
document.getElementById(Y7).id = 'X7';
document.getElementById(Y8).id = 'X8';
document.getElementById(Y9).id = 'X9';
document.getElementById(Y10).id = 'X10';
document.getElementById(Y11).id = 'X11';
document.getElementById(Y12).id = 'X12';
document.getElementById(Y13).id = 'X13';
document.getElementById(Y14).id = 'X14';
document.getElementById(Y15).id = 'X15';
document.getElementById(Y16).id = 'X16';
document.getElementById(Y17).id = 'X17';
document.getElementById(Y18).id = 'X18';
document.getElementById(Y19).id = 'X19';
document.getElementById(Y20).id = 'X20';
document.getElementById(Y21).id = 'X21';
document.getElementById(Y22).id = 'X22';
document.getElementById(Y23).id = 'X23';
document.getElementById(Y24).id = 'X24';
document.getElementById(Y25).id = 'X25';
document.getElementById(Y26).id = 'X26';
document.getElementById(Y27).id = 'X27';
document.getElementById(Y28).id = 'X28';
document.getElementById(Y29).id = 'X29';
document.getElementById(Y30).id = 'X30';
document.getElementById(Y31).id = 'X31';
document.getElementById(Y32).id = 'X32';
document.getElementById(Y33).id = 'X33';
document.getElementById(Y34).id = 'X34';
document.getElementById(Y35).id = 'X35';
document.getElementById(Y36).id = 'X36';
document.getElementById(Y37).id = 'X37';
document.getElementById(Y38).id = 'X38';
document.getElementById(Y39).id = 'X39';
document.getElementById(Y40).id = 'X40';
document.getElementById(Y41).id = 'X41';
document.getElementById(Y42).id = 'X42';
document.getElementById(Y43).id = 'X43';
document.getElementById(Y44).id = 'X44';
document.getElementById(Y45).id = 'X45';
document.getElementById(Y46).id = 'X46';
document.getElementById(Y47).id = 'X47';
document.getElementById(Y48).id = 'X48';
document.getElementById(Y49).id = 'X49';
document.getElementById(Y50).id = 'X50';

document.getElementsByClassName(g1)[0].innerHTML = 1;
document.getElementsByClassName(g2)[0].innerHTML = 2;
document.getElementsByClassName(g3)[0].innerHTML = 3;
document.getElementsByClassName(g4)[0].innerHTML = 4;
document.getElementsByClassName(g5)[0].innerHTML = 5;
document.getElementsByClassName(g6)[0].innerHTML = 6;
document.getElementsByClassName(g7)[0].innerHTML = 7;
document.getElementsByClassName(g8)[0].innerHTML = 8;
document.getElementsByClassName(g9)[0].innerHTML = 9;
document.getElementsByClassName(g10)[0].innerHTML = 10;
document.getElementsByClassName(g11)[0].innerHTML = 11;
document.getElementsByClassName(g12)[0].innerHTML = 12;
document.getElementsByClassName(g13)[0].innerHTML = 13;
document.getElementsByClassName(g14)[0].innerHTML = 14;
document.getElementsByClassName(g15)[0].innerHTML = 15;
document.getElementsByClassName(g16)[0].innerHTML = 16;
document.getElementsByClassName(g17)[0].innerHTML = 17;
document.getElementsByClassName(g18)[0].innerHTML = 18;
document.getElementsByClassName(g19)[0].innerHTML = 19;
document.getElementsByClassName(g20)[0].innerHTML = 20;
document.getElementsByClassName(g21)[0].innerHTML = 21;
document.getElementsByClassName(g22)[0].innerHTML = 22;
document.getElementsByClassName(g23)[0].innerHTML = 23;
document.getElementsByClassName(g24)[0].innerHTML = 24;
document.getElementsByClassName(g25)[0].innerHTML = 25;
document.getElementsByClassName(g26)[0].innerHTML = 26;
document.getElementsByClassName(g27)[0].innerHTML = 27;
document.getElementsByClassName(g28)[0].innerHTML = 28;
document.getElementsByClassName(g29)[0].innerHTML = 29;
document.getElementsByClassName(g30)[0].innerHTML = 30;
document.getElementsByClassName(g31)[0].innerHTML = 31;
document.getElementsByClassName(g32)[0].innerHTML = 32;
document.getElementsByClassName(g33)[0].innerHTML = 33;
document.getElementsByClassName(g34)[0].innerHTML = 34;
document.getElementsByClassName(g35)[0].innerHTML = 35;
document.getElementsByClassName(g36)[0].innerHTML = 36;
document.getElementsByClassName(g37)[0].innerHTML = 37;
document.getElementsByClassName(g38)[0].innerHTML = 38;
document.getElementsByClassName(g39)[0].innerHTML = 39;
document.getElementsByClassName(g40)[0].innerHTML = 40;
document.getElementsByClassName(g41)[0].innerHTML = 41;
document.getElementsByClassName(g42)[0].innerHTML = 42;
document.getElementsByClassName(g43)[0].innerHTML = 43;
document.getElementsByClassName(g44)[0].innerHTML = 44;
document.getElementsByClassName(g45)[0].innerHTML = 45;
document.getElementsByClassName(g46)[0].innerHTML = 46;
document.getElementsByClassName(g47)[0].innerHTML = 47;
document.getElementsByClassName(g48)[0].innerHTML = 48;
document.getElementsByClassName(g49)[0].innerHTML = 49;
document.getElementsByClassName(g50)[0].innerHTML = 50;

document.getElementById("hp").style.display = "none";
document.getElementById("s_0").style.display = "none";
document.getElementById("s_1").style.display = "none";
document.getElementById("mnb").style.display = "block";
document.getElementById("page").style.display = "block";
document.getElementById("k0").value = "X50";
  }else {
alert("Wrong Username Or Password");
  }
}

document.getElementById("Light").click();

function uc() {
  var d = document.getElementById('Dark');
  var l = document.getElementById('Light');
  if (d.checked == true){
    d.checked = false;
  }
  if (l.checked == true){
    l.checked = false;
  }
}

function tdl() {
  var d = document.getElementById('Dark');
  var l = document.getElementById('Light');
  var s = document.getElementById('search');
  var R = document.getElementsByClassName('R');
  var R1 = document.getElementsByClassName('R1');
  if (d.checked == true) {
    document.body.style.cssText = "background: linear-gradient(315deg, #130f40 0%, #000000 74%) no-repeat center bottom fixed;";
    for (let i = 0; i < R.length; i++) {
      R[i].style.cssText = "border: 2px solid #000066;box-shadow: none;background:ghostwhite;";
    }
    for (let i = 0; i < R1.length; i++) {
      R1[i].style.cssText = "border: 2px solid #000066;box-shadow: none;background:ghostwhite;";
    }
  }
  if (l.checked == true) {
    document.body.style.cssText = "background: linear-gradient(147deg, #f9fcff 0%, #dee4ea 74%)no-repeat center bottom fixed;color:black;";
    for (let i = 0; i < R.length; i++) {
      R[i].style.cssText = "border: 1px solid grey;box-shadow: none;";
    }
    for (let i = 0; i < R1.length; i++) {
      R1[i].style.cssText = "border: 1px solid grey;box-shadow: none;";
    }
  }
}

function tim() {
  function countdown(elementName, minutes, seconds)
  {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits(n)
    {
      return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
      msLeft = endTime - (+new Date);
      if (msLeft < 0500) {
        document.getElementById("smt0").click();
      } else {
        time = new Date(msLeft);
        hours = time.getUTCHours();
        mins = time.getUTCMinutes();
        element.innerHTML="Time:- " + (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
        setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
      }
    }

    element = document.getElementById(elementName);
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
  }

  countdown("ten-countdown", 50, 01);

}

let hrs = min = sec = ms = 0,
  startTimer;

function btnStart() {
  startTimer = setInterval(() => {
    ms++; //ms=ms+1;
    if (ms == 100) {
      sec++;
      ms = 0;
    }
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hrs++;
      min = 0;
    }
    updateDisplay();
  }, 10);
};

function btnStop() {
  clearInterval(startTimer);
};

function btnReset() {
  hrs = min = sec = ms = 0;
  clearInterval(startTimer);
  updateDisplay();
};


function updateDisplay() {
  //Formated Display
  phrs = hrs < 10 ? '0' + hrs : hrs;
  pmin = min < 10 ? '0' + min : min;
  psec = sec < 10 ? '0' + sec : sec;
  pms = ms < 10 ? '0' + ms : ms;
  //Output
  document.querySelector('.hrs').innerText = phrs;
  document.querySelector('.min').innerText = pmin;
  document.querySelector('.sec').innerText = psec;
  document.querySelector('.ms').innerText = pms;
}

// seipe code start
   var swipe = document.getElementsByTagName("form");
   
for (let i = 0; i < swipe.length; i++) {
  swipe[i].addEventListener("touchstart", startTouch, false);
  swipe[i].addEventListener("touchmove", moveTouch, false);

  // Swipe Up / Down / Left / Right
  var initialX = null;
  var initialY = null;

  function startTouch(e) {
    initialX = e.touches[0].clientX;
    initialY = e.touches[0].clientY;
  };

  function moveTouch(e) {
    if (initialX === null) {
      return;
    }

    if (initialY === null) {
      return;
    }

    var currentX = e.touches[0].clientX;
    var currentY = e.touches[0].clientY;

    var diffX = initialX - currentX;
    var diffY = initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // sliding horizontally
      if (diffX > 0) {
        // swiped left
        nt();
      } else {
        if(X1.style.display == "none"){
        // swiped right
        pr();}else{
          x50();
        }
      }  
    } else {
      // sliding vertically
      if (diffY > 0) {
        // swiped up
      } else {
        // swiped down
      }  
    }

    initialX = null;
    initialY = null;

    e.preventDefault();
  };
}

