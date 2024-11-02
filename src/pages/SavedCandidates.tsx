import { useEffect, useState } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidates = localStorage.getItem("acceptedCandidate");
    if (savedCandidates) {
      setCandidates(JSON.parse(savedCandidates));
    }
    console.log(savedCandidates);
  }, []);
  if (candidates.length === 0) {
    return <p>No Potential Candidates Available</p>;
  }

  return (
    <>
      <h1>Potential Candidates</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>
                  {candidate.avatar_url ? (
                    <img src={candidate.avatar_url} alt="avatar" />
                  ) : (
                    ""
                  )}
                </td>
                <td>
                  {candidate.login}
                  {candidate.name}
                </td>
                <td>{candidate.location}</td>
                <td>{candidate.email}</td>
                <td>{candidate.company}</td>
                <td>{candidate.bio}</td>
                <td>
                  <button>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SavedCandidates;
