import './index.css';
import partialWatch from '../../assets/images/partial-watch.png'
import { useState } from 'react';

export const Form = () => {

const [checkedShift, setCheckedShift] = useState({})
const [checkedDisplayClosedGyms, setcheckedDisplayClosedGyms] = useState(false)
const shifts = ['Manhã', 'Tarde', 'Noite'];
const openingHours = ['06:00 às 12:00', '12:01 às 18:00', '18:01 às 23:00'];

const isChecked = (shift: string): boolean => {
 return (checkedShift === shift)
}

  return (
    <div className='form-container'>
      <div className='form'>
        <div className='header-form'>
          <img src={partialWatch} className='watch'/>
          <p className='simple-text'>Horário</p>
        </div>
        <div className='form-content'>
          <p className='form-title'>Qual período quer treinar?</p>
          <div className='simple-line'/>
          <div className='checkbox-container'>
            {shifts.map((shift, index) => (
            <div key={shift} className='checkbox-list'>
              <div className='checkbox-shift'> 
                <input 
                  type='radio' 
                  name={shift}
                  checked={isChecked(shift)}
                  onChange={() => setCheckedShift(shift)}
                  />
                  <div className='shift'> 
                    <p className='text-shift'>{shift}</p>
                    <p className='text-shift'>{openingHours[index]}</p>
                  </div>
              </div>
                <div className='simple-line'/>
            </div>
              ))}
          </div>
            
          <div className='checkbox-display-closed-gyms'>
            <input 
              type='checkbox' 
              name='displayClosedOnes'
              checked={checkedDisplayClosedGyms}
              onChange={() => setcheckedDisplayClosedGyms(!checkedDisplayClosedGyms)}
            />

            <div className='shift'> 
              <p className='text-shift'>Exibir unidades fechadas</p>
              <p className='text-shift'>Resultados encontrados: 0</p>
            </div>
          </div>
          
          <div className='buttons'>
            <button className='button-find' onClick={() => {}}>ENCONTRAR UNIDADE</button> 
            <button className='button-clear' onClick={() => {}}>LIMPAR</button> 
          </div>

        </div>
      </div>
    </div>
  )
}