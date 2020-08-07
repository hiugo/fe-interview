import React from 'react';
// import { render } from '../../../utils/tests';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore } from '../../../state/configureStore';

// Components
import TabsComponent from '..';

const store = configureStore();

const PROPS = {
	name: 'Bill name',
	transactions: [
		{
			amount: 82.17,
			date: '2018-01-01',
			id: 41,
		},
		{
			amount: 82.17,
			date: '2018-02-01',
			id: 42,
		},
	],
	categoryId: 21,
	id: '5a5cab88fe33900100fd8eda',
	isBill: true,
};

describe('<TabsComponent />', () => {
	it('should render properly', () => {
		const { getByTestId } = render(
			<Provider {...{ store }}>
				<TabsComponent {...PROPS} />
			</Provider>
		);

		const component = getByTestId('bill');

		expect(component).toBeVisible();
	});
    
	it('should toggle transactions correctly', () => {
		const { getByTestId } = render(
			<Provider {...{ store }}>
				<TabsComponent {...PROPS} />
			</Provider>
		);

		let component = getByTestId('transactionswrapper');

		expect(component).not.toBeVisible();
        
		fireEvent.click(getByTestId('billwrapper'));

		component = getByTestId('transactionswrapper');

		expect(component).toBeVisible();
	});
});
