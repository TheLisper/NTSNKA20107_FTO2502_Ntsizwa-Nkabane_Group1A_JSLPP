🧩 Kanban Task Board – JSL Portfolio Project
📌 Project Summary
This is a fully responsive, feature-rich Kanban task management app built as part of the JSL Portfolio Piece.
It allows users to create, edit, delete, and organize tasks across three columns—To Do, Doing, and Done—with persistent data storage and dynamic UI interactions.
The app is deployed to Netlify and styled to match the provided Figma design.
🌐 Live Demo
- Netlify Deployment: https://stalwart-biscuit-37d32b.netlify.app/
- Presentation Recording: https://screenapp.io/app/#/shared/11LlKYz-vd
🛠️ Tech Stack
- HTML, CSS, JavaScript (Vanilla)
- Local Storage API
- Modular JS Architecture
- Responsive Design (Mobile/Desktop)
- Netlify Hosting
✨ Features
🧱 Core Functionality
- Dynamic Column Rendering: Tasks are sorted into "To Do", "Doing", and "Done" columns based on status.
- Task Modal: Users can add or edit tasks via a modal form with fields for title, description, status, and priority.
- Local Storage Persistence: Tasks are saved locally and persist across sessions.
- Responsive Layout: Fully functional across mobile, tablet, and desktop devices.
🧩 Advanced Features
- Task Editing & Deletion:
- Edit existing tasks via modal.
- Delete tasks with confirmation prompts.
- Priority System:
- Tasks can be marked as High, Medium, or Low priority.
- Tasks are auto-sorted by priority within each column.
- Sidebar & Mobile Menu:
- Sidebar toggle for desktop.
- Mobile menu accessible via app logo.
- Theme toggle included in both views.
- Theme Toggle (Dark/Light Mode):
- Seamless switching between dark and light themes.
- All UI elements adapt for readability and contrast.
- API Integration:
- Tasks fetched from https://jsl-kanban-api.vercel.app/
- Loading and error states handled gracefully.
📁 File Structure
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   ├── render.js
│   ├── modal.js
│   ├── storage.js
│   ├── sidebar.js
│   └── theme.js
└── assets/
    └── icons, logos, etc.


📚 Documentation & Code Quality
- All major functions are documented using JSDoc.
- Code is modular and follows single-responsibility principles.
- Variable and function names are descriptive and consistent.
🎥 Presentation Highlights
In the recorded walkthrough, I demonstrate:
- How tasks are created, edited, and deleted.
- How local storage ensures persistence.
- How the sidebar and theme toggle work across devices.
- My approach to modular code and responsive design.
🚀 Deployment Notes
- Hosted on Netlify with custom domain.
- Optimized for performance and accessibility.
- Tested across Chrome, Firefox, and mobile browsers.
🙌 Acknowledgments
- Figma design provided by JSL Bootcamp.
- API endpoint: https://jsl-kanban-api.vercel.app/
- Built as part of the JSLPP Portfolio Piece.
