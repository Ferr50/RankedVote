import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <h1 className='text-dark'>VOTAÇÃO 2° TURMA EDTECH</h1>
      <div className='code'>
        <input
          id='code'
          className='form-control form-control-lg text-center text-danger font-weight-bold'
          type='text'
          placeholder='INSIRA SEU CÓDIGO AQUI'
          aria-label='.form-control-lg example'
          autoFocus
        />
      </div>
      <div>
        <Link to={'/cast-vote'}>
          <button
            onClick={() => sessionStorage.setItem('code', document.getElementById('code').value)}
            className='btn btn-info'
          >
            VOTAR
          </button>
        </Link>
        <Link to={'/count-votes'}>
          <button className='btn btn-outline-info ml-3'>RESULTADO PRELIMINAR</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
