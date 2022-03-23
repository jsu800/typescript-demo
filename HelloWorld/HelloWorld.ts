
var url = 'https://jsonplaceholder.typicode.com/users';

type Persons = {
    id: string;
    name: string;
}

async function getPersons(path: string): Promise<Persons | null> {
    const persons = await getData(path);
    if (persons) {
      return persons;
    }
    return null;
}

async function getData(path: string): Promise<Persons> {
    const response = await fetch(path)
    return await response.json();
}

getPersons(url).then((persons) => {
    console.log(persons);
}).catch((err) => {
    console.error(err);
});
