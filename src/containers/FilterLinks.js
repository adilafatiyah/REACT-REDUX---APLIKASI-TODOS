
import {setFilter} from '../actions';
import { connect } from 'react-redux';
import Footer from '../components/Footer';

//function to filter
const mapDispatchToProps = dispatch => ({
    filter : val => dispatch(setFilter(val))
}) // key //value


//return connect
export default connect (
    null, mapDispatchToProps
)(Footer)