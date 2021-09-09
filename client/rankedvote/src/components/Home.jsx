import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const codeHandler = (voterCode) => {
    sessionStorage.setItem('voterCode', voterCode);

    axios
      .get('http://localhost:5000/get-campaign', { headers: { params: voterCode } })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className='home'>
      <h1 className='text-dark'>RANKED VOTING SYSTEM</h1>
      <div className='code'>
        <input
          id='voterCode'
          className='form-control form-control-lg text-center text-danger font-weight-bold'
          type='text'
          placeholder='INSIRA SEU CÓDIGO AQUI'
          aria-label='.form-control-lg example'
          autoFocus
        />
      </div>
      <div>
        {/* <Link to={'/cast-vote'}> */}
        <button onClick={() => codeHandler(document.getElementById('voterCode').value)} className='btn btn-info'>
          VOTAR
        </button>
        {/* </Link> */}
        <Link to={'/count-votes'}>
          <button className='btn btn-outline-info ml-3'>RESULTADO PRELIMINAR</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
