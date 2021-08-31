import fetch from 'isomorphic-fetch'

export function fetchResults(subject='') {
    const uri = `https://openlibrary.org/subjects/${subject}.json`
    console.log(uri);
    return fetch(uri,{
        // mode: "no-cors",
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    }).then(res => res.json()).then(jsres => jsres).catch(err => console.warn(err))
}