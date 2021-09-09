import { Link } from 'react-router-dom';

const AdminConsole = () => {
  return (
    <div className='admin-console'>
      <div className='row m-0'>
        <div className='active-campaign pl-0 col-6'>
          <h4 className='text-dark text-center'>Campanhas Ativas</h4>
          <div>
            <Link to={'/campanha/ativa/Alpha_EdTech/Nome_Turma_II'}>
              <button className='btn btn-sm btn-success w-100'>EdTech - Nome Turma II</button>
            </Link>
          </div>
        </div>
        <div className='past-campaign pr-0 col-6'>
          <h4 className='text-dark text-center'>Campanhas Anteriores</h4>
          <div>
            <button className='btn btn-sm btn-secondary w-100' disabled>
              nenhuma campanha anterior
            </button>
          </div>
        </div>
      </div>
      <Link to={'/campanha/nova-campanha'}>
        <button className='btn btn-sm btn-outline-info w-100 mt-4'>Nova Campanha</button>
      </Link>
    </div>
  );
};

export default AdminConsole;
