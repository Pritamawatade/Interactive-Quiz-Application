# Interactive Quiz Application

A modern, responsive interactive quiz application built with HTML, CSS, and JavaScript.

## Features

- **Interactive Questions**: Multiple-choice questions with visual feedback
- **Progress Tracking**: Visual progress bar showing quiz completion
- **Answer Feedback**: Correct answers are highlighted in green, incorrect in red
- **Score Calculation**: Final score displayed as percentage and fraction
- **Responsive Design**: Works on desktop and mobile devices
- **Restart Functionality**: Ability to restart the quiz at any time

## How to Use

1. **Start the Quiz**: Open `index.html` in your web browser
2. **Answer Questions**: Click on your chosen answer and submit
3. **Visual Feedback**: See if your answer is correct or incorrect
4. **Progress**: Track your progress through the quiz
5. **Final Score**: View your final score and performance message
6. **Restart**: Click the restart button to take the quiz again

## Files Structure

```
interactive-quiz/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Technical Implementation

### HTML Structure
- Semantic HTML5 elements
- Form inputs for answer selection
- Progress indicators
- Score display sections

### CSS Features
- Modern gradient background
- Smooth animations and transitions
- Responsive design with media queries
- Visual feedback for correct/incorrect answers
- Hover effects and interactive elements

### JavaScript Functionality
- Question data management
- Score tracking
- Answer validation
- Progress calculation
- Dynamic UI updates
- Event handling

## Customization

### Adding New Questions
Edit the `quizData` array in `script.js`:

```javascript
const quizData = [
    {
        question: "Your question here?",
        a: "Option A",
        b: "Option B",
        c: "Option C",
        d: "Option D",
        correct: "a", // Letter of correct answer
    },
    // Add more questions...
];
```

### Styling Changes
Modify `styles.css` to customize:
- Colors and themes
- Fonts and typography
- Layout and spacing
- Animations and effects

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Lightweight and fast loading
- No external dependencies
- Efficient DOM manipulation
- Smooth animations

## Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## Future Enhancements

Potential improvements could include:
- Timer functionality
- Multiple quiz categories
- Question difficulty levels
- Local storage for scores
- Sound effects
- Question explanations
