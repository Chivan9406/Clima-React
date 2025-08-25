import styles from './App.module.css'
import useWeather from './hooks/useWeather'
import Form from './components/Form/Form'

function App() {
  const { fetchWeather } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        <div>2</div>
      </div>
    </>
  )
}

export default App
