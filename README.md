# Romantic Birthday Website ❤️

A private, interactive, and responsive birthday website built for **14 September 2026**.

## 🛠️ Tech Stack & Dependencies

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [SCSS / Sass](https://sass-lang.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
├── public/
│   ├── photos/          # Add your personal photos here (e.g. photo1.jpg, photo2.png)
│   ├── music/           # Add your romantic background music / songs (e.g. bgm.mp3)
│   └── videos/          # Add your video clips (e.g. video1.mp4)
├── src/
│   ├── assets/          # Internal app assets (logos, static SVGs)
│   ├── components/      # Reusable UI components (Navbar, AudioPlayer, Modals, etc.)
│   ├── pages/           # Full views / Page components (Home, SpecialMemory, etc.)
│   ├── sections/        # Homepage sections (HeroSection, GallerySection, LetterSection, etc.)
│   ├── styles/          # SCSS stylesheets
│   │   ├── _variables.scss  # Color palette, font definitions, responsive breakpoints
│   │   ├── _mixins.scss     # SCSS utility mixins & responsive media queries
│   │   └── main.scss        # Global resets & primary stylesheet
│   ├── App.jsx          # Root App component
│   └── main.jsx         # Application entry point
├── index.html           # HTML template with Google Fonts (Dancing Script & Plus Jakarta Sans)
├── vite.config.js       # Vite configuration with React plugin
└── package.json         # Project dependencies & scripts
```

---

## 🚀 How to Run the Project

1. **Install dependencies** (already configured):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to `http://localhost:5173` (or the URL shown in your terminal).

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 📸 Adding Your Media (Photos, Songs & Videos)

Since **no placeholder / fake media or songs were used**:
- Place all your photos inside the `public/photos/` folder. You can reference them in your components as `/photos/your-image.jpg`.
- Place background music inside `public/music/`. You can reference audio as `/music/your-song.mp3`.
- Place video clips inside `public/videos/`. You can reference video as `/videos/your-video.mp4`.
