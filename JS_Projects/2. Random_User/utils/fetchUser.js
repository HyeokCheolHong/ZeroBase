// 서버로부터 User를 가져오는 JS
// https://randomuser.me/api/ 에서 User정보를 가져온다

// 동작방식
// Client request ====>        Server api randomuser computer
//               <==== reponse

const URL = 'https://randomuser.me/api/';

// 비동기 요청
const getUser = async () => {
    // 동기 task1 후 task2후 task3
    // 비동기 task1과 task2와 task3을 동시 실행
    const response = await fetch(URL);
    // fetch(URL)에서 응답을 받을때 까지 기다려서(await)하여 response에 할당
    const data = await response.json();
    // server(fetch)로 부터 받은 json 데이터를 JS로 해석하여 data에 할당함
    console.log(data)

    const person = data.results[0];
    // data에서 results배열중 0번 index를 가져옴
    // 해당 results는 서버에서 보내주는 data임
    const {phone, email} = person;
    // 구조분해 할당 위/아래 가 같은동작
      // const phone = person.phone;
      // const email = person.email;
    
    const {large: image} = person.picture;
    // 구조분해 할당으로 person.picture에 있는 large 데이터를 image로 이름만 바꿔서 사용
    const {password} = person.login;
    const {first, last} = person.name;

    const {
        dob : {age}
        // 구조분해 할당으로 person results에 있는 dob배열데이터에서 age 데이터를 배열로 가져옴
    } = person;
    const {
        street : {number, name}
        // 구조분해 할당으로 person results에 있는 location데이터에서 street배열 데이터를 가져옴
    } = person.location;

    return {
        image,
        phone,
        email,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`
        // 위에서 정의한 변수들을 반환함
    }
}

export default getUser;