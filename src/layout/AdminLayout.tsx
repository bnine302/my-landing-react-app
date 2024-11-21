import { Link, Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div>
      <nav className="bg-gray-200">
        <h1 className="text-center text-2xl font-bold">관리자 페이지 내비게이션 바</h1>
        <ul>
          <li>
            <Link to="/admin" className="text-primary">
              관리자 메인 페이지로 이동
            </Link>
          </li>
          <li>
            <Link
              to="/admin/add"
              className="
            text-primary"
            >
              랜딩 페이지 데이터 입력 페이지로 이동
            </Link>
          </li>
          {/* 나중에 더 많은 관리자 메뉴를 여기에 추가할 수 있습니다 */}
        </ul>
      </nav>

      <main>
        <Outlet /> {/* 하위 라우트의 컴포넌트가 여기에 렌더링됩니다 */}
      </main>
    </div>
  )
}
