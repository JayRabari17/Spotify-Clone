import { createContext } from "react";

const songContext = createContext({
  currentSong: null,
  setCurrentSong: (currentSong) => {
    // console.log(currentSong)
    // return currentSong
  },
  soundPlayed: null,
  setsoundPlayed: (soundPlayed) => {},
  isPaused: null,
  setIsPaused: (isPaused) => {}
});

export default songContext;
