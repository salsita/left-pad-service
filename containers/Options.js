import { connect } from 'react-redux'

import Options from '../components/Options'
import * as RootSelectors from '../selectors/rootSelectors';

export default connect(
  RootSelectors.getOptions,
  {
    onChange: (char, width, text) => ({
      type: 'OPTIONS_CHANGED',
      payload: { char, width, text },
    })
  }
)(Options)
