import React, { useState } from 'react';
import './Resources.scss';

// Data
import ProviderData from '../../data/provider-data.json';
import resourceData from '../../data/resource-data.json';

// Images
import plusSymbol from '../../images/plusSymbol.png';
import profilePic from '../../images/circle-K.png';

import Checkbox from './Checkbox';

function Resources() {
  //=================================STATE=========================================

  //For setting up the resource boxes based on what resource user has selected
  const [globalResource, setGlobalResource] = useState([]);

  //Value is the id of the selected provider
  const [value, setValue] = useState({
    value: 'select',
  });

  //To hide form when 'add resource' button has not been clicked
  const [form, setForm] = useState({ form: false });

  //For disabling the resource button
  const [disabled, setDisabled] = useState({
    disabled: false,
  });
  const disableEverything = disabled.disabled;

  //All the names coming from the resource-data.json file. Put into an array to be used below
  const OPTIONS = resourceData.map((item) => {
    return item.name;
  });

  //For checking/unchecking the check box
  //Should look like {checkboxes: {'Stylist Joe': false}}
  const [check, setCheck] = useState({
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false,
      }),
      {}
    ),
  });

  //=================================STATE=========================================

  //===================================SELECT PROVIDER: HANDLE ON CHANGE (HANDLE CHANGE)=========================================
  const handleChange = (event) => {
    // Set the provider value(id) for the select form
    setValue({ value: event.target.value });
    // Enables the 'Add Resource' button to be clickable 
    setDisabled({
      disabled: true,
    });
  };
  //===================================SELECT PROVIDER: HANDLE ON CHANGE (HANDLE CHANGE)=========================================

  //===================================DISPLAY FORM: TOGGLE ON/OFF=========================================

  const displayForm = form.form;

  const showForm = () => {
    setForm((prevState) => ({
      form: !prevState.form,
    }));
  };

  //===================================DISPLAY FORM: TOGGLE ON/OFF=========================================

  //===================================CREATE CHECK BOXES=========================================

  //Should create this as many times as there are the amount of names from the SELECTNAMES array
  const createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={check.checkboxes[option]}
      onCheckboxChange={handleCheckboxChange}
      key={option}
    />
  );

  // take any resource which contain an associated id to the user's selected provider
  const SELECTOPTIONS = resourceData.filter(
    (item) => item.associated_providers[0] === value.value
  );
  // create a new array with the names of the resource from the last array
  const SELECTNAMES = SELECTOPTIONS.map((item) => {
    return item.name;
  });

  const createCheckboxes = () => SELECTNAMES.map(createCheckbox);

  //===================================CREATE CHECK BOXES=========================================

  //===================================CHECK/UNCHECK=========================================

  const handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;

    //Toggle true/false based on the name of the check/unchecked boxes
    setCheck((prevState) => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name],
      },
    }));
  };
  //===================================CHECK/UNCHECK=========================================

  //===================================FORM SUBMIT=========================================

  const handleFormSubmit = (formSubmitEvent) => {
    //Prevent default
    formSubmitEvent.preventDefault();

    // Creating an array with all the names from the state object 'check' --> checkboxes (any values that are true)
    const resourceSubmit = Object.keys(check.checkboxes).filter(
      (checkbox) => check.checkboxes[checkbox]
    );
    // All the true values(meaning checked boxes) are set here for the resource boxes to reference to and create
    setGlobalResource([...resourceSubmit]);
  };
  //===================================FORM SUBMIT=========================================

  //====================JSX-JSX-JSX-JSX===================================
  //====================JSX-JSX-JSX-JSX===================================
  //====================JSX-JSX-JSX-JSX===================================
  return (
    <section className='container'>
      {/* ============================HEADER========================================== */}
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
      {/* ============================HEADER========================================== */}

      <div className='content'>
        {/* =============SIDEBAR=============== */}

        <div className='sidebar'>
          <ul className='sidebar__list'>
            <li className='sidebar__item'>Basic Info</li>
          </ul>
        </div>
        {/* =============SIDEBAR=============== */}

        <main className='info-section'>
          <div className='info-section__header'>Basic Info</div>

          <div className='main-section'>
            {/* =============RESOURCE NAME=============== */}

            <form>
              <label className='main-section__label'>
                resource name &#42;
                <input type='text' className='main-section__input' />
              </label>
            </form>
            {/* =============RESOURCE NAME=============== */}

            {/* =============SELECT PROVIDER=============== */}
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
                  {ProviderData.map((item, i) => {
                    return (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </label>
            </form>
            {/* =============SELECT PROVIDER=============== */}
          </div>

          {/* =================================RESOURCE====================================== */}

          {/* =============ADD RESOURCE=============== */}
          {/* Ternary here to prevent random form popup when user clicks on 'add resource' and then selects a provider. */}
          {/* One with the 'onClick' and one without. Based on whether or not disableEverything is true */}
          {/* disableEverything is changed if a provider is selected */}
          {disableEverything ? (
            <div className='add-resource' onClick={showForm}>
              <img src={plusSymbol} className='add-resource__image' />
              <button className='add-resource__button'>Add Resource</button>
            </div>
          ) : (
            <div className='add-resource'>
              <img src={plusSymbol} className='add-resource__image' />
              <button className='add-resource__button'>Add Resource</button>
            </div>
          )}
          {/* =============ADD RESOURCE=============== */}

          {/* =============RESOURCE FORM=============== */}
          {/* disableEverything is changed if a provider is selected */}
          {disableEverything ? (
            // Should only display form when add resource button is click on, a toggle functionality for on and off
            <div
              className='main-form'
              style={!displayForm ? { display: 'none' } : { display: 'block' }}
            >
              <form onSubmit={handleFormSubmit}>
                {createCheckboxes()}
                <div>
                  <button
                    type='submit'
                    onClick={showForm}
                    className='main-form__button'
                  >
                    Add Selected
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div></div>
          )}
          {/* =============RESOURCE FORM=============== */}

          {/* =============RESOURCE BOXES=============== */}
          <div className='resource-box-container'>
            {globalResource.map((item) => (
              <div className='resource-box'>
                <div className='resource-boxes'>
                  <img src={profilePic} className='resource-boxes__image' />

                  <div className='resource-boxes__name'>
                    <div>{item}</div>
                    <div>Required</div>
                  </div>

                  <div className='resource-boxes__close'>
                    <div className='resource-boxes__closeSideOne'>
                      <div className='resource-boxes__closeSideTwo'></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* =============RESOURCE BOXES=============== */}

          {/* =================================RESOURCE====================================== */}
        </main>
      </div>
    </section>
  );
}

export default Resources;
