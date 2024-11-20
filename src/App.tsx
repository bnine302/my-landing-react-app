import Content1 from './component/Content1/Content1'
import Content2 from './component/Content2/Content2'
import Content3 from './component/Content3/Content3'
import Footer from './component/Footer'
import Section from './component/Section'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex-shrink-0">
        {/* <Section /> */}
        {/* <Content1 /> */}
        {/* <Content2 /> */}
        <Content3 />
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
