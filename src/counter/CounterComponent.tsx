import React, { FC } from 'react';

interface Props {
	counter: number;
	decrement(): void;
	increment(): void;
	syncDecrement(): void;
	syncIncrement(): void;
}

const counterComponent: FC<Props> = function (props) {
	const { counter, increment, syncDecrement, syncIncrement, decrement } = props;
	return (
		<div>
			<span>{counter}</span>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
			<button onClick={syncIncrement}>sync +</button>
			<button onClick={syncDecrement}>sync -</button>
		</div>
	);
};

export default counterComponent;
