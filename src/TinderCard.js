import React, {useState} from 'react';

function TinderCard() {
    const [people, setPeople] = useState([
        {
        name: "Lizzo",
        url: "https://www.popsugar.com/celebrity/lizzo-fun-facts-47422795"
        },
        {
        name: "Mariah Carey",
        url: "https://en.wikipedia.org/wiki/Mariah_Carey#/media/File:Mariah_Carey_WBLS_2018_Interview_2.jpg",
        }

    ]);
    return (
        <div>
            <h1>Tinder Cards</h1> 
            {people.map(person => (
                <TinderCard>
                    <div style={{ backgroundImage: 'url(${person.url}}' }} className="card">
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCard
