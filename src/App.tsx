import FormProvider from './context/FormProvider'
import Form from './component/Form'
import './styles/global.css'
import './styles/container.css'

const App: React.FC = () => {
  return (
    <main className="container" >
      <FormProvider>
        <Form />
      </FormProvider>
    </main>
  )
}

export default App