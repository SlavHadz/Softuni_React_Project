import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateTeam() {
    const navigate = useNavigate();
    let [name, setName] = useState('');
    let [ground, setGround] = useState('');
    let [league, setLeague] = useState('');
    let [mainImage, setMainImage] = useState('');
    let [teamLogo, setTeamLogo] = useState('');

    const changeNameHandler = (e) => {
        setName(e.target.value);
        console.log(e.target.value);
    }

    const changeGroundHandler = (e) => {
        setGround(e.target.value);
        console.log(e.target.value);
    }

    const changeLeagueHandler = (e) => {
        setLeague(e.target.value);
        console.log(e.target.value);
    }

    const changeMainImageHandler = (e) => {
        setMainImage(e.target.value);
        console.log(e.target.value);
    }

    const changeTeamLogoHandler = (e) => {
        setTeamLogo(e.target.value);
        console.log(e.target.value);
    }

    const submitFormHandler = (e) => {
        e.preventDefault();
        navigate('/teams');
    }

    return (
        <form onSubmit={submitFormHandler}>
            <label htmlFor="name">Name:</label>
            <input name="name" type="text" value={name} onChange={changeNameHandler}/>
            <label htmlFor="ground">Ground:</label>
            <input name="ground" type="text" value={ground} onChange={changeGroundHandler}/>
            <label htmlFor="league">League:</label>
            <input name="league" type="text" value={league} onChange={changeLeagueHandler}/>
            <label htmlFor="main-image">Main image:</label>
            <input name="main-image" type="text" value={mainImage} onChange={changeMainImageHandler}/>
            <label htmlFor="team-logo">Team logo:</label>
            <input name="team-logo" type="text" value={teamLogo} onChange={changeTeamLogoHandler}/>
            <button type="submit">Create</button>
        </form>
    );
}