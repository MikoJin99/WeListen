import { React, useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import NavBar from "../components/NavBar";
import ControlBar from "../components/ControlBar";
import axios from "axios";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Song() {
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [resTitle, setResTitle] = useState();
  const [resArtist, setResArtist] = useState();
  const [audioStream, setAudioStream] = useState();
  const URL = `/search?title=${title}&artist=${artist}`;

  let query = useQuery();

  useEffect(() => {
    const artistInput = query.get("artist");
    const titleInput = query.get("title");
    if (artistInput) {
      setArtist(artistInput);
    }
    if (titleInput) {
      setTitle(titleInput);
    }
  }, [query]);

  useEffect(() => {
    console.log("Begin Axios");
    if (title && artist) {
      axios
        .get(URL)
        .then((response) => {
          console.log(response);
          setAudioStream(response.data.audio_stream);
          setResArtist(response.data.title);
          setResTitle(response.data.artist);
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [title, artist, URL]);

  const { audioData } = useMemo(() => {
    if (!audioStream) return { audioData: "" };
    else {
      return {
        audioData: audioStream,
      };
    }
  }, [audioStream]);

  return (
    <div className="songWrapper">
      <NavBar />
      <form>
        <h1>Song</h1>

        <label htmlFor="title">Song Name: </label>
        <input type="text" name="title" required></input>

        <label htmlFor="artist">Artist: </label>
        <input type="text" name="artist" required></input>

        <button type="submit">Submit</button>
      </form>

      <ControlBar
        audioStream={audioData}
        playingTitle={resTitle}
        playingArtist={resArtist}
      />
    </div>
  );
}

export default Song;
