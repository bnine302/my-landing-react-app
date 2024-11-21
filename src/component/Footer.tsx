import { useEffect, useState } from 'react'
import { getCorpByCno } from '../api/corp'
import { Corp } from '../type/Corp'

export default function Footer() {
  const [corp, setCorp] = useState<Corp | null>(null)

  useEffect(() => {
    getCorpByCno(1).then(setCorp)
  }, [])

  return (
    <footer className="py-[30px] bg-gray-44 text-gray-136">
      <div className="my-container">
        <div className="corp-data flex flex-wrap max-md:flex-col tracking-tighter">
          {/* TODO: dl 태그 컴포넌트화 */}
          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dt>{corp?.corpName}</dt>
          </dl>

          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dd className="relative pr-2 dd-after">대표</dd>
            <dt>{corp?.ceoName}</dt>
          </dl>

          <div className="divider w-full"></div>

          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dd className="relative pr-2 dd-after">주소</dd>
            <dt>{corp?.addr}</dt>
          </dl>

          <div className="divider w-full"></div>

          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dd className="relative pr-2 dd-after">고객센터</dd>
            <dt>{corp?.tel}</dt>
          </dl>

          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dd className="relative pr-2 dd-after">사업자등록번호</dd>
            <dt>{corp?.num}</dt>
          </dl>

          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dd className="relative pr-2 dd-after">이메일</dd>
            <dt>{corp?.email}</dt>
          </dl>
        </div>
        <p className="copyright text-[0.85em] mt-6">{corp?.copyright}</p>
      </div>
    </footer>
  )
}
