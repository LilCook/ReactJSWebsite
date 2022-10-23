import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these articles!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/IMG_2226.jpg'
              text='The Nike Infinity React 3: My Review'
              label='Product Review'
              path='/Articles'
            />
            <CardItem
              src='images/IMG_7206_copy.jpg'
              text='Oatlands Invitational: Behind the Big event'
              label='Invitational/Race'
              path='/Articles'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/IMG_nappy_936094.jpg'
              text='Try this workout to help boost your stamina!'
              label='Workouts/Runs'
              path='/Articles'
            />
            <CardItem
              src='images/trail-photomix.jpg'
              text='Try this trail the next time you run!'
              label='Workouts/Runs'
              path='/Articles'
            />
            <CardItem
              src='images/hazelwood-berries.jpg'
              text='How to be fueled before a race'
              label='Nutrition'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
