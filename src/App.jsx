// src/App.jsx
import { useState } from "react";
import "./App.css"

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]
  );

  const handleAddFighter = (fighterObj) => {
    console.log(fighterObj)
    if (money >= fighterObj.price) {
      setMoney(money - fighterObj.price);
      const newTeam = [...team, fighterObj]
      setTeam(newTeam);
      const newZombieFighters = zombieFighters.filter((fighter) => {
        return fighter.id !== fighterObj.id;
      });
      setZombieFighters(newZombieFighters);
    } else {
      console.log("not enough money")
    }
  };

  const totalStength = team.reduce((total, fighter) => {
    return total + fighter.strength
  }, 0);

  const totalAgility = team.reduce((total, fighter) => {
    return total + fighter.agility
  }, 0);

  return (
    <>
      <h2>Current Money: ${money}</h2>

      {team.length === 0 && "pick some team members"}

      <h2>Your Team | Team Strength: {totalStength} | Team Agility: {totalAgility} </h2> 
      <ul>
        {team.map((fighter) => {
          const { id, name, price, strength, agility, img } = fighter;
          return (
            <li key={id}>
              <img src={img} alt="" />
              <h3>{name}</h3>
              <p>${price}</p>
              <p>Strength: {strength}</p>
              <p>Agility: {agility}</p>
            </li>
          );
        })}
      </ul>


      <ul>
        {zombieFighters.map((fighter) => {
          const { id, name, price, strength, agility, img } = fighter;
          return (
            <li key={id}>
              <img src={img} alt="" />
              <h3>{name}</h3>
              <p>${price}</p>
              <p>Strength: {strength}</p>
              <p>Agility: {agility}</p>
              <button onClick={() => handleAddFighter(fighter)}>
                add</button>
            </li>
          );
        })
        }
      </ul>
    </>
  );
}

export default App
