import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCard.css";
function TinderCards() {
    const [people, setPeople] = useState([
        {
        name: "Lizzo",
        url: "https://i.insider.com/5e00e392954bda060200fdd4?width=1700&format=jpeg&auto=webp"
        },
        {
        name: "Mariah Carey",
        url: "https://scontent.faus1-1.fna.fbcdn.net/v/t1.0-9/p960x960/109086844_10158549197207766_4561136586739777109_o.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=rDBHXtvZULoAX_0i_ww&_nc_ht=scontent.faus1-1.fna&tp=6&oh=30ec1993dd3005ed4ca4b86df87be567&oe=5FB7C335",
        },

    ]);
    return (
        <div>
            <h1>Tinder Cards</h1> 
            <div className="tinderCards_cardContainer">
            {people.map((person) => (
                <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                    <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                    <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards;
