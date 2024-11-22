import { AdminNavbar } from '@/component/admin-navbar'
import { Link, Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className='flex flex-col gap-4'>
      <AdminNavbar />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
