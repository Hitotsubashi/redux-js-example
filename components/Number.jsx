import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {ADD_NUMBER,SUB_NUMBER} from '../store/action/number'
import  React  from 'react';

const Number = ({add,number,unit,sub})=>{
    return (
        <div>
            <button onClick={add}>+</button>
            <span>{number}{unit}</span>
            <button onClick={sub}>-</button>
        </div>
    )
}

Number.propTypes={
    number: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    add: PropTypes.func.isRequired,
    sub: PropTypes.func.isRequired,
}

const mapStateToProps = ({number,unit}) => ({
    number,unit
})
  
const mapDispatchToProps = (dispatch, ownProps) => ({
    add: () => dispatch(ADD_NUMBER),
    sub: () => dispatch(SUB_NUMBER)
})

export default connect(mapStateToProps,mapDispatchToProps)(Number)