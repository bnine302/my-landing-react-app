import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './page/admin/IndexPage'
import AddPage from './page/admin/AddPage'
import MainPage from './page/MainPage'
import AdminLayout from './layout/AdminLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="add" element={<AddPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
