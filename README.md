# TypoMeter

A sleek, real-time typing speed test application built with React. Measure your typing speed (WPM), track accuracy, and compete with your personal best scores!

## Features

✨ **Real-Time Performance Tracking**
- Live WPM (Words Per Minute) calculation
- Accuracy percentage displayed as you type
- Instant visual feedback with color-coded characters

🎨 **Dark Mode Support**
- Toggle between light and dark themes
- Smooth theme transitions

🏆 **Score Management**
- Automatically tracks your best score
- Manual score reset option with confirmation
- Best score displayed in navbar

⚡ **Responsive Design**
- Works seamlessly on desktop, tablet, and mobile
- Centered, adaptive layout
- Beautiful gradient backgrounds

🎯 **Typing Features**
- Multiple practice sentences
- Character-by-character feedback (green for correct, red for incorrect)
- Paste prevention for fair testing
- Disabled input on completion

## Tech Stack

- **Frontend**: React 18+
- **Styling**: CSS3 with gradients and transitions
- **State Management**: React Hooks (useState, useEffect, useRef)
- **Build Tool**: Vite

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/austinn-exe/typometer.git
cd typometer

# Install dependencies
npm install

# Start the development server
npm run dev
```

Navigate to `http://localhost:5173` in your browser.

## Usage

1. **Start Typing**: Click on the text area and begin typing the displayed sentence
2. **View Stats**: Watch your WPM and Accuracy update in real-time
3. **Complete**: Finish typing the entire sentence to complete the test
4. **Auto-Save**: If accuracy is 95%+ and WPM beats your best, it auto-saves
5. **Restart**: Click the "Restart" button to try another sentence
6. **Toggle Theme**: Use the theme button in the navbar
7. **Reset Score**: Click the reset button (↻) to manually clear your best score
