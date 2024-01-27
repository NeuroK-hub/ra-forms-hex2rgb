import { useState } from 'react';
import './HexToRgb.css';

const HexToRgb = () => {

	const [input, setInputHex] = useState({
		Hex: '',
		rgb:''
	})

  const converterRGB = (hex) => {
	if (hex.length < 7) {
	  return 'Введите цвет в формате HEX'
	}
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : 'Неверный формат HEX';
 }

	const handleHexChange = (evt) => {
		const hexValue = evt.target.value;
		const calcRgb = converterRGB(hexValue);
		setInputHex(prev => ({...prev, Hex: hexValue, rgb: calcRgb}))
	}

	const onSubmitHandle = (evt) => {
		evt.eventPreventDefault();
	}

	return (
		<div className='wrapper-converter' style={{backgroundColor: input.rgb}}>
			<form className='converter-form' onSubmit={onSubmitHandle}>
				<input
					className='converter-input'
					placeholder="#000000"
					id='inputHex'
					name='inputHex'
					maxLength='7'
					value={input.Hex} 
               onChange={handleHexChange} 
				/>
				<label 
					htmlFor='inputHex' 
					className='converter-label'>
						{input.rgb}
					</label>
			</form>
		</div>)
}

export default HexToRgb;