# Quiz App Documentation

## Project Overview
This is a web-based quiz application featuring gamification elements, built using React and Tailwind CSS. The app fetches quiz data from an API, presents multiple-choice questions, and provides a summary of results upon completion. The design is inspired by the Testline App and aims to provide an engaging user experience.

## Features
- **Start Quiz**: Users can begin the quiz at any time.
- **Multiple-Choice Questions**: Each question presents multiple answer options.
- **Real-Time Feedback**: Users receive immediate feedback on selected answers.
- **Gamification**: Includes scoring mechanisms to enhance user engagement.
- **Result Summary**: Displays total points scored at the end of the quiz.

## Data Integration
- The app fetches quiz data from the API: `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10`.
- Implements robust error handling for seamless user experience.

## Steps to get your api key
- visit quizapi website 
- create your account 
- click on get API token
- generate the token 

## Technical Stack
- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **State Management**: React Hooks

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Anubhav1244/gamification
   cd quizapp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Gamification Elements
- **Scoring System**: Users earn points based on correct answers.
- **Real-time Progress**: Indicates current question number and progress.
- **Engaging UI**: Designed for a smooth and interactive experience.

## Screenshots

if your marks greater than 75% then
[Quiz summary Screen](assests/summary.png)

if your marks less than 75% then
[Quiz summary Screen](assests/summary75.png)

mark your correct option 
[Quiz question screen](assests/quizquestion.png)

Home page of the quizapp
[welcome page](assests/welcome.png)


## Video Walkthrough
[video](assests/video.mp4)


