import React, { useState } from "react";
import { Title } from "./Title";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";
import { FeedbackOptions } from "./FeedbackOptions";
import { Wrapper } from "./Wrapper";

export function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const totalFeedback = (good + neutral + bad);
  const positiveFeedbackPercentage = Math.round(good / totalFeedback * 100);

  const updateFeedback = (button) => {
    switch (button) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        console.log(`You have error in ${button}`)

    }
  }

  return (
    <Wrapper>
      <Title title={'Please leave feedback'} />
      <FeedbackOptions options={options}
        onLeaveFeedback={updateFeedback} />
      {totalFeedback === 0 ? <Notification message={"There is no feedback"} /> :
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          goodPersentage={positiveFeedbackPercentage}
        />}
    </Wrapper>)
}


