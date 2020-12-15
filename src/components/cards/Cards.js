import React from 'react';
import CardItem from './CardItems';

function Cards() {
    return (
        <div className='cards' id='project'>
            <h1>My Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    <CardItem
              src='images/projects/01.png'
              text='Landing page made with React.js. Check it out.'
              label='Project'
              path='//relaxed-shirley-eee05c.netlify.app'
            />
            <CardItem
              src='images/projects/02.png'
              text='Another Landing page made with React.js. Check it out.'
              label='Project'
              path='//nostalgic-almeida-532a27.netlify.app'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/projects/03.png'
              text='Landing page made with React.js. Check it out.'
              label='Project'
              path='//ecstatic-brattain-695938.netlify.app'
            />
            <CardItem
              src='images/projects/TechZo.png'
              text='landing page made with only HTML5 and CSS3. Used Flexbox layout system.'
              label='Project'
              path='//srizvi78.github.io/flexBox.github.io/'
            />
            <CardItem
              src='images/projects/local.png'
              text='landing page made with only HTML5 and CSS3. Used Grid layout system.'
              label='Project'
              path='//srizvi78.github.io/local-club.github.io/'
            />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;