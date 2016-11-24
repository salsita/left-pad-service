import { connect } from 'react-redux'

import PaddedText from '../components/PaddedText'
import * as TextSelectors from '../selectors/textSelectors';

export default connect(
  state => ({
    text: TextSelectors.paddedText(state),
  }),
  {}
)(PaddedText)
