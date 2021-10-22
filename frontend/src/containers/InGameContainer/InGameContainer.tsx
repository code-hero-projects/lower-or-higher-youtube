import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos, selectCountryState, selectVideoState } from "../../redux";

export function InGameContainer() {
  const { videos } = useSelector(selectVideoState);
  const { selectedCountry } = useSelector(selectCountryState);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getVideos(selectedCountry));
  }, [])

  return <h1>Video length: {videos.length}</h1>;
}