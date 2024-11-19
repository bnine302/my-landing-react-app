export default function Footer() {
  return (
    <footer className="py-[30px] bg-gray-44 text-gray-136">
      <div className="my-container">
        <div className="corp-data flex flex-wrap max-md:flex-col tracking-tighter">
          {/* TODO: dl 태그 컴포넌트화 */}
          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dt>이지플랫전자결제(주)</dt>
          </dl>

          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dd className="relative pr-2 dd-after">대표</dd>
            <dt>김정훈</dt>
          </dl>

          <div className="divider w-full"></div>

          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dd className="relative pr-2 dd-after">주소</dd>
            <dt>서울특별시 서초구 동산로2길,40</dt>
          </dl>

          <div className="divider w-full"></div>

          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dd className="relative pr-2 dd-after">고객센터</dd>
            <dt>1566-9805</dt>
          </dl>

          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dd className="relative pr-2 dd-after">사업자등록번호</dd>
            <dt>124-87-24823</dt>
          </dl>

          <dl className="flex mb-[10px] mr-4 leading-[1.2]">
            <dd className="relative pr-2 dd-after">이메일</dd>
            <dt>help@b19inc.com</dt>
          </dl>
        </div>
        <p className="copyright text-[0.85em] mt-6">Copyright 이지플랫전자결제(주).CO.Ltd, ALL RIGHT RESERVED.</p>
      </div>
    </footer>
  )
}
