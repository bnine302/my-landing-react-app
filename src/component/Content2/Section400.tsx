export default function Section400() {
  return (
    <div className="my-section bg-gray-237">
      <div
        className="
      my-container"
      >
        <h2 className="my-main-title max-md:mb-[15px] mb-20">
          사업자별 특성에 맞춘
          <br />
          최적화 된 세무사를 만나보세요
        </h2>

        <h3 className="my-sub-title">
          사업자별 맞춤형 세무지원 서비스를
          <br />
          저렴한 이용료와 최적화된 절세 혜택 제공으로 최고의 이익을 설계해 드립니다.
        </h3>

        <div className="data-row flex mt-[70px] max-md:flex-col max-md:mt-[30px]">
          <DataBox imageUrl="https://pay2pos.com/img/assets/s400-1.jpeg" title="자료요청 없는 세무사" content="간단한 초기설정으로<br>추가자료를 요청하지 않습니다." />
          <DataBox
            imageUrl="https://pay2pos.com/img/assets/s400-2.jpeg"
            title="사업 리포트 제공
"
            content="세무사가 사업을 위한<br>
절세 분석 리포트를 제공합니다."
          />
          <DataBox
            imageUrl="https://pay2pos.com/img/assets/s400-3.jpeg"
            title="전용 앱 제공
"
            content="사업에 필수적인 세무회계 데이터를<br>
실시간으로 제공합니다."
          />
        </div>
      </div>
    </div>
  )
}

function DataBox({ imageUrl, title, content }: { imageUrl: string; title: string; content: string }) {
  return (
    <div className="data-box flex-grow flex-shrink mr-10 max-md:mr-0 max-md:mt-10 last:mr-0 flex flex-col">
      <div className="image pb-[70%] bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>

      <div className="content max-md:py-[30px] max-md:px-[25px] py-[30px] px-10 bg-white flex-1 flex flex-col">
        <h4 className="max-md:text-[1.4em] max-md:mb-[15px] text-[1.6em] font-semibold mb-5">{title}</h4>

        <p className="max-md:text-[1em] text-[1.3em] text-gray-102 leading-[1.4em] font-light flex-1" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}
