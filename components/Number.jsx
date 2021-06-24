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
    // 定义number和unit，将从store的state中注入
    number: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    // 定义add和sub分别用于加和减
    add: PropTypes.func.isRequired,
    sub: PropTypes.func.isRequired,
}

const mapStateToProps = ({number,unit}) => ({
    number,unit
})
  
const mapDispatchToProps = (dispatch) => ({
    // 加和减方法其实都是dispatch对应的action
    add: () => dispatch(ADD_NUMBER),
    sub: () => dispatch(SUB_NUMBER)
})

// 使用connect把store中的State状态和自定义的用于派发action的方法合并到组件中，组件可通过props调用
export default connect(mapStateToProps,mapDispatchToProps)(Number)