# Strong Password Generator

A secure, customizable, and visually appealing browser extension to generate strong passwords instantly.

## Features

- **Secure Generation:** Uses `crypto.getRandomValues` for cryptographically strong random numbers.
- **Customizable Length:** Generate passwords from 6 to 50 characters long.
- **Flexible Options:** Choose to include uppercase letters, lowercase letters, numbers, and symbols.
- **One-Click Copy:** Quickly copy the generated password to your clipboard.
- **Modern UI:** Built with React and Tailwind CSS for a smooth and responsive experience.

## Installation

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to generate the production build.
4. Open your browser's extension management page:
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
5. Enable "Developer mode".
6. Click "Load unpacked" and select the `dist` folder from this project.

## Development

- `npm run dev`: Start the development server.
- `npm run build`: Build for production.
- `npm run lint`: Run ESLint.

## License

MIT
