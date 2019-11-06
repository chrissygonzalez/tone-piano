async function getSongs(){
    const response = await fetch(`api/songs`, {
        accept: 'application/json',
    });
    const data = await response.json();
    // return console.log(data);
    return data;
}

const Test = { getSongs };
export default Test;