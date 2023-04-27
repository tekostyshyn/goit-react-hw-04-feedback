import { Paragraph } from "./Statistics.styled"
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <div>
      <Paragraph>Good: {good}</Paragraph>
      <Paragraph>Neutral: {neutral}</Paragraph>
      <Paragraph>Bad: {bad}</Paragraph>
      <Paragraph>Total: {total}</Paragraph>
      <Paragraph>Positive feedback: {positivePercentage}%</Paragraph>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
