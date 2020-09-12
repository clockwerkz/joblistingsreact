//Custom Redux like Connect function
//From Article:
//https://blog.bitsrc.io/build-our-own-react-redux-using-usereducer-and-usecontext-hooks-a5574b526475
import React, {useContext} from 'react';

import { MyContext, MyProvider } from '../store/MyContext';

export default function (mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return function () {
            const {state, dispatch} = useContext(MyContext)
            //const stateToProps = mapStateToProps ? mapStateToProps(state) : {};
            const stateToProps = {};
            const dispatchToProps = mapDispatchToProps ? mapDispatchToProps(dispatch) : {};
            const props = {...props, ...stateToProps, ...dispatchToProps}
            return (
                <Component {...props} />
            )
        }
    }
}
