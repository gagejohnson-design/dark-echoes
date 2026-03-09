import { useState } from "react";
import data from "./data.js";
import "./index.css";

function App() {
  const [episodes] = useState(data);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="app">
      <h1>Dark Echoes</h1>

      <div className="container">
        <div className="episode-list">
          <h2>Episodes</h2>
          <ul>
            {episodes.map((episode) => (
              <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
                {episode.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="episode-details">
          {!selectedEpisode ? (
            <p>Select an episode to view details.</p>
          ) : (
            <div>
              <h2>{selectedEpisode.title}</h2>

              <p>{selectedEpisode.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
