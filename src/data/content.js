// Site content for the homepage, workshops, testimonies, and contact sections.

export const site = {
  name: "Evang. Chuks Chidube",
  firstName: "Evang.",
  lastName: "Chidube",
  role: "Gospel Minister, Singer & Motivational Speaker",
  phone: "+234 803 328 2359",
  email: "chukschidube@gmail.com",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Ministry", href: "#keynotes" },
  { label: "Counselling Corner", href: "#workshops" },
  { label: "Testimonies", href: "#testimonies" },
  { label: "Blog", href: "#/blog" },
];

export const hero = {
  eyebrow: "This is",
  headline: site.name,
  tagline: "Ministering Through Music, the Word, and Marriage Counselling",
  description:
    "Ordained minister, award-winning Gospel recording artiste, and author helping individuals, marriages, and congregations grow in faith and purpose.",
  primaryCta: `Book ${site.firstName} to Speak`,
};

export const visionStatement = {
  eyebrow: "Ordained Minister · Gospel Artiste · Author",
  heading: "Called to Minister Through Music and the Word",
  body: "Since giving his life to Christ in 1984, Evang. Chuks Chidube has used music, teaching, and counsel to strengthen faith, marriages, and communities across Africa and beyond.",
};

export const about = {
  eyebrow: "About Evang. Chuks Chidube",
  heading: "Meet Evang. Chuks Chidube",
  body: "Evang. Chuks Chidube — the brain behind the fast-selling Gospel album DIS KIND GOD and leader of the organization PRAISE CHANNEL — is an ordained minister of the Gospel of our Lord Jesus Christ. He is a singer, producer, multi-instrumentalist, marriage counsellor, motivational speaker, and author. A native of Adazi-Enu, Anaocha LGA, Anambra State, and born in Abakaliki, he became born again on 15th April 1984 at All Saints Anglican Church, Abakaliki, and was ordained in February 2000 by Pastor Paul Adefarasin of House On The Rock, Lagos. Over more than three decades of ministry, he has released over twenty Gospel albums, sings in about thirty-eight African languages, and holds an honorary doctorate from Jordan Institute, USA.",
  cardTitle: "Gospel Minister · Author · Marriage Counsellor",
  cardCta: `Book ${site.firstName} to Speak`,
  linkLabel: `More About ${site.firstName}`,
};

export const quote = {
  line1: "Music can lift a soul.",
  line2: "The Word can transform a life.",
  sub: "For over three decades, Evang. Chuks Chidube has combined song, scripture, and sound counsel to help people grow in faith, marriage, and purpose.",
};

export const workHelps = {
  heading: "My ministry helps you grow by:",
  items: [
    "Deepening your walk with God through music and the Word",
    "Strengthening marriages through practical, faith-based counsel",
    "Equipping the next generation of Gospel artistes and producers",
    "Bringing faith-centered motivational teaching to your event",
    "Producing excellent, anointed Gospel music at Praise Channel Studios",
  ],
  cta: `Book ${site.firstName} to Speak`,
};

export const keynotesSection = {
  eyebrow: "Ministry",
  heading: "Ministration",
  viewMoreLabel: "View More",
  viewMoreHref: "https://youtube.com/@praise.channeltv?si=_RdLHXGFiSoTJRMv",
  talks: [
    {
      title: "Ministration 1",
      description: "Upcoming video content will appear here.",
      iframe: "https://www.youtube.com/embed/rIbt8IwSz5A?si=WxIE6MiKwyTtDlMi",
    },
    {
      title: "Ministration 2",
      description: "Upcoming video content will appear here.",
      iframe: "https://www.youtube.com/embed/nqvya_TF30U?si=m0Z14avqSgrxTIDZ",
    },
    {
      title: "Ministration 3",
      description: "Upcoming video content will appear here.",
      iframe: "https://www.youtube.com/embed/SEoSjMiplpc?si=_ncPd3OaDpwyNE4j",
    },
    {
      title: "Ministration 4",
      description: "Upcoming video content will appear here.",
      iframe: "https://www.youtube.com/embed/Y1MLwDBSH0o?si=VIh0pUnC1eJ174IQ",
    },
  ],
};

export const workshopsSection = {
  heading: "Counselling Corner",
  programs: [
    {
      title: "Single and Married .com",
      description:
        "Single and Married is a session where Evang Chuks Chidube and other marriage counsellors teach practical truths about building strong, healthy marriages.",
      ctaLabel: "Chat on WhatsApp",
      ctaHref:
        "https://wa.me/2348033282359?text=Hello%20Evang%20Chuks%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20Single%20and%20Married%20session.",
    },
  ],
};

export const framework = {
  eyebrow: "Author",
  heading: "Books by Evang Chuks Chidube",
  subheading: "Teaching on ministry, marriage, and purpose",
  linkLabel: `View ${site.firstName}'s Ministration Topics`,
  steps: [
    {
      number: "01",
      title: "The Music Minister",
      body: "A resource for ministers seeking clarity and impact.",
    },
    {
      number: "02",
      title: "The Working Marriage",
      body: "Practical guidance for strong, lasting marriages.",
    },
    {
      number: "03",
      title: "72 Keys to Unlock Your Prosperity",
      body: "A devotional guide to purpose, discipline, and growth.",
    },
    {
      number: "04",
      title: "More titles on the way",
      body: "More books are in preparation and will be shared soon.",
    },
  ],
};

export const book = {
  eyebrow: "New Release",
  heading: "DIS KIND GOD, Vol. 2 — Available Now",
  title: "Available in Audio & Video",
  subtitle:
    "The sequel to one of the best-selling Gospel albums across Africa and the diaspora.",
  description:
    "Following the massive success of DIS KIND GOD, Evang Chuks Chidube has released Volume 2, available now in both audio and video. In the coming months he marks thirty years of ministry as a Gospel artiste and preacher.",
};

export const testimonial = {
  eyebrow: "Testimonies",
  heading: `Stories From People ${site.firstName} Has Counseled`,
  items: [
    {
      quote:
        "The counsel I received helped me restore peace and direction in my home.",
      author: "Mrs. A. Okafor",
      role: "Counselled Person",
    },
    {
      quote:
        "His words brought clarity, healing, and renewed hope during a difficult season.",
      author: "Mr. T. Eze",
      role: "Counselled Person",
    },
    {
      quote:
        "I left every session encouraged, strengthened, and more grounded in faith.",
      author: "Miss. C. Nwosu",
      role: "Counselled Person",
    },
  ],
};

export const contact = {
  heading: "Ready to Connect?",
  body: "Whether it’s a ministry engagement, marriage seminar, or a personal connection, feel free to reach out through the contact options below.",
};

export const footer = {
  tagline:
    "Gospel Minister · Singer · Producer · Author · Motivational Speaker",
  copyright: `© ${new Date().getFullYear()} ${site.name}. All rights reserved.`,
};
