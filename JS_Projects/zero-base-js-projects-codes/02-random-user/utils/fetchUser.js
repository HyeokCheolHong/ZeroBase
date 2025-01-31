
// Client  request ====>   Server api   randomuser computer

//     <=== response


const URL = 'https://randomuser.me/api/';

const getUser = async () => {
    // 동기    task1    task2   task3 
    // 비동기   task1     task2    task3 
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    const person = data.results[0];
    const {phone, email} = person;
    const {large: image} = person.picture;
    const {password} = person.login;
    const {first, last} = person.name;
    const {
        dob : {age}
    } = person;
    const {
        street : {number, name}
    } = person.location;
    return {
        image,
        phone,
        email,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`,
    }
}

export default getUser;

