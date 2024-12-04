export default function QuestionCard({ question, onAnswer }) {
    const decodeHtml = (html) => {
      const txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    };
  
    const handleAnswerClick = (answer) => {
      const isCorrect = answer === question.correct_answer;
      onAnswer(isCorrect);
    };
  
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{decodeHtml(question.question)}</h2>
        <div className="grid grid-cols-1 gap-2">
          {[...question.incorrect_answers, question.correct_answer]
            .sort(() => Math.random() - 0.5)
            .map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(answer)}
                className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                {decodeHtml(answer)}
              </button>
            ))}
        </div>
      </div>
    );
  }
  