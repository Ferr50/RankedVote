import NamesList from './NamesList';
const axios = require('axios');

function CastVote() {
  const cast = () => {
    let votes = {};
    let i = 1;
    let radios = document.querySelectorAll('input[type="radio"]:checked');
    radios.forEach((el) => {
      votes[i] = document.getElementById(el.id).nextElementSibling.innerHTML;
      i++;
    });

    if (votes[1] === votes[2] || votes[1] === votes[3] || votes[2] === votes[3]) {
      alert('SUAS 3 OPÇÕES DE VOTO DEVEM SER DISTINTAS!');
    } else {
      const data = { code: sessionStorage.getItem('voterCode'), vote: votes };
      axios
        .post('http://localhost:5000/votes/cast', data)
        .then((res) => {
          if (res.data.error) {
            console.log(res.data);
            alert(res.data.msg);
            window.location = '/';
          } else if (res.data.success) {
            alert(res.data.msg);
            window.location = '/count-votes';
          } else {
            window.location = '/';
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className='cast-vote'>
      <h1 className='text-info'>3° TURMA EDTECH</h1>
      <div className='row m-0'>
        <div className='first-option col-4'>
          <h4 className='text-secondary mb-3'>1° Opção</h4>
          <NamesList list={1} />
        </div>
        <div className='second-option col-4'>
          <h4 className='text-secondary mb-3'>2° Opção</h4>
          <NamesList list={2} />
        </div>
        <div className='third-option col-4'>
          <h4 className='text-secondary mb-3'>3° Opção</h4>
          <NamesList list={3} />
        </div>
      </div>
      <div>
        <button onClick={() => cast()} className='w-100 btn btn-outline-info'>
          VOTAR
        </button>
      </div>
    </div>
  );
}

export default CastVote;
