# Celebrate - Photo Gallery App

A modern, responsive photo gallery application built with Next.js, React, and Tailwind CSS. This app fetches random photos from the Picsum API and allows users to browse, search, and favorite images.

## Features

- **Photo Gallery**: Display random photos from Picsum API
- **Search Functionality**: Search photos by author name
- **Favorites System**: Mark photos as favorites and manage them
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, minimalist design with smooth animations
- **Lazy Loading**: Images load progressively for better performance

## Tech Stack

- **Next.js 16.1.6**: React framework with App Router
- **React 19.2.3**: JavaScript library for building user interfaces
- **TypeScript**: Type-safe JavaScript development
- **Tailwind CSS 4**: Utility-first CSS framework
- **ESLint**: Code linting and quality assurance

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Chanakya-Das-Sahu/Celebrare.git
   cd Celebrare
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
celebrate/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Global styles
│   └── favicon.ico       # Site favicon
├── src/
│   ├── components/
│   │   ├── Gallery.tsx   # Main gallery component
│   │   └── PhotoCard.tsx # Individual photo card
│   ├── hooks/
│   │   └── useFetchPhotos.ts # Photo fetching hook
│   └── reducer/
│       └── favoritesReducer.ts # Favorites state management
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Usage

1. **Browse Photos**: The app automatically fetches 30 random photos from Picsum API on load.

2. **Search Photos**: Use the search bar to filter photos by author name.

3. **Favorite Photos**: Click the heart icon on any photo to mark it as a favorite.

4. **Responsive Design**: The gallery automatically adjusts to different screen sizes:
   - Mobile: 1 column
   - Tablet: 2 columns  
   - Desktop: 4 columns

## API Integration

The app uses the [Picsum Photos API](https://picsum.photos/) to fetch random images. The API endpoint used is:
```
https://picsum.photos/v2/list?limit=30
```

## Performance Considerations

- **Lazy Loading**: Images use native lazy loading for better performance
- **Component Memoization**: PhotoCard components are wrapped in React.memo
- **Search Optimization**: Uses useMemo for efficient filtering
- **State Management**: Uses useReducer for predictable state updates

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for code consistency
- Tailwind CSS for utility-first styling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For any questions or issues, please refer to the project documentation or create an issue in the GitHub repository.