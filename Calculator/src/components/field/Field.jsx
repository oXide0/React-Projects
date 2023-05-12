import style from './Field.module.scss';
import Button from '../button/Button.jsx';
import Input from '../input/Input.jsx';
import Theme from '../Theme/Theme.jsx';
import { useState } from 'react';

export default function Field() {
	const [theme, setTheme] = useState('dark');
	const [firstOperand, setFirstOperand] = useState('');
	const [secondOperand, setSecondOperand] = useState('');
	const [sign, setSign] = useState('');
	const [finish, setFinish] = useState(false);
	const [output, setOutput] = useState(0);

	function changeTheme() {
		if (theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	}

	function clearAll() {
		setFirstOperand('');
		setSecondOperand('');
		setSign('');
		setFinish(false);
		setOutput(0);
	}

	return (
		<div
			className={theme === 'dark' ? `${style.field} ${style.dark_theme}` : `${style.field} ${style.light_theme}`}
		>
			<Theme theme={theme} changeTheme={changeTheme} />
			<Input theme={theme} value={output} setValue={setOutput} />
			<div className={style.field__controls}>
				<div className={style.field__row}>
					<Button sign='C' theme={theme} setValue={setOutput} clear={clearAll} />
					<Button
						sign='+/-'
						theme={theme}
						result={output}
						setValue={setOutput}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						operator={sign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
					/>
					<Button sign='%' theme={theme} />
					<Button
						sign='÷'
						theme={theme}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
					/>
				</div>
				<div className={style.field__row}>
					<Button
						sign='7'
						theme={theme}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
						setFinish={setFinish}
					/>
					<Button
						sign='8'
						theme={theme}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
						setFinish={setFinish}
					/>
					<Button
						sign='9'
						theme={theme}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
						setFinish={setFinish}
					/>
					<Button
						sign='×'
						theme={theme}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
					/>
				</div>
				<div className={style.field__row}>
					<Button
						sign='4'
						theme={theme}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
						setFinish={setFinish}
					/>
					<Button
						sign='5'
						theme={theme}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
						setFinish={setFinish}
					/>
					<Button
						sign='6'
						theme={theme}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
						setFinish={setFinish}
					/>
					<Button
						sign='-'
						theme={theme}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
					/>
				</div>
				<div className={style.field__row}>
					<Button
						sign='1'
						theme={theme}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
						setFinish={setFinish}
					/>
					<Button
						sign='2'
						theme={theme}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
						setFinish={setFinish}
					/>
					<Button
						sign='3'
						theme={theme}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
						setFinish={setFinish}
					/>
					<Button
						sign='+'
						theme={theme}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
					/>
				</div>
				<div className={style.field__row}>
					<Button
						sign='.'
						theme={theme}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
						setFinish={setFinish}
					/>
					<Button
						sign='0'
						theme={theme}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						setValue={setOutput}
						operator={sign}
						setOperator={setSign}
						secondOperand={secondOperand}
						setSecondOperand={setSecondOperand}
						finish={finish}
						setFinish={setFinish}
					/>
					<Button sign='⌫' theme={theme} result={output} setValue={setOutput} />
					<Button
						sign='='
						theme={theme}
						setFinish={setFinish}
						setValue={setOutput}
						firstOperand={firstOperand}
						setFirstOperand={setFirstOperand}
						operator={sign}
						secondOperand={secondOperand}
						clear={clearAll}
					/>
				</div>
			</div>
		</div>
	);
}
