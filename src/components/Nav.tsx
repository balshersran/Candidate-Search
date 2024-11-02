const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages

  return (
    <nav className="nav">
      <div className="nav-item">
        <a className="nav-link" href="/">
          Home
        </a>
      </div>
      <div className="nav-item">
        <a className="nav-link" href="/SavedCandidates">
          Potential Candidates
        </a>
      </div>
    </nav>
  );
};

export default Nav;
