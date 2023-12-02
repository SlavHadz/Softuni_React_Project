import { Link } from "react-router-dom";

export default function TeamListItem({
    teamData
}) {
    return (
        <>
            <h1>Team name:</h1>
            <div>{teamData.name}</div>
            <h2>Ground:</h2>
            <div>{teamData.ground}</div>
            <Link to={`/teams/${teamData._id}/details`}>Details</Link>
        </>
    );
}