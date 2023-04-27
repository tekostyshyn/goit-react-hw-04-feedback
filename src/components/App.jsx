import { useReducer } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

const initialState = { good: 0, neutral: 0, bad: 0, total: 0 };
const options = ["good", "neutral", "bad"];

function reducer(state, action) {
  switch (action.type) {
    case 'good':
      return { ...state, good: state.good + 1 };
    case 'neutral':
      return { ...state, neutral: state.neutral + 1 };
    case 'bad':
      return { ...state, bad: state.bad + 1 };
    case 'countTotal':
      return { ...state, total: state.good + state.neutral + state.bad };
    default:
      throw new Error();
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  const leaveFeedback = option => {
    dispatch({ type: `${option}` });
    dispatch({ type: 'countTotal' });
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={leaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={state.good}
            bad={state.bad}
            neutral={state.neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
