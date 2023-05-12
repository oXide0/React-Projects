import style from './Button.module.scss';

export default function Button(props) {
	const operators = ['=', '+', '-', '×', '÷'];
	const signs = ['C', '+/-', '%'];

	function buttonClass(sign) {
		if (operators.includes(sign)) {
			return `${style.operator} ${style.button}`;
		} else if (signs.includes(sign)) {
			return props.theme === 'dark'
				? `${style.sign_dark} ${style.button}`
				: `${style.sign_light} ${style.button} ${style.black}`;
		} else {
			return props.theme === 'dark'
				? `${style.operand_dark} ${style.button}`
				: `${style.operand_light} ${style.button} ${style.black}`;
		}
	}

	return (
		<div className={style.button__block}>
			<button className={buttonClass(props.sign)} onClick={() => elementHandler(props)}>
				{props.sign}
			</button>
		</div>
	);
}

const elementHandler = (obj) => {
	if (obj.sign === 'C') {
		obj.clear();
	} else if (obj.sign === '⌫') {
		obj.setValue(obj.result.toString().slice(0, -1));
	} else if (obj.sign === '+/-') {
		if (obj.operator === '' && obj.secondOperand === '') {
			obj.setFirstOperand(obj.firstOperand * -1);
		} else if (obj.firstOperand !== '' && obj.operator !== '' && obj.finish) {
			obj.setFirstOperand(obj.firstOperand * -1);
		} else {
			obj.setSecondOperand(obj.secondOperand * -1);
		}
		obj.setValue(obj.result * -1);
	} else if (obj.sign === '=') {
		let value;
		switch (obj.operator) {
			case '+':
				value = parseFloat(obj.firstOperand) + parseFloat(obj.secondOperand);
				break;
			case '-':
				value = parseFloat(obj.firstOperand) - parseFloat(obj.secondOperand);
				break;
			case '×':
				value = parseFloat(obj.firstOperand) * parseFloat(obj.secondOperand);
				break;
			case '÷':
				if (obj.secondOperand === '0') {
					obj.clear();
					value = 'Error';
				} else {
					value = parseFloat(obj.firstOperand) / parseFloat(obj.secondOperand);
				}
				break;
		}
		if (f(value) > 2) {
			value = value.toFixed(2);
		}
		obj.setFirstOperand(value);
		console.log(obj.firstOperand, obj.operator, obj.secondOperand);
		obj.setFinish(true);
		obj.setValue(value);
	} else {
		const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
		const operators = ['+', '-', '×', '÷'];
		if (digits.includes(obj.sign)) {
			if (obj.operator === '' && obj.secondOperand === '') {
				obj.setFirstOperand((fo) => fo + obj.sign);
				obj.setValue(obj.firstOperand + obj.sign);
			} else if (obj.firstOperand !== '' && obj.secondOperand !== '' && obj.finish) {
				obj.setSecondOperand(obj.sign);
				obj.setFinish(false);
				obj.setValue(obj.sign);
			} else {
				obj.setSecondOperand((so) => so + obj.sign);
				obj.setValue(obj.secondOperand + obj.sign);
			}
		} else if (operators.includes(obj.sign)) {
			if (obj.firstOperand === '') {
				obj.setFirstOperand(0);
			}
			obj.setOperator(obj.sign);
			obj.setValue(obj.sign);
		}
	}
};

const f = (x) => (x.toString().includes('.') ? x.toString().split('.').pop().length : 0);
