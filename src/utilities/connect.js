//Custom Redux like Connect function
//From Article:
//https://blog.bitsrc.io/build-our-own-react-redux-using-usereducer-and-usecontext-hooks-a5574b526475
import React, {useContext} from 'react';

import { MyContext } from '../store/MyContext';

export default function (mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return function (oldprops) {
            const {state, dispatch} = useContext(MyContext)
            const stateToProps = mapStateToProps ? mapStateToProps(state) : {};
            const dispatchToProps = mapDispatchToProps ? mapDispatchToProps(dispatch) : {};
            const props = {...oldprops, ...stateToProps, ...dispatchToProps}
            return (
                <Component {...props} />
            )
        }
    }
}
