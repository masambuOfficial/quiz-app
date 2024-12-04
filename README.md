# Quiz App 🧠

A dynamic multiple-choice quiz application built with **Next.js**. This app fetches questions and answers from an external API, provides instant feedback, and tracks the user's score in real-time. Designed with a focus on interactivity, responsiveness, and seamless user experience.

## 🚀 Features

- **Dynamic Questions:** Fetches questions from an external API.
- **Multiple Choice Questions:** Provides a variety of questions with multiple answer options.
- **Score Tracking:** Keeps track of the user's correct answers and displays the final score.
- **Responsive Design:** Fully responsive layout for an optimal experience on both desktop and mobile devices.
- **Real-time Feedback:** Instant feedback after each question.

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) – React framework for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for fast and responsive UI development.
- [TypeScript](https://www.typescriptlang.org/) – Type-safe JavaScript for better code quality and developer experience.
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) – Used to retrieve questions and answers from the external API.

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/quiz-app.git
   cd quiz-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app in your browser:**
   ```bash
   http://localhost:3000
   ```

---

## 📂 Project Structure

```
quiz-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout for the app
│   │   └── page.tsx              # Home page displaying the quiz
│   ├── components/               # Reusable components
│   │   └── Quiz.tsx              # Main quiz component
│   ├── styles/                   # Global styles
├── public/                       # Static assets
├── README.md                     # Project documentation
└── package.json                  # Project dependencies and scripts
```

---

## 🌐 External API

The app fetches questions from an external API. You can customize the API in the code to use different questions or add new endpoints.

Default API:  
```bash
https://opentdb.com/api.php?amount=10&category=18&type=multiple
```

Feel free to change the API URL in the `fetchQuestions` function inside the `Quiz.tsx` file.

---

## 🧑‍💻 Usage

1. **Start the quiz:** Launch the application, and the quiz will automatically load the questions.
2. **Answer the questions:** Select one of the multiple-choice options for each question.
3. **View score:** At the end of the quiz, see how many questions you answered correctly.

---

## 🔧 Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run start`: Runs the built project.
- `npm run lint`: Lints the codebase.

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- [Open Trivia Database](https://opentdb.com/) – For providing the quiz questions.
- [Next.js](https://nextjs.org/) – For making server-side rendering simple and efficient.
- [Tailwind CSS](https://tailwindcss.com/) – For providing an excellent UI development framework.

---

## 📫 Contact

For any inquiries or feedback, feel free to reach out:

**Mwaka Emmanuel Lutukumoi**  
- GitHub: [masambuofficial](https://github.com/masambuofficial)  
- Email: masambue11@gmail.com

---

Happy coding! 🎉