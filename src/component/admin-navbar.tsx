import { Home, PlusCircle } from 'lucide-react'

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom'

export function AdminNavbar() {
  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4">
        {/* <h1 className="text-center text-2xl font-bold mb-4">관리자 페이지</h1> */}
        <NavigationMenu>
          <NavigationMenuList className="flex justify-center">
            <NavigationMenuItem>
              <Link to="/admin">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Home className="mr-2 h-4 w-4" />
                  관리자 메인 페이지
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/admin/add">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  랜딩 페이지 데이터 입력
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}
