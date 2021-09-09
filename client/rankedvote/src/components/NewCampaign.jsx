import React from 'react';
import axios from 'axios';

const Campaign = () => {
  const postCampaign = () => {
    let options = [];
    let optionsList = document.getElementsByClassName('options');
    Array.from(optionsList, (el) => options.push(el.value));

    let organization = document.getElementById('input-organization').value;
    let campaignName = document.getElementById('input-campaignName').value;
    let numberOfVoters = document.getElementById('input-numberOfVoters').value;
    let campaign = { organization, campaignName, numberOfVoters, options };

    console.log(campaign);
    axios
      .post('http://localhost:5000/campaign/create-campaign', { campaign })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const addInput = () => {
    const i = document.getElementsByClassName('campaign-options-child').length + 1;
    const inputs = document.getElementById('campaign-options');

    //clone and append node
    const node = document.getElementsByClassName('campaign-options-child')[0];
    const newNode = node.cloneNode(true);
    newNode.classList.add('option_' + i);
    inputs.appendChild(newNode);

    //transform 'add' button into 'delete' buttom
    const lastBtn = inputs.getElementsByClassName('btn')[i - 1];
    lastBtn.classList.add('btn-outline-danger');
    lastBtn.getElementsByClassName('fas')[0].classList.remove('fa-plus-circle');
    lastBtn.getElementsByClassName('fas')[0].classList.add('fa-minus-circle');
    lastBtn.addEventListener('click', (e) => removeInput(e));

    //setup input fields
    const optionInput = inputs.getElementsByClassName('form-control-title')[i - 1];

    optionInput.value = '';
    optionInput.id = 'option_' + i;
    optionInput.name = 'option_' + i;
  };

  //---------------------- remove input ----------------------
  const removeInput = (e) => {
    const parentNode = e.currentTarget.parentNode.parentNode;
    console.log(parentNode);
    parentNode.remove();
  };

  return (
    <div className='campaign'>
      <div>
        <input
          id='input-organization'
          name='organization'
          className='form-control mb-2'
          type='text'
          placeholder='Nome da Organização'
        />
        <input
          id='input-campaignName'
          name='campaignName'
          className='form-control mb-2'
          type='text'
          placeholder='Nome da Campanha'
        />
        <input
          id='input-numberOfVoters'
          name='numberOfVoters'
          className='form-control mb-2'
          type='text'
          placeholder='Número de Eleitores'
        />

        <div id='campaign-options' className='p-0 campaign-options'>
          <div className='campaign-options-child input-group input-group-sm mb-2'>
            <input
              name='option_1'
              id='option_1'
              type='text'
              className='options form-control form-control-title'
              aria-label='campaign-option'
              aria-describedby='inputGroup-sizing-sm'
              placeholder='Opção de Voto'
            />
            <div className='input-group-append'>
              <button onClick={addInput} className='btn btn-sm btn-outline-info'>
                <i className='fas fa-plus-circle m-0 p-0'></i>
              </button>
            </div>
          </div>
        </div>

        <button onClick={() => postCampaign()} className='btn btn-outline-info'>
          Salvar Campanha
        </button>
      </div>
    </div>
  );
};

export default Campaign;
