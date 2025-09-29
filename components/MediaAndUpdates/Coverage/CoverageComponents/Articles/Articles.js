// components/MediaAndUpdates/Coverage/Articles/Articles.jsx
"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import styles from "../../../../../styles/MediaAndUpdates/Coverage/Articles.module.scss";

// (keep your same image imports) - example paths kept as in your original file
import article_col1_img1 from "../../../../../public/images/media-and-updates/article-col1-img1.png";
import article_col1_img2 from "../../../../../public/images/media-and-updates/article-col1-img2.png";
import article_col1_img3 from "../../../../../public/images/media-and-updates/article-col1-img3.png";
import article_col1_img4 from "../../../../../public/images/media-and-updates/article-col1-img4.png";
import article_col1_img5 from "../../../../../public/images/media-and-updates/article-col1-img5.png";
import article_col1_img6 from "../../../../../public/images/media-and-updates/article-col1-img6.png";
import article_col1_img7 from "../../../../../public/images/media-and-updates/article-col1-img7.png";
import article_col1_img8 from "../../../../../public/images/media-and-updates/article-col1-img8.png";

import article_col2_img1 from "../../../../../public/images/media-and-updates/article-col2-img1.png";
import article_col2_img2 from "../../../../../public/images/media-and-updates/article-col2-img2.png";
import article_col2_img3 from "../../../../../public/images/media-and-updates/article-col2-img3.png";
import article_col2_img4 from "../../../../../public/images/media-and-updates/article-col2-img4.png";
import article_col2_img5 from "../../../../../public/images/media-and-updates/article-col2-img5.png";
import article_col2_img6 from "../../../../../public/images/media-and-updates/article-col2-img6.png";
import article_col2_img7 from "../../../../../public/images/media-and-updates/article-col2-img7.png";

import article_col3_img1 from "../../../../../public/images/media-and-updates/article-col3-img1.png";
import article_col3_img2 from "../../../../../public/images/media-and-updates/article-col3-img2.png";
import article_col3_img3 from "../../../../../public/images/media-and-updates/article-col3-img3.png";
import article_col3_img4 from "../../../../../public/images/media-and-updates/article-col3-img4.png";
import article_col3_img5 from "../../../../../public/images/media-and-updates/article-col3-img5.png";
import article_col3_img6 from "../../../../../public/images/media-and-updates/article-col3-img6.png";
import article_col3_img7 from "../../../../../public/images/media-and-updates/article-col3-img7.png";

import article_col4_img1 from "../../../../../public/images/media-and-updates/article-col4-img1.png";
import article_col4_img2 from "../../../../../public/images/media-and-updates/article-col4-img2.png";
import article_col4_img3 from "../../../../../public/images/media-and-updates/article-col4-img3.png";
import article_col4_img4 from "../../../../../public/images/media-and-updates/article-col4-img4.png";
import article_col4_img5 from "../../../../../public/images/media-and-updates/article-col4-img5.png";
import article_col4_img6 from "../../../../../public/images/media-and-updates/article-col4-img6.png";

import article_col5_img1 from "../../../../../public/images/media-and-updates/article-col5-img1.png";
import article_col5_img2 from "../../../../../public/images/media-and-updates/article-col5-img2.png";
import article_col5_img3 from "../../../../../public/images/media-and-updates/article-col5-img3.png";
import article_col5_img4 from "../../../../../public/images/media-and-updates/article-col5-img4.png";
import article_col5_img5 from "../../../../../public/images/media-and-updates/article-col5-img5.png";
import article_col5_img6 from "../../../../../public/images/media-and-updates/article-col5-img6.png";
import article_col5_img7 from "../../../../../public/images/media-and-updates/article-col5-img7.png";

import article_col6_img1 from "../../../../../public/images/media-and-updates/article-col6-img1.png";
import article_col6_img2 from "../../../../../public/images/media-and-updates/article-col6-img2.png";
import article_col6_img3 from "../../../../../public/images/media-and-updates/article-col6-img3.png";
import article_col6_img4 from "../../../../../public/images/media-and-updates/article-col6-img4.png";
import article_col6_img5 from "../../../../../public/images/media-and-updates/article-col6-img5.png";
import article_col6_img6 from "../../../../../public/images/media-and-updates/article-col6-img6.png";

export default function Articles() {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const [progress, setProgress] = useState(0);

  // Modal states
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  const modalRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const columns = [
    [
      article_col1_img1,
      article_col1_img2,
      article_col1_img3,
      article_col1_img4,
      article_col1_img5,
      article_col1_img6,
      article_col1_img7,
      article_col1_img8,
    ],
    [
      article_col2_img1,
      article_col2_img2,
      article_col2_img3,
      article_col2_img4,
      article_col2_img5,
      article_col2_img6,
      article_col2_img7,
    ],
    [
      article_col3_img1,
      article_col3_img2,
      article_col3_img3,
      article_col3_img4,
      article_col3_img5,
      article_col3_img6,
      article_col3_img7,
    ],
    [
      article_col4_img1,
      article_col4_img2,
      article_col4_img3,
      article_col4_img4,
      article_col4_img5,
      article_col4_img6,
    ],
    [
      article_col5_img1,
      article_col5_img2,
      article_col5_img3,
      article_col5_img4,
      article_col5_img5,
      article_col5_img6,
      article_col5_img7,
    ],
    [
      article_col6_img1,
      article_col6_img2,
      article_col6_img3,
      article_col6_img4,
      article_col6_img5,
      article_col6_img6,
    ],
  ];

  // flat list used for modal navigation
  const allImages = useMemo(() => columns.flat(), [/* columns are static imports */]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const updateProgress = () => {
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const left = el.scrollLeft;
      const pct = maxScroll > 0 ? (left / maxScroll) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, Math.round(pct))));
    };

    const onScroll = () => updateProgress();

    const onPointerDown = (e) => {
      isDragging.current = true;
      try {
        e.target.setPointerCapture?.(e.pointerId);
      } catch {}
      dragStartX.current = e.clientX;
      scrollStartX.current = el.scrollLeft;
      el.classList.add(styles.isDragging);
    };

    const onPointerMove = (e) => {
      if (!isDragging.current) return;
      const dx = e.clientX - dragStartX.current;
      el.scrollLeft = scrollStartX.current - dx;
    };

    const onPointerUp = (e) => {
      if (!isDragging.current) return;
      isDragging.current = false;
      try {
        e.target.releasePointerCapture?.(e.pointerId);
      } catch {}
      el.classList.remove(styles.isDragging);
      updateProgress();
    };

    const onKeyDown = (e) => {
      if (document.activeElement !== el) return;
      if (e.key === "ArrowRight")
        el.scrollBy({
          left: Math.round(el.clientWidth * 0.8),
          behavior: "smooth",
        });
      if (e.key === "ArrowLeft")
        el.scrollBy({
          left: -Math.round(el.clientWidth * 0.8),
          behavior: "smooth",
        });
      if (e.key === "Escape") closeModal();
    };

    const ro = new ResizeObserver(updateProgress);
    ro.observe(el);

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    el.addEventListener("keydown", onKeyDown);

    updateProgress();

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("keydown", onKeyDown);
      ro.disconnect();
    };
  }, []);

  // Open modal with a given image
  const openModal = (img) => {
    // remember last focused element to restore focus on close
    lastFocusedRef.current = document.activeElement;
    const idx = allImages.indexOf(img);
    setSelectedIndex(idx >= 0 ? idx : 0);
    setSelectedImage(img);
    setModalLoading(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(null);
    setModalLoading(false);
    // restore focus to the element that had it before opening modal
    try {
      lastFocusedRef.current?.focus?.();
    } catch {}
  };

  const showNext = () => {
    if (allImages.length === 0) return;
    const next = (selectedIndex + 1) % allImages.length;
    setSelectedIndex(next);
    setSelectedImage(allImages[next]);
    setModalLoading(true);
  };

  const showPrev = () => {
    if (allImages.length === 0) return;
    const prev = (selectedIndex - 1 + allImages.length) % allImages.length;
    setSelectedIndex(prev);
    setSelectedImage(allImages[prev]);
    setModalLoading(true);
  };

  // keyboard navigation for modal
  useEffect(() => {
    if (!selectedImage) return;

    const handler = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handler);
    // focus modal container for screen readers / keyboard
    setTimeout(() => modalRef.current?.focus?.(), 0);

    return () => window.removeEventListener("keydown", handler);
  }, [selectedImage, selectedIndex]);

  return (
    <section className={styles.articlesSection} aria-label="Media coverage articles">
      <div className={styles.wrapper}>
        <div
          className={styles.viewport}
          ref={scrollRef}
          tabIndex={0}
          role="region"
          aria-label="Articles carousel"
        >
          <div className={styles.columns}>
            {columns.map((col, ci) => (
              <div className={styles.column} key={`col-${ci}`}>
                {col.map((img, ii) => (
                  <article
                    className={styles.card}
                    key={`c-${ci}-${ii}`}
                    onClick={() => openModal(img)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className={styles.cardInner}>
                      <Image
                        src={img}
                        alt={`Article ${ci + 1} - ${ii + 1}`}
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 33vw, 260px"
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                        priority={false}
                      />
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.progressWrap} aria-hidden>
          <div className={styles.progressTrack}>
            <div className={styles.progressBar} style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            tabIndex={-1}
            aria-label="Open article image"
          >
            <button
              className={styles.closeBtn}
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            {/* Prev / Next buttons */}
            <button
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={showPrev}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={showNext}
              aria-label="Next image"
            >
              ›
            </button>

            <div className={styles.imageWrap}>
              {/* Loading spinner */}
              {modalLoading && (
                <div className={styles.modalSpinner} role="status" aria-live="polite">
                  <div className={styles.spinner} />
                  <span className={styles.srOnly}>Loading image</span>
                </div>
              )}

              <Image
                src={selectedImage}
                alt="Selected Article"
                style={{ width: "100%", height: "auto", display: "block" }}
                onLoadingComplete={() => setModalLoading(false)}
                priority={true}
                className={`${styles.modalImage} ${modalLoading ? styles.loading : styles.loaded}`}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
