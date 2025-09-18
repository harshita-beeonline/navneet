import { useState } from "react";
import styles from "../../../../../styles/MediaAndUpdates/Coverage/CardSlider.module.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

export default function CardSlider({ videos = [] }) {
  const [current, setCurrent] = useState(0);

  const getVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));

  if (!videos.length) return <p className={styles.noData}>No content available</p>;

  const currentVideoId = getVideoId(videos[current]);
  if (!currentVideoId) return <p className={styles.noData}>Invalid video URL</p>;

  return (
    <div className={styles.slider}>
      <button className={styles.nav} onClick={prev}>
        <SlArrowLeft />
      </button>

      <div className={styles.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${currentVideoId}`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <button className={styles.nav} onClick={next}>
        <SlArrowRight />
      </button>
    </div>
  );
}
