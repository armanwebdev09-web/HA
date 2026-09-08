// =================================================================
// ⚙️ PRIVATE BIRTHDAY CONFIGURATION
// Easily edit your girlfriend's name, dates, text & details below!
// =================================================================

export const birthdayConfig = {
  // Girlfriend's Name & Nicknames
  name: "Kashish",
  nickname: "My Love",
  
  // Important Dates
  birthdayDate: "14 • 09 • 2026",
  displayDateFormatted: "14 September 2026",
  
  // Hero Taglines
  heroHeadline: "HAPPY BIRTHDAY,",
  heroSubtitle: "This little world is only yours.",
  heroDescription: "A private digital sanctuary filled with our memories, love, and moments created just for you.",

  // Story Timeline: "Our Beginning"
  beginningStory: {
    title: "Our Beginning",
    subtitle: "The real chapters of how we came together",
    chapters: [
      {
        id: "ch1",
        chapterTag: "CHAPTER 01",
        title: "9th Class",
        dateLabel: "",
        highlightText: "",
        content: [
          "I saw her for the first time in 9th class.",
          "She was a little angry at her parents.",
          "I didn't know at that time that she would eventually become such an important person in my life."
        ]
      },
      {
        id: "ch2",
        chapterTag: "CHAPTER 02",
        title: "The Fair",
        dateLabel: "",
        highlightText: "",
        content: [
          "All of our friends went to a fair.",
          "That is where we actually became good friends."
        ]
      },
      {
        id: "ch3",
        chapterTag: "CHAPTER 03",
        title: "The Day She Said YES",
        dateLabel: "27 • 03 • 2024",
        highlightText: "The day you said yes.",
        content: [
          "This is the day she said YES."
        ],
        isProminent: true
      },
      {
        id: "ch4",
        chapterTag: "CHAPTER 04",
        title: "Our First Day",
        dateLabel: "29 • 03 • 2024",
        highlightText: "Our first day.",
        content: [
          "This was our first meeting after getting into the relationship.",
          "I was quite nervous, but the entire day was happy, joyful and special."
        ],
        isProminent: true
      },
      {
        id: "ch5",
        chapterTag: "CHAPTER 05",
        title: "Today",
        dateLabel: "Present Moment",
        highlightText: "",
        content: [
          "The most recent special memory is when she lays her head on my shoulder."
        ]
      }
    ]
  },

  // "The Little Things I Love About You" Configuration
  littleThingsStory: {
    title: "The Little Things I Love About You",
    subtitle: "Every small quirk, every smile, and every little moment.",
    items: [
      {
        id: "innocence",
        title: "Your Innocence",
        type: "emotional",
        iconName: "Sparkles",
        description: "The pure, sweet innocence in your heart that makes you so uniquely special.",
        badge: "Pure Heart",
        accent: "#ff4d6d"
      },
      {
        id: "anger",
        title: "Your Anger",
        type: "playful",
        iconName: "Flame",
        description: "Even when you get angry, you somehow manage to look incredibly cute.",
        badge: "Cute Fury",
        accent: "#e63946"
      },
      {
        id: "eyes",
        title: "Your Eyes",
        type: "emotional",
        iconName: "Eye",
        description: "The way your eyes speak so gently without saying a single word.",
        badge: "Mesmerizing",
        accent: "#d42b58"
      },
      {
        id: "irritated-face",
        title: "Your Irritated Face",
        type: "playful",
        iconName: "Smile",
        description: "That priceless expression you make whenever I playfully irritate you.",
        badge: "Priceless",
        accent: "#ffb703"
      },
      {
        id: "smile",
        title: "Your Smile",
        type: "emotional",
        iconName: "Heart",
        description: "The smile that lights up my entire world in a second.",
        badge: "Favorite View",
        accent: "#ff4d6d"
      },
      {
        id: "height",
        title: "Your Pocket-Sized Height 📏",
        type: "playful",
        iconName: "Ruler",
        description: "Our favorite running joke! Standing next to my favorite short person is my happiest place in the world.",
        badge: "Playful Tease",
        accent: "#b76e79"
      }
    ]
  },

  // Honest & Real Relationship Story
  relationshipStory: {
    badge: "Honest & Real",
    lines: [
      "Not perfect.",
      "Not always easy.",
      "But somehow...",
      "we always find our way back."
    ],
    realDetail: "We have broken up many times, but we come back to each other, say sorry, and things become good again.",
    closingQuote: "Maybe that's one of my favorite things about us."
  },

  // Future Dream Configuration
  futureDreamStory: {
    badge: "A Memory Waiting For Us ❄️",
    headline: "One more memory hasn't happened yet.",
    dreamTitle: "Snow Mountains Trip 🏔️",
    dreamDescription: "Enjoying our trip on the snow mountains.",
    lines: [
      "Someday...",
      "We'll stand somewhere in the snow-covered mountains.",
      "We'll make another memory."
    ],
    endingQuote: "This one is waiting for us. ❄️❤️"
  },

  // Final Closing Experience Configuration
  finalSectionStory: {
    dateLabel: "14 • 09 • 2026",
    headline: "Happy Birthday ❤️",
    summaryLines: [
      "We've laughed.",
      "We've fought.",
      "We've said sorry.",
      "We've found our way back.",
      "And we've made memories."
    ],
    beginningLine: "This is only the beginning.",
    toBeContinuedText: "TO BE CONTINUED...",
    replayButtonText: "Replay Our Story"
  },
  
  // Navigation / Feature Cards Configuration
  navigationItems: [
    {
      id: "beginning",
      title: "Our Beginning",
      subtitle: "Where our story first started",
      iconName: "Sparkles",
      badge: "Chapter 01",
      accentColor: "#ff4d6d"
    },
    {
      id: "little-things",
      title: "Little Things I Love",
      subtitle: "Every quirk, smile & funny moment",
      iconName: "Heart",
      badge: "Special",
      accentColor: "#ffb703"
    },
    {
      id: "relationship",
      title: "Finding Our Way Back",
      subtitle: "Honest, real & hopeful story",
      iconName: "RotateCcw",
      badge: "Real Us",
      accentColor: "#b76e79"
    },
    {
      id: "future",
      title: "Our Future Dream ❄️",
      subtitle: "Snowy mountains waiting for us",
      iconName: "Snowflake",
      badge: "Dream",
      accentColor: "#a2d2ff"
    },
    {
      id: "photos",
      title: "Our Photos",
      subtitle: "A gallery of our favorite smiles",
      iconName: "Camera",
      badge: "Gallery",
      accentColor: "#e63946"
    },
    {
      id: "songs",
      title: "Our Songs",
      subtitle: "The soundtrack to our love",
      iconName: "Music",
      badge: "Playlist",
      accentColor: "#ff4d6d"
    }
  ]
};
