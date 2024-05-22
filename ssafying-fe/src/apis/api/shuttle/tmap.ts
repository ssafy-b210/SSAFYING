export const loadTMAPScript = (apiKey: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://apis.openapi.sk.com/tmap/vectorjs?version=1&appKey=${apiKey}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load TMAP script"));
    document.body.appendChild(script);
  });
};
