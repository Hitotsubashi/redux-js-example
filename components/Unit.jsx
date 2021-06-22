import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {CHANGE_UNIT} from '../store/action/unit'

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
    changeUnit: PropTypes.func.isRequired,
}

  
const mapDispatchToProps = (dispatch) => ({
    changeUnit:(unit)=>dispatch(CHANGE_UNIT(unit))
})

export default connect(null,mapDispatchToProps)(Unit)