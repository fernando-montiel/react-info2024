import './Fetch.css';
import {useEffect, useState} from "react";

export function Fetch(){

    const API_URL = 'https://rickandmortyapi.com/api/character';
    const [ rickMortyData, setRickMortyData ] = useState([]);
    // const myPromise = fetch(API_URL, {
    //     method: 'GET',
    //     mode: 'cors',
    //     credentials: 'same-origin',
    //     body: {},
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer [Token]`
    //     },
    // });

    // Option 1
    // const myPromise = fetch(API_URL, {
    //     method: 'GET',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    // })
    //     .then(response => response.json())
    //     .then(data => console.log('data', data)
    // );

    // Option 2
    async function myOtherPromise(){
        const response = await fetch(API_URL, {})
        const data = await response.json();
        console.log('data', data.results[1].name);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setRickMortyData(data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        console.log(rickMortyData)
        fetchData().catch(error => {
            console.error("Error during fetch:", error);
        }); // Se maneja el error.
    }, []);

    return(
        <>
            <div className={"use-effect-with-fetch"}>

                {rickMortyData.map( (item) => {
                    return <p key={item.id}>{item.name}</p>
                })}

            </div>
        </>
    )
}