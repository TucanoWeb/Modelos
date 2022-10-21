import './App.css';
import { RegisterUser, ListUser } from '../index'
import { GetUsers } from '../Resources';


function App() {
  return (
    <div className="App">
      <GetUsers>
        {function (listUserData, setRefreshListData) {
          // Na função acima, recebe os parâmetros de GeUsers, sendo listUser e setRefreshList
          return (
            [
              //Filho de GetUser
              <RegisterUser
                key={1} //Insere a chave única para controle, tendo em vista estar sendo renderizado mais de um componente filho
                setRefreshListData={setRefreshListData} />,

                //Filho de GetUser
              <ListUser
                key={2} //Insere a chave única para controle, tendo em vista estar sendo renderizado mais de um componente filho
                listUserData={listUserData}
                setRefreshListData={setRefreshListData} />
            ]
          )
        }}
      </GetUsers>

    </div>
  );
}

export default App;
