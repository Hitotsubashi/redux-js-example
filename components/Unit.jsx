import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {CHANGE_UNIT} from '../store/action/unit'
import  React  from 'react';

// Unit组件逻辑
const Unit = ({changeUnit})=>{
    return (
        <div>
            <button onClick={()=>changeUnit('m')}>m</button>
            <button onClick={()=>changeUnit('cm')}>cm</button>
            <button onClick={()=>changeUnit('mm')}>mm</button>
        </div>
    )
}

Unit.propTypes={
    // 定义changeUnit用于转换单位
    changeUnit: PropTypes.func.isRequired,
}

  
const mapDispatchToProps = (dispatch) => ({
    changeUnit:(unit)=>dispatch(CHANGE_UNIT(unit))
})

export default connect(null,mapDispatchToProps)(Unit)