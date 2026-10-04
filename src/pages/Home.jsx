
import "./Home.css";
import { useState, useEffect, useRef } from "react";

function Home(props) {

    let [question, setQuestion] = useState("");
    let [answer, setAnswer] = useState("");
    let [wpm, setWpm] = useState(0);
    let [accuracy, setAccuracy] = useState(0);
    let [completed, setCompleted] = useState(false);
    let startTime = useRef(null);

    let questionbox = [
        "I have 2 apples and 3 oranges, which means I can make a delicious fruit salad.",
        "Today is 12th March, 2025, and the weather forecast says it will rain later.",
        "A rectangle has 4 sides and 4 angles, making it one of the simplest shapes.",
        "The bus arrived at 8:15 AM, just in time for the students to get to school.",
        "There are 24 hours in a day, but sometimes it feels like we need more time.",
        "Room temperature is 22 degree Celsius, which is considered comfortable for most people indoors."
    ];

    function reset() {
        setQuestion(questionbox[Math.floor(Math.random() * questionbox.length)]);
        setAnswer("");
        setWpm(0);
        setAccuracy(0);
        setCompleted(false);
        startTime.current = null;
    }

    function handleChange(event) {
        if (startTime.current === null) {
            startTime.current = Date.now();
        }

        calculate(event.target.value);
        setAnswer(event.target.value);
    }

    function calculate(answer) {
        if (!startTime.current) {
            return;
        }

        let totalChar = answer.length;

        let totalRightChars = [...answer].filter(
            (ch, i) => ch === question[i]
        );

        let countRight = totalRightChars.length;

        if (totalChar === 0) {
            setWpm(0);
            setAccuracy(0);
            return;
        }

        let acc = Math.round(countRight / totalChar * 100);
        setAccuracy(acc);

        let endTime = Date.now();
        let totalTime = (endTime - startTime.current) / 60000;

        if (totalTime === 0) {
            return;
        }

        let totalWords = totalChar / 5;
        let currentWpm = Math.round(totalWords / totalTime);

        setWpm(currentWpm);

        if (question.length === answer.length) {
            if (acc >= 95 && currentWpm > props.best) {
                props.setBest(currentWpm);
            }

            setCompleted(true);
        }
    }

    useEffect(() => {
        reset();
    }, []);

    return (
        <div className="typing-container">

            <p className="question">
                {[...question].map((ele, i) => {
                    return (
                        <span
                            key={i}
                            className={
                                ele === answer[i]
                                    ? "correct"
                                    : answer[i]
                                    ? "wrong"
                                    : ""
                            }
                        >
                            {ele}
                        </span>
                    );
                })}
            </p>

            <textarea
                className="answer"
                placeholder="Start typing here..."
                onChange={handleChange}
                value={answer}
                disabled={completed}
                onPaste={(event) => event.preventDefault()}
            />

            <div className="stats">
                <p>WPM : {wpm}</p>
                <p>Accuracy: {accuracy}%</p>
            </div>

            <button onClick={reset} className="restart-btn">
                Restart
            </button>

        </div>
    );
}

export default Home;
