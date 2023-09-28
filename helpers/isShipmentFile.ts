const isShipmentFile = (fileContent: string) => {
    // Basic validation looking for a 5-digit zip code
    return /\b\d{5}\b/.test(fileContent);
  };

export default isShipmentFile;