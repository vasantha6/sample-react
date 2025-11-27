import React, { useEffect, useState } from "react";
import Panel from "./Panel";
import { fetchPanelsData, PanelData } from "../services/api";

export default function Home(): React.ReactElement {
  const [panels, setPanels] = useState<PanelData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchPanelsData()
      .then((data) => {
        if (!mounted) return;
        setPanels(data);
        setLoading(false);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err?.message || "Failed to load data");
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div>
      <h1> hello react</h1>
      <p> This is my first react application</p>

      {loading && <p>Loading panels...</p>}
      {error && <p className="error">{error}</p>}

      <div className="panels">
        {!loading && panels.length === 0 && <p>No panels available.</p>}

        {panels.map((p) => (
          <Panel key={p.id} title={p.title} subtitle={p.subtitle}>
            <p>{p.content}</p>
          </Panel>
        ))}
      </div>
    </div>
  );
}
