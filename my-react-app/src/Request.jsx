const SERVER_URL = {
    GENDER: 'https://api.genderize.io',
}

export async function sendRequest(userName) {
    const URL = {
        GENDER: `${SERVER_URL.GENDER}?name=${userName}`,
    }

    const responseUserInfo = await fetch(URL.GENDER);
    const objUserInfo = await responseUserInfo.json();
    const userGender = objUserInfo.gender;

    return userName + ' is ' + userGender;
}