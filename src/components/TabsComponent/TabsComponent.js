
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import * as billsActions from '../../state/actions/bills'
import * as billsSelectors from '../../state/selectors/bills'

const TabsComponent = () => {
    const dispatch = useDispatch()
    const data = useSelector(billsSelectors.getData)
    console.log("hello world", data)

    useEffect(() => {
        dispatch(billsActions.billsRequest())
    }, [])

    return (
        <div data-testid="tabscomponent">hello world</div>
    )
}

export default TabsComponent