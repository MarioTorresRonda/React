import { useState, useCallback } from "react"

import QUESTIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png'
import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizComplete = activeQuestionIndex == QUESTIONS.length;
    
    if ( quizComplete ) {
        return <div id="summary"> 
            <img src={quizCompleteImg} alt="Trophy icon" ></img>
            <h2> Quiz Completed </h2>
        </div>
    }

    const activeQuestion = QUESTIONS[activeQuestionIndex];
    
    const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer ) {
        setUserAnswers( prevUserAnswers => [...prevUserAnswers, selectedAnswer ] ) 
    }, [] )
    
    const handleSkipAnswer = useCallback( () => {
        return handleSelectAnswer(null)
    }, [handleSelectAnswer] )
    
    return ( 
    <div id="quiz" >
        <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}/>
    </div>)
}