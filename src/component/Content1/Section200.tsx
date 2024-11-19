// TODO: 마지막 Item의 inner 클래스일 경우, border-color: primary
export default function Section200() {
  return (
    <div className="my-section bg-gray-237">
      <div className="my-container">
        <h2 className="my-main-title">페이포스 서비스</h2>

        <div className="data-set flex my-0 mx-[-10px] max-md:flex-wrap max-md:mt-[20px]  ">
          <Item title="BASIC" items={['카드결제']} />
          <Item title="ADVANCE" items={['카드결제', '세무지원']} />
          <Item title="PREMIUM" items={['카드결제', '세무지원', '마케팅']} />
          <Item title="ENTERPRISE" items={['카드결제', '세무지원', '마케팅', '데이터분석']} />
        </div>
      </div>
    </div>
  )
}

function Item({ title, items }: { title: string; items: string[] }) {
  return (
    <div className={`p-[10px] flex-grow flex-shrink max-md:flex-auto max-md:w-[50%] max-md:mt-[20px]`}>
      <div className={`inner bg-white p-10 border-4 border-white h-full max-md:p-[15px] max-md:border-[3px]`}>
        <h4 className="text-[1.3em] max-md:pb-[15px] max-md:mb-[15px] pb-5 mb-5 border-b border-b-gray-221 font-bold">{title}</h4>

        <ul className="text-primary">
          {items.map((title, index) => (
            <li key={index} className="first:text-black first:font-light max-md:text-[1em] relative mb-5 text-[1.2em]pl-[10px] text-primary font-bold">
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
