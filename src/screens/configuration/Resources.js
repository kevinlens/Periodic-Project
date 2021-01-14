import React, { useState, useEffect } from 'react';
import './Resources.scss';
import PostData from '../../data/provider-data.json';
import resourceData from '../../data/resource-data.json';

import URL from '../../images/icons8-plus-64.png';
import Checkbox from './Checkbox';

function Resources() {
  const OPTIONS = resourceData.map((item) => {
    return item.name;
  });

  const [check, setCheck] = useState({
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
  });

  const handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    setCheck((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };

  const createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={check.checkboxes[option]}
      onCheckboxChange={handleCheckboxChange}
      key={option}
    />
  );

  const createCheckboxes = () => SELECTNAMES.map(createCheckbox);

  //=======================================================

  const [value, setValue] = useState({
    value: 'select',
  });

  const handleChange = (event) => {
    setValue({ value: event.target.value });
    setDisabled({
      disabled: true,
    });
  };

  //=======================================================

  const SELECTOPTIONS = resourceData.filter(
    (item) => item.associated_providers[0] === value.value
  );
  const SELECTNAMES = SELECTOPTIONS.map((item) => {
    return item.name;
  });

  const [globalResource, setGlobalResource] = useState([]);
  //=======================================================

  const handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();

    const resourceSubmit = Object.keys(check.checkboxes).filter(
      (checkbox) => check.checkboxes[checkbox]
    );
    setGlobalResource([...resourceSubmit]);
  };
  //=======================================================

  const [disabled, setDisabled] = useState({
    disabled: false,
  });
  const disableEverything = disabled.disabled;

  const [form, setForm] = useState({ form: false });
  const displayForm = form.form;
  const showForm = () => {
    setForm((prevState) => ({
      form: !prevState.form,
    }));
  };

  useEffect(() => {
    console.log(globalResource);
  }, [globalResource]);

  return (
    <section className='container'>
      <div className='header'>
        {/* This just serves as an example for a potential to implement what ever resource name the user submits */}
        {globalResource.length > 0 ? (
          <h1>Resource Groups {'>'} Edit Reource Group 3</h1>
        ) : (
          <h1>Resource Groups {'>'} Create</h1>
        )}
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

            <form className='main-section__form'>
              <label className='main-section__label'>
                provider &#42;
                <select
                  value={value.value}
                  onChange={handleChange}
                  className='main-section__select'
                >
                  <option selected disabled value='select'>
                    Select
                  </option>
                  {PostData.map((item, i) => {
                    return (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </form>
          </div>

          <div className='add-resource' onClick={showForm}>
            <img src={URL} className='add-resource__image' />
            <button className='add-resource__button'>Add Resource</button>
          </div>

          {disableEverything ? (
            <div
              className='main-form'
              style={!displayForm ? { display: 'none' } : { display: 'block' }}
            >
              <form onSubmit={handleFormSubmit}>
                {createCheckboxes()}
                <div>
                  <button type='submit' className='main-form__button'>
                    Add Selected
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div></div>
          )}

          <div>
            <div></div>
            <div>hi</div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Resources;
