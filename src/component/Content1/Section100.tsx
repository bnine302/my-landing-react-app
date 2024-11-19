export default function Section100() {
  return (
    <div className="my-section">
      <div
        className="
      my-container"
      >
        <h2 className="my-main-title mb-[30px]">
          토탈 마케팅 솔루션 구축으로
          <br />
          최적의 결제 플랫폼과
          <br />
          최고의 마케팅 플랫폼을 제공합니다.
        </h2>

        <h3 className="my-sub-title">
          빅데이터 로그분석 서비스와 꼼꼼한 세무지원 서비스로
          <br />
          사업주분들의 수익을 극대화 해드리는 것을 목표로 하고 있습니다.{' '}
        </h3>

        <div className="my-icon-set">
          <Icon src="https://pay2pos.com/img/assets/s100-1.png" title="개발팀" desc="어플리케이션 및 시스템" />
          <Icon src="https://pay2pos.com/img/assets/s100-2.png" title="디자인팀" desc="사용자 편의 개선" />
          <Icon src="https://pay2pos.com/img/assets/s100-3.png" title="기술팀" desc="제휴업무처 기술지원" />
          <Icon src="https://pay2pos.com/img/assets/s100-4.png" title="고객지원팀" desc="고객지원 서비스팀 운영" />
        </div>
      </div>
    </div>
  )
}

function Icon({ src, title, desc }: { src: string; title: string; desc: string }) {
  return (
    <div>
      <div className="icon" style={{ backgroundImage: `url(${src})` }}></div>
      <h4 className="text-[1.6em] font-bold mb-5 max-md:text-[1.3em] max-md:mb-[10px]">{title}</h4>
      <p className="text-primary text-[1.1em] font-light">{desc}</p>
    </div>
  )
}
