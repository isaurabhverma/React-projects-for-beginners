# Retro Desktop Simulator

A nostalgic Windows 95-style desktop simulator built with React. Experience the classic 90s computing interface with draggable windows, working applications, and authentic retro styling.

## Features

- **Classic Windows 95 UI**: Pixel-perfect recreation of the iconic Windows 95 interface
- **Draggable Windows**: Move windows around the desktop with mouse drag
- **Multiple Applications**:
  - Calculator: Fully functional calculator with basic operations
  - Notepad: Simple text editor for notes
  - Paint: Drawing canvas with color palette and brush sizes
- **Working Taskbar**: Real-time clock and window management
- **Start Menu**: Access applications from the classic start menu
- **Desktop Icons**: Double-click to launch applications
- **Window Controls**: Minimize, maximize, and close windows

## Technologies Used

- React 18
- Vite
- Pure CSS (No external UI libraries)
- HTML5 Canvas (for Paint app)

## Installation

1. Navigate to the project directory:
```bash
cd Retro-Desktop-Simulator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit the local development URL (usually `http://localhost:5173`)

## Usage

- **Desktop Icons**: Double-click any desktop icon to open the application
- **Start Menu**: Click the Start button in the taskbar to access the menu
- **Windows**: Drag windows by their title bar to move them around
- **Window Controls**: 
  - `_` button minimizes the window
  - `□` button maximizes/restores the window
  - `×` button closes the window
- **Taskbar**: Click minimized windows in the taskbar to restore them

## Project Structure

```
Retro-Desktop-Simulator/
├── src/
│   ├── components/
│   │   ├── apps/
│   │   │   ├── Calculator.jsx
│   │   │   ├── Notepad.jsx
│   │   │   └── Paint.jsx
│   │   ├── Desktop.jsx
│   │   ├── Taskbar.jsx
│   │   ├── Window.jsx
│   │   └── StartMenu.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Contributing

This project is part of the React Projects for Beginners repository. Feel free to suggest improvements or report issues.

## License

MIT License - Part of the React Projects for Beginners collection

## Acknowledgments

- Inspired by the classic Windows 95 operating system
- Built for Hacktoberfest 2024 as a beginner-friendly React project
