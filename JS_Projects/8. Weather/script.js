// client        =====>         server  // 지역위치를 보냄
//               <=====                 // openweathermap api를 사용하여 데이터를 받음

// api key          =====>         server
//                  <=====              // asldfn31lk13sldnaf 같이 각자에게 제공된 유니크 키값을 할당함



const api = {
  key: '15dd264653ae19e803a868ed7fb3c895',
  // 미리 받아놓은 api key이다
  base: 'https://api.openweathermap.org/data/2.5/'
  // 해당 주소로 데이터를 받을 예정(api사용법 확인시 해당 주소에 서버통신해야함)
}

const searchBoxEl = document.querySelector('.search-box');
searchBoxEl.addEventListener('keypress', setQuery);

function setQuery(e) {
  if(e.keyCode === 13) {
    // keyCode 13은 'Enter'를 의미함
    getResult(searchBoxEl.value);
    // console.log(searchBoxEl.value)
  }
}

function getResult(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  // 서버로 응답을 받아야하기에 fetch()메소드 사용
  // api.base(api주소)weather?q=(searchBoxEl.value값)&units=metric&APPID=(api key값) 으로부터 응답을 받는다
    .then(Response => Response.json())
    .then(data => displayResults(data));
    // fetch뒤에는 .then이 끝날때 ; 한번 찍는다
}

function displayResults(weather) {
  // 서버로부터 받은 데이터의 응답
  console.log(weather)
  let city = document.querySelector('.location .city');
  // location의 city 클래스
  city.innerText = `${weather.name} + ${weather.sys.country}`;
  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);
  // 날짜 바꾸기

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp).toFixed(0)}<span>℃</span>`
  // 온도 받아오기

  let weatherEl = document.querySelector('.current .weather');
  weatherEl.innerHTML = weather.weather[0].main;

  let hiLow = document.querySelector('.hi-low');
  hiLow.innerText = `${Math.round(weather.main.temp_min)}℃ / ${Math.round(weather.main.temp_max)}℃`
}

function dateBuilder(d) {
  // new Date()로 받은 현재시간에서 HTML에서 작성한
  // 'Thursday 23 January 2024' 로 가공하는 함수
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
  ]

  let days = [
    'Sunday',
    'Monday',
    'Tuseday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  let day = days[d.getDay()];
  // 요일을 받음(index 0 이면 일요일...)
  let date = d.getDate();
  // 일자를 받음
  let month = months[d.getMonth()];
  const year = d.getFullYear();

  // console.log(day)
  // console.log(date)
  // console.log(month)
  // console.log(year)
  return `${day} ${date} ${month} ${year}`;
  // 각 변수들값을 반환함
}