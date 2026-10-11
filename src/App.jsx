import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  return (
    <main>
      <h1>Dark Echoes</h1>
      <EpisodeList
        episodes={episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails selectedEpisode={selectedEpisode} />
    </main>
  );
}

function EpisodeList({ episodes, selectedEpisode, setSelectedEpisode }) {
  return (
    <section className="episodes">
      <h2>Episodes</h2>
      <ul>
        {episodes.map((episode) => (
          <li
            key={episode.id}
            onClick={() => setSelectedEpisode(episode)}
            className={selectedEpisode?.id === episode.id ? "selected" : ""}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

function EpisodeDetails({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <section className="details">
        <p>Select an episode to learn more.</p>
      </section>
    );
  }

  return (
    <section className="details">
      <h2>Episode {selectedEpisode.id}</h2>
      <h3>{selectedEpisode.title}</h3>
      <p>{selectedEpisode.description}</p>
      <button>Watch now</button>
    </section>
  );
}
