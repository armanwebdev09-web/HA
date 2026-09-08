// =================================================================
// 📸 CENTRALIZED PHOTO CONFIGURATION
// =================================================================

export const photoConfig = {
  // Folder 1: 01-first-sight
  firstSight: {
    title: "First Sight (9th Class)",
    folderPath: "/photos/01-first-sight/",
    photos: []
  },

  // Folder 2: 02-fair
  fair: {
    title: "The Fair",
    folderPath: "/photos/02-fair/",
    photos: []
  },

  // Folder 3: 03-she-said-yes
  sheSaidYes: {
    title: "She Said YES",
    folderPath: "/photos/03-she-said-yes/",
    photos: []
  },

  // Folder 4: 04-first-day-together
  firstDay: {
    title: "Our First Day Together",
    folderPath: "/photos/04-first-day-together/",
    photos: []
  },

  // Folder 5: 05-shoulder
  shoulder: {
    title: "Head on Shoulder",
    folderPath: "/photos/05-shoulder/",
    photos: []
  },

  // Folder 6: gallery (16 Photos Registered)
  gallery: {
    title: "Our Special Memories Gallery ❤️",
    folderPath: "/photos/gallery/",
    photos: [
      { src: "/photos/gallery/1.jpeg", date: "Memory 01" },
      { src: "/photos/gallery/2.jpeg",  date: "Memory 02" },
      { src: "/photos/gallery/3.jpeg",  date: "Memory 03" },
      { src: "/photos/gallery/4.jpeg",  date: "Memory 04" },
      { src: "/photos/gallery/5.jpeg",  date: "Memory 05" },
      { src: "/photos/gallery/6.jpeg",  date: "Memory 06" },
      { src: "/photos/gallery/7.jpeg",  date: "Memory 07" },
      { src: "/photos/gallery/8.jpeg",  date: "Memory 08" },
      { src: "/photos/gallery/9.jpeg",  date: "Memory 09" },
      { src: "/photos/gallery/10.jpeg", date: "Memory 10" },
      { src: "/photos/gallery/11.jpeg", date: "Memory 11" },
      { src: "/photos/gallery/12.jpeg", date: "Memory 12" },
      { src: "/photos/gallery/WhatsApp Image 2026-08-29 at 2.18.20 PM.jpeg", date: "Recent" },
      { src: "/photos/gallery/WhatsApp Image 2026-08-29 at 2.18.21 PM.jpeg",  date: "Recent" },
      { src: "/photos/gallery/WhatsApp Image 2026-08-29 at 2.18.22 PM.jpeg",  date: "Recent" },
      { src: "/photos/gallery/WhatsApp Image 2026-08-29 at 2.18..22 PM.jpeg",  date: "Recent" }
    ]
  },

  // Folder 7: locked
  locked: {
    title: "Private Memories 🔐",
    folderPath: "/photos/locked/",
    photos: []
  }
};

// Helper: Get photos by key
export const getPhotosByCategory = (key) => {
  return photoConfig[key]?.photos || [];
};

// Helper: Get all non-empty photos across categories
export const getAllPhotos = () => {
  return Object.values(photoConfig).flatMap(cat => cat.photos);
};
