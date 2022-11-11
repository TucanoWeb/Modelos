import { useContext } from "react"
import { Header, Input, Datas, Button } from "../components"
import { ContextFields, ContextProps } from '../Context/Context';
import { ContainerButtons } from './stylesApp'

export default function Home() {

  const [dataField, setDataField] = useContext(ContextFields)
  const [data, setData] = useContext(ContextProps)

  return (
    <div>
      <Header />
      <div>
        <Datas />
      </div>

      {data.titular === '' &&
        <>
          <h3>
            Nome da Conta:
          </h3>
          <div>
            <Input description="Insira o nome da conta" />
          </div>
          <div>
            <Button title='Abrir Conta' onClick={() => {
              setData({
                ...data,
                titular: dataField
              })
              setDataField(0)
            }} />

          </div>
        </>
      }
      {data.titular !== '' && (
        <>
          <h3>
            Status da Conta: Aberta
          </h3>
          <h3>
            Alterar Saldo:
          </h3>
          <div>
            <Input description="Insira um valor" />
          </div>
          <ContainerButtons>
          <div>
            <Button title='Inserir Valor' onClick={() => {
              setData({
                ...data,
                saldo: data.saldo + Number(dataField)
              })
              setDataField(0)
            }} />
          </div>
          <div>
            <Button title='Retirar Valor' onClick={() => {
              setData({
                ...data,
                saldo: data.saldo - Number(dataField)
              })
              setDataField(0)
            }} />
          </div>
            </ContainerButtons>
          <h3>
            Encerrar Conta:
          </h3>
          <div>
            <Button title='Encerrar Conta' onClick={() => window.location.reload()} variant='delete' />
          </div>
        </>
      )}
    </div>
  )
}
