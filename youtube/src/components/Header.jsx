import "./Header.css";

function Header({ toggleSidebar }) {

    const filters = [
  "All",
  "Music",
  "Gaming",
  "News",
  "Live",
  "Podcasts",
  "Movies",
  "Sports",
];


    return(
        <>
            {/* Top Header */}
      <header className="header">
        <div className="header-left">
          <button
            className="hamburger-btn"
            onClick={toggleSidebar}
          >
            ☰
          </button>

          <div className="youtube-logo">
            <span className="play-icon">▶</span>
            <span className="logo-text">YouTube</span>
          </div>
        </div>

        <div className="header-center">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />

          <button className="search-btn">🔍</button>

          <button className="mic-btn">🎤</button>
        </div>

        <div className="header-right">
          <button className="icon-btn">📹</button>
          <button className="icon-btn">🔔</button>
          <div className="profile-avatar">A</div>
        </div>
      </header>

      {/* Filter Buttons */}
      <div className="filter-bar">
        {filters.map((filter) => (
          <button key={filter} className="filter-btn">
            {filter}
          </button>
        ))}
      </div>
        </>
    );
}

export default Header;