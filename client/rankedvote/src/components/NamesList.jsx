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
          FORTRAN
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
          14BIS
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
          EDVAC
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
          UNIVAC
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
          ADA
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
          LOVELACE
        </label>
      </div>
    </div>
  );
}

export default NamesList;
