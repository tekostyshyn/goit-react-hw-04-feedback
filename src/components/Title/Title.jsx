import { Heading } from "./Title.styled"
import PropTypes from 'prop-types';

const Title = ({text}) => {
    return <Heading>
        {text}
    </Heading>
}

Title.propTypes = {
    text: PropTypes.string,
  };

export default Title