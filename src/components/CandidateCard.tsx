import { Candidate } from "../interfaces/Candidate.interface";

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  return (
      <div className="card">
        <div className="card-body">
          <img
            src={candidate.avatar_url}
            alt={`${candidate.name || candidate.login}'s avatar`}
          />
          <h2 className="card-title">
            {candidate.name}
            {candidate.login}
          </h2>

          <p className="card-text">
            <strong>Location:</strong> {candidate.location}
          </p>
          <p className="card-text">
            <strong>Email:</strong> {candidate.email}
          </p>
          <p className="card-text">
            <strong>Company:</strong> {candidate.company}
          </p>
          <p className="card-text">
            <strong>Bio:</strong> {candidate.bio}
          </p>
        </div>
      </div>
  );
};

export default CandidateCard;
