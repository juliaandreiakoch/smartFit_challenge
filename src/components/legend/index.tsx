import './index.css';
import requiredMask from '../../assets/images/required-mask.png'
import recommendedMask from '../../assets/images/recommended-mask.png'
import requiredTowel from '../../assets/images/required-towel.png'
import recommendedTowel from '../../assets/images/recommended-towel.png'
import partialFountain from '../../assets/images/partial-fountain.png'
import forbiddenFountain from '../../assets/images/forbidden-fountain.png'
import freeLockerroom from '../../assets/images/recommended-lockerroom.png'
import partialLockerroom from '../../assets/images/partial-lockerroom.png'
import closedLockerrom from '../../assets/images/forbidden-lockerroom.png'
import styled from 'styled-components';


export const Legend = () => {
  return (
    <div className='parent-container'>
      <div className="legend-container">
        <div className="legend-item">
          <p className='legend-item'>Máscara</p>
          <div className='double-images'>
            <div className='image-text'>
            <img src={requiredMask} className='legend-image'/>
              <p className='legend-text'>Obrigatório</p>
            </div>
            <div className='image-text'>
            <img src={recommendedMask} className='legend-image'/>
              <p className='legend-text'>Recomendado</p>
            </div>
          </div>
        </div>

        <div className="legend-item">
          <p className='legend-item'>Toalha</p>
          <div className='double-images'>
            <div className='image-text'>
            <img src={requiredTowel} className='legend-image'/>
              <p className='legend-text'>Obrigatório</p>
            </div>
            <div className='image-text'>
            <img src={recommendedTowel} className='legend-image'/>
              <p className='legend-text'>Recomendado</p>
            </div>
          </div>
        </div>

        <div className="legend-item">
          <p className='legend-item'>Bebedouro</p>
          <div className='double-images'>
            <div className='image-text'>
              <img src={partialFountain} className='legend-image'/>
              <p className='legend-text'>Parcial</p>
            </div>
            <div className='image-text'>
              <img src={forbiddenFountain} className='legend-image'/>
              <p className='legend-text'>Proibido</p>
            </div>
          </div>
        </div>

        <div className="legend-item">
          <p className='legend-item'>Vestiários</p>
          <div className='double-images'>
            <div className='image-text'>
              <img src={freeLockerroom} className='legend-image'/>
              <p className='legend-text'>Liberado</p>
            </div>
            <div className='image-text'>
              <img src={partialLockerroom} className='legend-image'/>
              <p className='legend-text'>Parcial</p>
            </div>
            <div className='image-text'>
              <img src={closedLockerrom} className='legend-image'/>
              <p className='legend-text'>Fechado</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}