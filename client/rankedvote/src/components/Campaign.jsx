import React from 'react';
import useAxios from 'axios-hooks';
import axios from 'axios';
import Loading from '../components/Loading';

const Campaign = () => {
  // const [data, setData] = React.useState(false);
  const [campaign, setCampaign] = React.useState({});
  const [options, setOptions] = React.useState({});

  const [{ data, loading, error }] = useAxios(
    'http://localhost:5000/campaign/' + window.location.pathname.split('/').slice(3).join('/')
  );

  console.log(data);

  if (loading) return <Loading />;
  if (error) return <h3>Error!</h3>;

  // axios
  //   .get('http://localhost:5000/campaign', {
  //     headers: { params: window.location.pathname.split('/').slice(3).join('/') },
  //   })
  //   .then((res) => {
  //     setData(res.data);
  //     console.log(data);
  //   })
  //   .catch((err) => console.log(err));

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setCampaign((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const optionsHandler = (e) => {
    const { name, value } = e.target;

    setOptions((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const postCampaign = () => {
    Object.keys(options).forEach((key) => {
      if (options[key] === undefined) {
        delete options[key];
      }
    });

    campaign.options = { ...options };
    console.log(campaign);

    axios
      .post('http://localhost:5000/campaign/post', campaign)
      .then((res) => console.log(res))
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
    optionInput.onchange = (e) => optionsHandler(e);
  };

  //---------------------- remove input ----------------------
  const removeInput = (e) => {
    const parentNode = e.currentTarget.parentNode.parentNode;
    const parentClass = parentNode.classList[parentNode.classList.length - 1];
    parentNode.classList.add('d-none');

    setOptions((prevValue) => {
      return {
        ...prevValue,
        [parentClass]: undefined,
      };
    });
  };

  return (
    <div className='campaign'>
      <div>
        <input
          id='campaign-org'
          onChange={(e) => inputHandler(e)}
          name='org'
          value={data.org}
          className='form-control mb-2'
          type='text'
          placeholder='Nome da Organização'
        />
        <input
          id='campaign-name'
          onChange={(e) => inputHandler(e)}
          name='name'
          value={data.name}
          className='form-control mb-2'
          type='text'
          placeholder='Nome da Campanha'
        />
        <input
          id='campaign-numberOfVoters'
          onChange={(e) => inputHandler(e)}
          name='numberOfVoters'
          value={data.numberOfVoters}
          className='form-control mb-2'
          type='text'
          placeholder='Número Estimado de Eleitores'
        />

        <div id='campaign-options' className='p-0 campaign-options'>
          <div className='campaign-options-child input-group input-group-sm mb-2'>
            <input
              onChange={(e) => optionsHandler(e)}
              name='option_1'
              id='option_1'
              type='text'
              className='form-control form-control-title'
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

        {/* {setTimeout(() => {
          Object.keys(data.options).forEach((key) => {
            return (
              <div class='campaign-options-child input-group input-group-sm mb-2 option_2'>
                <input
                  name='option_2'
                  id='option_2'
                  type='text'
                  class='form-control form-control-title'
                  aria-label='campaign-option'
                  aria-describedby='inputGroup-sizing-sm'
                  placeholder='Opção de Voto'
                />
                <div class='input-group-append'>
                  <button class='btn btn-sm btn-outline-info btn-outline-danger'>
                    <i class='fas m-0 p-0 fa-minus-circle'></i>
                  </button>
                </div>
              </div>
            );
          });
        }, 1000)} */}

        <button onClick={() => postCampaign()} className='btn btn-outline-info mt-3 w-100'>
          Salvar Campanha
        </button>
      </div>
    </div>
  );
};

export default Campaign;
