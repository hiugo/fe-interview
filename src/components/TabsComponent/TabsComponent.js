
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import * as billsActions from '../../state/actions/bills';
import * as categoriesActions from '../../state/actions/categories';

// Selectors
import * as billsSelectors from '../../state/selectors/bills';

// Images
import loaderImage from '../../assets/loader.gif';

// Components
import Bill from '../Bill';

import {
	Wrapper,
	Container,
	TabsWrapper,
	Tab,
	Content,
	LoaderImage,
	Message,
	Details,
	DetailsItem,
} from './TabsComponent.styles';

const TABS = [
	{ id: 0, text: 'Bills' },
	{ id: 1, text: 'Potencial bills' },
];

const TabsComponent = () => {
	const dispatch = useDispatch();
	const billsData = useSelector(billsSelectors.getData) || [];
	const isLoading = useSelector(billsSelectors.getLoading);
	const isError = useSelector(billsSelectors.getError);

	const [selectedTab, setSelectedTab] = useState(0);

	useEffect(() => {
		dispatch(billsActions.billsRequest());
		dispatch(categoriesActions.categoriesRequest());
	}, []);

	const billsList = billsData && billsData.filter(bill =>
		selectedTab === 0 ? bill.isBill : !bill.isBill
	);

	let topSpend = 0;
	let totalSpend = 0;
	let totalTransactions = 0;

	billsList.map(bill => (
		bill.transactions.map(transaction => {
			if (transaction.amount > topSpend) {
				topSpend = transaction.amount;
			}
			totalSpend += transaction.amount;
			totalTransactions++;
		})
	));

	const averageSpend = totalSpend / totalTransactions;

	return (
		<Wrapper data-testid="tabscomponent">
			<Container>
				<TabsWrapper>
					{TABS.map(renderTab)}
				</TabsWrapper>
				<Details>
					<DetailsItem>
						<span>Total transactions:</span> {totalTransactions}
					</DetailsItem>
					<DetailsItem>
						<span>Top spend:</span> {topSpend}€
					</DetailsItem>
					<DetailsItem>
						<span>Average spend:</span> {averageSpend.toFixed(2)}€
					</DetailsItem>
				</Details>
				<Content>
					{renderContent()}
				</Content>
			</Container>
		</Wrapper>
	);

	function renderTab({ id, text }) {
		const isActive = id === selectedTab;
		
		return (
			<Tab
				onClick={() => setSelectedTab(id)}
				key={`tab-${id}`}
				{...{ isActive }}
			>
				{text}
			</Tab>
		);
	}

	function renderContent() {
		if (isError) {
			return (
				<Message>
					Something went wrong!<br />Please try again later.
				</Message>
			);
		}

		if (isLoading) {
			return (
				<LoaderImage
					src={loaderImage}
					alt="loading"
				/>
			);
		}

		if (!billsList.length) {
			return (
				<Message>
					There are no bills to show.
				</Message>
			);
		}

		return billsList.map(renderBill);
	}

	function renderBill(data) {
		return (
			<Bill
				key={data.id}
				{...data}
			/>
		);
	}
};

export default TabsComponent;