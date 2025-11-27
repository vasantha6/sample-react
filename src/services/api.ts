export interface PanelData {
  id: number;
  title: string;
  subtitle?: string;
  content?: string;
}

export function fetchPanelsData(): Promise<PanelData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Panel One (remote)",
          subtitle: "Fetched first panel subtitle",
          content: "Content loaded from the fake API for panel one.",
        },
        {
          id: 2,
          title: "Panel Two (remote)",
          subtitle: "Fetched second panel subtitle",
          content: "Content loaded from the fake API for panel two.",
        },
      ]);
    }, 400);
  });
}
