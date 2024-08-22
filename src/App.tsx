import FormProvider from './context/FormProvider'
import FormikForm from './component/formik/FormikForm'
import './styles/global.css'
import './styles/container.css'

const App: React.FC = () => {
  return (
    <main className="container" >
      <FormProvider>
        <FormikForm />
      </FormProvider>
    </main>
  )
}

export default App