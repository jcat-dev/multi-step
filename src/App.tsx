import FormProvider from './context/FormProvider'
import FormikForm from './component/Formik/FormikForm'
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