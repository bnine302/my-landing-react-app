import { AdminNavbar } from '@/component/admin-navbar'
import { Link, Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div>
      <AdminNavbar />

      <main>
        <Outlet /> {/* 하위 라우트의 컴포넌트가 여기에 렌더링됩니다 */}
      </main>
    </div>
  )
}
