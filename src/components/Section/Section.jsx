import Title from '../Title'
import { StyledSection } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title text={title} />
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
