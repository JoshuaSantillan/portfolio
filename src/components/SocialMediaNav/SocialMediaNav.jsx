import React from 'react';
import './SocialMediaNav.css';
const SocialMediaNav = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="mt-3 d-flex justify-content-center wrapper">

      <div className="icon instagram" onClick={() => openLink('https://leetcode.com/JoshuaSantillan/')}>
        <span className="tooltip" style={{ backgroundColor: '#eaa240' }}>LeetCode</span> 
        <img src={process.env.REACT_APP_LC_IMAGE} alt="Instagram" className="img-fluid rounded" />
      </div>

      <div className="icon spotify" onClick={() => openLink('https://open.spotify.com/user/1215151640?si=325febd571474d3d')}>
        <span className="tooltip" style={{ backgroundColor: '#1DB954' }}>Spotify</span>
        <img src={process.env.REACT_APP_SPOTIFY_IMAGE} alt="Spotify" className="img-fluid rounded" />
      </div>

      <div className="icon linkedin" onClick={() => openLink('https://www.linkedin.com/in/joshuasantillan/')}>
        <span className="tooltip" style={{ backgroundColor: '#0077b5' }}>LinkedIn</span>
        <img src={process.env.REACT_APP_LN_IMAGE} alt="LinkedIN" className="img-fluid rounded" />
      </div>

      <div className="icon github" onClick={() => openLink('https://github.com/JoshuaSantillan')}>
        <span className="tooltip" style={{ backgroundColor: '#818485' }}>GitHub</span>
        <img src={process.env.REACT_APP_GH_IMAGE} alt="GitHub" className="img-fluid rounded" />
      </div>

    </div>
  );
};

export default SocialMediaNav;
