export default function TeamItem({
    teamData
}) {
    return (
        <>
            <h1>Team name:</h1>
            <div>{teamData.name}</div>
            <h2>Ground:</h2>
            <div>{teamData.ground}</div>
        </>
    );
}