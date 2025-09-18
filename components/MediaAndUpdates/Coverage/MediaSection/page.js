import React from "react";
import Image from "next/image";

import mediabrief from "../../../../public/images/media-and-updates/media-mediabrief.png";
import adgully from "../../../../public/images/media-and-updates/media-adgully.png";
import passioninmarketing from "../../../../public/images/media-and-updates/media-passioninmarketing.png";
import abpnews from "../../../../public/images/media-and-updates/media-abpnews.png";
import adobomagzine from "../../../../public/images/media-and-updates/media-adobomagzine.png";
import economictimes from "../../../../public/images/media-and-updates/media-economictimes.png";
import financialexpress from "../../../../public/images/media-and-updates/media-financialexpress.png";
import twitter from "../../../../public/images/media-and-updates/media-twitter.png";
import e4m from "../../../../public/images/media-and-updates/media-e4m.png";
import campegin from "../../../../public/images/media-and-updates/media-campegin.png";
import afaqs from "../../../../public/images/media-and-updates/media-afaqs.png";
import mom from "../../../../public/images/media-and-updates/media-mom.png";
import littleblackbook from "../../../../public/images/media-and-updates/media-littleblackbook.png";

import styles from "../../../../styles/MediaAndUpdates/Coverage/MediaSection.module.scss";

const MEDIA_ITEMS = [
  {
    id: 1,
    img: mediabrief,
    alt: "Mediabrief",
    text: "Navneet Education’s “Tr. For Teacher” campaign receives multiple prestigious accolades",
  },
  {
    id: 2,
    img: adgully,
    alt: "Adgully",
    text: "Navneet Education’s “Tr. For Teacher” campaign receives numerous awards",
  },
  {
    id: 3,
    img: passioninmarketing,
    alt: "Passion In Marketing",
    text: 'Navneet Education Limited (NEL) Wins Multiple Accolades for their "Tr. For Teacher" campaign',
  },
  {
    id: 4,
    img: abpnews,
    alt: "ABP News",
    text: "Navneet Education Limited wins multiple accolades for their campaign",
  },
  {
    id: 5,
    img: adobomagzine,
    alt: "Adobo Magazine",
    text: 'Series of wins for "Tr. For Teacher" campaign including Cannes Lions',
  },
  {
    id: 6,
    img: economictimes,
    alt: "Economic Times",
    text: "Navneet Education honours the title of the teachers this teachers day",
  },
  {
    id: 7,
    img: financialexpress,
    alt: "Financial Express",
    text: "Navneet Education rolls out its digital campaign #TrForTeacher",
  },
  {
    id: 8,
    img: twitter,
    alt: "Twitter",
    text: "In the Spotlight - Navneet Education",
  },
  {
    id: 9,
    img: e4m,
    alt: "E4M",
    text: "Navneet Education honours teachers with the title of Tr.",
  },
  {
    id: 10,
    img: campegin,
    alt: "Campaign",
    text: "Navneet Education honours the ones who make the self-made",
  },
  {
    id: 11,
    img: adgully,
    alt: "adgully",
    text: "Navneet Education campaigns to honour teachers with the title of Tr.",
  },
  {
    id: 12,
    img: afaqs,
    alt: "afaqs",
    text: "Advertising salutes educators on Teachers' Day 2022",
  },
  {
    id: 13,
    img: mediabrief,
    alt: "mediabrief",
    text: "Campaigns We Like: Navneet Education celebrates Teachers’ Day with new campaign ‘#TrForTeachers’",
  },
  {
    id: 14,
    img: mom,
    alt: "mom",
    text: "Here Are The Best Teachers’ Day Campaigns Of 2022",
  },
  {
    id: 15,
    img: littleblackbook,
    alt: "Little Black Book",
    text: 'Navneet Education Honours Teachers with the Title "Tr." in Campaign from FCB Interface',
  },
  {
    id: 16,
    img: twitter,
    alt: "twitter",
    text: "Mr. Sunil Gala (MD - Navneet Education Ltd.) speaking about Navneet Education +10% post results",
  },
  {
    id: 17,
    img: abpnews,
    alt: "abpnews",
    text: "Navneet Education Limited (NEL) Wins Multiple Accolades for their ‘Tr. For Teacher’ campaign",
  },
];

export default function MediaSection() {
  return (
    <section className={styles.mediaSection}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {MEDIA_ITEMS.map((item) => (
            <article
              key={item.id}
              className={styles.card}
              tabIndex={0}
              aria-label={item.text}
              role="article"
            >
              <div className={styles.logo}>
                <Image
                  src={item.img}
                  alt={`${item.alt} logo`}
                  width={126}
                  height={43}
                  draggable={false}
                  className={styles.logoImg}
                />
              </div>
              <p className={styles.caption}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
