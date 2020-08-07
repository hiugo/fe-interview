import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureStore } from '../../../state/configureStore';
import axiosMock from 'axios';

// Components
import TabsComponent from '../';

afterEach(cleanup);

const store = configureStore();

jest.mock('../../Bill', () => () => <div>Mocked Bill</div>);

describe('<TabsComponent />', () => {
	it('should render properly', async () => {
		axiosMock.get.mockResolvedValueOnce();

		const { getByTestId } = render(
			<Provider store={ store }>
				<TabsComponent />
			</Provider>
		);

		const component = getByTestId('tabscomponent');

		expect(component).toBeVisible();
	});
    
	it('should show an error message when the request fails', async () => {
		axiosMock.get.mockRejectedValueOnce(new Error('some error'));
        
		const { getByText } = render(
			<Provider store={ store }>
				<TabsComponent />
			</Provider>
		);
        
		await waitFor(() => {
			const errorText = getByText('Something went wrong!Please try again later.');
            
			expect(errorText).toBeVisible();
		});
	});
    
	it('should show a message when there are no bills', async () => {
		const data = {
			data: [],
		};
        
		axiosMock.get.mockResolvedValueOnce(data);

		const { getByText } = render(
			<Provider store={ store }>
				<TabsComponent />
			</Provider>
		);
        
		await waitFor(() => {
			const errorText = getByText('There are no bills to show.');
            
			expect(errorText).toBeVisible();
		});
	});
    
	it('should always render the correct number of bills', async () => {
		const data = {
			data: [
				{ id: 0, isBill: true },
				{ id: 1, isBill: true },
				{ id: 2, isBill: false },
			],
		};
        
		axiosMock.get.mockResolvedValueOnce(data);

		const { queryAllByText, getByText, getByAltText } = render(
			<Provider store={ store }>
				<TabsComponent />
			</Provider>
		);
        
		const loaderImage = getByAltText('loading');

		expect(loaderImage).toBeVisible();

		await waitFor(() => {
			let billsList = queryAllByText('Mocked Bill');
    
			expect(billsList.length).toBe(2);
            
			fireEvent.click(getByText('Potencial bills'));
            
			billsList = queryAllByText('Mocked Bill');
        
			expect(billsList.length).toBe(1);
		});
	});
});
