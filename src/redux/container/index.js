import { connect } from 'react-redux'
import Home from '../../component/Home'
const mapStateToProps = (store) => {
    return {
        SpecialValue: store.SpecialReducer.data,
        ClientValue: store.ClientReducer.data
    }
}
export const StateHome = connect(
    mapStateToProps
)(Home)