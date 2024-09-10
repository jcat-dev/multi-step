import FormProvider from './context/FormProvider'
import Form from './component/Form'
import './global.css'

const App: React.FC = () => {
  return (
    <main>
      <FormProvider>
        <Form />
      </FormProvider>
    </main>
  )
}

export default App