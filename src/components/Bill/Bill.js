
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
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
	NameText,
	TransactionsText,
	Amount,
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
					<NameText>{name}</NameText>
					<TransactionsText>{transactions.length} transactions</TransactionsText>
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
				<Amount>{amount}€</Amount>
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

Bill.propTypes = {
	name: PropTypes.string.isRequired,
	transactions: PropTypes.arrayOf(PropTypes.shape({
		amount: PropTypes.number.isRequired,
		date: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
	})).isRequired,
	categoryId: PropTypes.number.isRequired,
	id: PropTypes.string.isRequired,
	isBill: PropTypes.bool.isRequired,
};

export default Bill;