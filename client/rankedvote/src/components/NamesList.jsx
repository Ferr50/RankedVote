function NamesList(props) {
  return (
    <div className='names-list'>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name={props.list + 'flexRadioDefault'}
          id={props.list + 'flexRadioDefault1'}
        />
        <label className='form-check-label' htmlFor={props.list + 'flexRadioDefault1'}>
          <i>nome #1</i>
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name={props.list + 'flexRadioDefault'}
          id={props.list + 'flexRadioDefault2'}
        />
        <label className='form-check-label' htmlFor={props.list + 'flexRadioDefault2'}>
          <i>nome #2</i>
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name={props.list + 'flexRadioDefault'}
          id={props.list + 'flexRadioDefault3'}
        />
        <label className='form-check-label' htmlFor={props.list + 'flexRadioDefault3'}>
          <i>nome #3</i>
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name={props.list + 'flexRadioDefault'}
          id={props.list + 'flexRadioDefault4'}
        />
        <label className='form-check-label' htmlFor={props.list + 'flexRadioDefault4'}>
          <i>nome #4</i>
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name={props.list + 'flexRadioDefault'}
          id={props.list + 'flexRadioDefault5'}
        />
        <label className='form-check-label' htmlFor={props.list + 'flexRadioDefault5'}>
          <i>nome #5</i>
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name={props.list + 'flexRadioDefault'}
          id={props.list + 'flexRadioDefault6'}
        />
        <label className='form-check-label' htmlFor={props.list + 'flexRadioDefault6'}>
          <i>nome #6</i>
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name={props.list + 'flexRadioDefault'}
          id={props.list + 'flexRadioDefault6'}
        />
        <label className='form-check-label' htmlFor={props.list + 'flexRadioDefault6'}>
          <i>nome #7</i>
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name={props.list + 'flexRadioDefault'}
          id={props.list + 'flexRadioDefault6'}
        />
        <label className='form-check-label' htmlFor={props.list + 'flexRadioDefault6'}>
          <i>nome #8</i>
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name={props.list + 'flexRadioDefault'}
          id={props.list + 'flexRadioDefault6'}
        />
        <label className='form-check-label' htmlFor={props.list + 'flexRadioDefault6'}>
          <i>nome #9</i>
        </label>
      </div>
    </div>
  );
}

export default NamesList;
