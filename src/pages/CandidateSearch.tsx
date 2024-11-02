import { useState, useEffect } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import { Candidate } from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard";

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    login: null,
    id: null,
    name: null,
    location: null,
    avatar_url: "",
    email: null,
    html_url: null,
    company: null,
    bio: null,
  });

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const users = await searchGithub();
      setResults(users);
    } catch (error) {
      console.error("Could not find Candidate", error);
    }
  };

  const singleCandidate = async () => {
    const user = await searchGithubUser(results[currentIndex].login);
    setCurrentCandidate(user);
  };

  const acceptCandidate = () => {
    let storedCandidate: any = JSON.parse(localStorage.getItem('acceptedCandidate') as string) || [];
    storedCandidate.push(currentCandidate);
    console.log(storedCandidate);
    localStorage.setItem('acceptedCandidate', JSON.stringify(storedCandidate));
    let count = currentIndex + 1;
    setCurrentIndex(count);
    nextCandidate();
  };

  const rejectCandidate = () => {
    let count = currentIndex + 1;
    setCurrentIndex(count);
    nextCandidate();
  };

  const nextCandidate = () => {
    if (currentIndex < results.length) {
      singleCandidate();
    }
    return;
  };

  const curerntCandidate = results[currentIndex];

  return (
    <>
      <h1>CandidateSearch</h1>

      {/* just decided to make a new componenet called candidatecard to make the code look better and in case i want to display more than one candidate on the page */}
      {curerntCandidate && <CandidateCard candidate={currentCandidate} />}

      {/* need to add buttons for candidates accepted and then one for rejected */}
      <div>
        <button onClick={rejectCandidate}> - </button>
        <button onClick={acceptCandidate}> + </button>
      </div>
    </>
  );
};

export default CandidateSearch;
