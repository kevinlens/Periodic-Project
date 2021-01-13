import React from 'react';
import './Resources.scss';
import PostData from '../../data/provider-data.json'

function Resources() {



  return (

    <section className='container'>

      <div className='header'>
        <h1>Resource Groups {'>'} Create</h1>
        <div>
          <button className='header__buttonOne'>Cancel</button>
          <button className='header__buttonTwo'>Save</button>
        </div>
      </div>

      <div className='content'>
        <div className='sidebar'>
          <ul className='sidebar__list'>
            <li className='sidebar__item'>Basic Info</li>
          </ul>
        </div>

        <main className='info-section'>

          <div className='info-section__header'>Basic Info</div>

          <div className='main-section'>
            
            <form>
              <label className='main-section__label'>
                resource name &#42;
                <input type='text' className='main-section__input' />
              </label>
            </form>

            <form className="main-section__form" >
              <label className="main-section__label">
              provider &#42;
                <select className="main-section__select">     
                 <option selected disabled >Select</option>
                  {
                    PostData.map((item,i) => {
                      return <option key={i}>{item.name}</option>
                    })
                  } 
                </select>
              </label>
            </form>

          </div>
        </main>
        
      </div>


    </section>
  );
}

export default Resources;
