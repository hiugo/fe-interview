import React from 'react';
// import { render } from '../../../utils/tests';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import { configureStore } from '../../../state/configureStore';

// Components
import TabsComponent from '../';

const mockedStore = {
    bills: {
        data: [],
    }
}

const store = configureStore(mockedStore);

describe('<TabsComponent />', () => {
    it('should render properly', () => {
        const { getByTestId } = render(
            <Provider store={ store }>
                <TabsComponent />
            </Provider>
        );

        const component = getByTestId('tabscomponent');

        expect(component).toBeVisible();
    });
});
