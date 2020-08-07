
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import * as billsActions from '../../state/actions/bills';

// Selectors
import * as categoriesSelectors from '../../state/selectors/categories';

import {
	Wrapper,
	BillWrapper,
	CategoryImage,
	TextWrapper,
	Chevron,
	TransactionsWrapper,
	Transaction,
	Button,
} from './Bill.styles';

const Bill = ({
	name,
	transactions,
	categoryId,
	id,
	isBill
}) => {
	const dispatch = useDispatch();
	const categoriesData = useSelector(categoriesSelectors.getData);
	const transactionsRef = useRef();

	const [isOpen, setIsOpen] = useState(false);

	const categoryData = categoriesData && categoriesData.find(category => category.id === categoryId);

	const {
		iconUrl: categoryImage,
		name: categoryName
	} = categoryData || {};

	const transactionsHeight = transactionsRef.current && transactionsRef.current.scrollHeight;
	const buttonText = isBill ? 'Remove bill' : 'Add as bill'; 
	
	return (
		<Wrapper data-testid="bill">
			<BillWrapper
				onClick={toggleTransactions}
				data-testid="billwrapper">
				<CategoryImage
					src={categoryImage}
					alt={categoryName}
				/>
				<TextWrapper>
					<div>{name}</div>
					<div>{transactions.length} transactions</div>
				</TextWrapper>
				<Chevron {...{ isOpen }}>▼</Chevron>
			</BillWrapper>
			<TransactionsWrapper
				data-testid="transactionswrapper"
				ref={transactionsRef}
				height={isOpen ? transactionsHeight : 0}
				{...{ isOpen }}
			>
				{transactions.map(renderTransaction)}
				<Button onClick={handleUpdateBill}>{buttonText}</Button>
			</TransactionsWrapper>
		</Wrapper>
	);

	function renderTransaction({ amount, date, id }) {
		const dateString = new Date(date).toLocaleDateString('en-GB', {
			weekday: 'short',
			day: 'numeric',
			month: 'short',
			year: 'numeric'
		});

		return (
			<Transaction key={id}>
				<div>{dateString}</div>
				<div>{amount}€</div>
			</Transaction>
		);
	}

	function toggleTransactions() {
		setIsOpen(prev => !prev);
	}

	function handleUpdateBill() {
		dispatch(billsActions.updateBillRequest({ id }));
	}
};

export default Bill;