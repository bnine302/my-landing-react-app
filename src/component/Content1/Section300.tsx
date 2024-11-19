export default function Section300() {
  return (
    <div className="my-section">
      <div className="my-container">
        <h2 className="my-main-title mb-[100px] max-md:text-[1.6em] text-[3em] leading-[1.4em] font-bold max-md:mb-10">
          세상의 모든 결제시스템
          <br />
          Payment Gateway
        </h2>

        <div className="data-row">
          {/* data-box */}
          <div className="data-box flex rounded-[60px] overflow-hidden mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] max-md:rounded-[20px] max-md:flex-col">
            <div className="image bg-cover bg-center w-1/2 max-md:w-full max-md:pb-[70%]" style={{ backgroundImage: `url('https://pay2pos.com/img/assets/s300-1.jpeg')` }}></div>

            <div className="content bg-white py-20 px-[60px] flex-grow flex-shrink">
              <h4 className="flex flex-col mb-[60px]">
                <small className="mb-5 font-medium text-primary text-[1.2em]">Payment Gateway</small>
                <strong className="text-[2.4em] font-bold">고객 결제 서비스 제공</strong>
              </h4>

              <ul>
                {/* TODO: 물음표 대신 체크 모양 나오도록 */}
                <li
                  className="text-[1.4em] mb-10 relative pl-[30px] before:content-['\f00c'] before:block before:font-black before:absolute before:left-0 before:top-0 before:text-primary"
                  // TODO: before에 font-awesome 아이콘 사용
                  style={{ fontFamily: 'Font Awesome 5 Free' }}
                >
                  온라인 ㅣ 오프라인
                </li>
                <li className="text-[1.4em] mb-10 relative pl-[30px] before:content-['\f00c'] before:block before:font-black before:absolute before:left-0 before:top-0 before:text-primary">
                  웹사이트 결제 ㅣ 모바일 결제
                </li>
                <li className="text-[1.4em] mb-10 relative pl-[30px] before:content-['\f00c'] before:block before:font-black before:absolute before:left-0 before:top-0 before:text-primary">
                  모든 신용카드결제 ㅣ 다양한 결제
                </li>
                <li className="text-[1.4em] mb-10 relative pl-[30px] before:content-['\f00c'] before:block before:font-black before:absolute before:left-0 before:top-0 before:text-primary">
                  가상계좌 ㅣ ARS전화결제 ㅣ 실시간계좌이체
                </li>
              </ul>
            </div>
          </div>

          {/* data-box odd */}
          <div className="data-box flex rounded-[60px] overflow-hidden mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] max-md:rounded-[20px] max-md:flex-col odd flex-row-reverse max-md:flex-row-reverse">
            <div className="image bg-cover bg-center w-1/2 max-md:w-full max-md:pb-[70%]" style={{ backgroundImage: `url('https://pay2pos.com/img/assets/s300-2.jpeg')` }}></div>

            <div className="content bg-white py-20 px-[60px] flex-grow flex-shrink">
              <h4 className="flex flex-col mb-[60px]">
                <small className="mb-5 font-medium text-primary text-[1.2em]">Payment Gateway</small>
                <strong className="text-[2.4em] font-bold">고객 결제 서비스 제공</strong>
              </h4>

              <ul>
                {/* TODO: 물음표 대신 체크 모양 나오도록 */}
                <li
                  className="text-[1.4em] mb-10 relative pl-[30px] before:content-['\f00c'] before:block before:font-black before:absolute before:left-0 before:top-0 before:text-primary"
                  // TODO: before에 font-awesome 아이콘 사용
                  style={{ fontFamily: 'Font Awesome 5 Free' }}
                >
                  사업자 ㅣ 비사업자
                </li>
                <li className="text-[1.4em] mb-10 relative pl-[30px] before:content-['\f00c'] before:block before:font-black before:absolute before:left-0 before:top-0 before:text-primary">
                  유무선단말기결제 ㅣ D+1 즉시입금
                </li>
                <li className="text-[1.4em] mb-10 relative pl-[30px] before:content-['\f00c'] before:block before:font-black before:absolute before:left-0 before:top-0 before:text-primary">
                  QR코드 결제 ㅣ SMS 문자 결제
                </li>
                <li className="text-[1.4em] mb-10 relative pl-[30px] before:content-['\f00c'] before:block before:font-black before:absolute before:left-0 before:top-0 before:text-primary">
                  정기결제 ㅣ 수기결제 ㅣ 현금영수증
                </li>
              </ul>
            </div>
          </div>

          {/* data-box full */}
          <div className="data-box flex rounded-[60px] overflow-hidden mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.1)] max-md:rounded-[20px] max-md:flex-col full ">
            <div className="content max-md:p-[30px] bg-white py-20 px-[60px] flex-grow flex-shrink">
              <h4 className="flex flex-col mb-[60px] max-md:mb-[30px]">
                <small className="mb-5 font-medium text-primary text-[1.2em]">Payment Gateway</small>
                <strong className="text-[2.4em] font-bold">맞춤형 결제 서비스 제공</strong>
              </h4>

              {/* <div className="thumbs flex flex-wrap mt-[-35px]"></div> */}
              <div className="thumbs grid grid-cols-9 mt-[-35px] max-md:grid-cols-3">
                <Thumb description="성형외과" imageUrl="https://pay2pos.com/img/assets/s300-3/1-300x300.jpeg" />
                <Thumb description="성형외과" imageUrl="https://pay2pos.com/img/assets/s300-3/1-300x300.jpeg" />
                <Thumb description="성형외과" imageUrl="https://pay2pos.com/img/assets/s300-3/1-300x300.jpeg" />
                <Thumb description="성형외과" imageUrl="https://pay2pos.com/img/assets/s300-3/1-300x300.jpeg" />
                <Thumb description="성형외과" imageUrl="https://pay2pos.com/img/assets/s300-3/1-300x300.jpeg" />
                <Thumb description="성형외과" imageUrl="https://pay2pos.com/img/assets/s300-3/1-300x300.jpeg" />
                <Thumb description="성형외과" imageUrl="https://pay2pos.com/img/assets/s300-3/1-300x300.jpeg" />
                <Thumb description="성형외과" imageUrl="https://pay2pos.com/img/assets/s300-3/1-300x300.jpeg" />
                <Thumb description="성형외과" imageUrl="https://pay2pos.com/img/assets/s300-3/1-300x300.jpeg" />
                <Thumb description="성형외과" imageUrl="https://pay2pos.com/img/assets/s300-3/1-300x300.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Thumb({ description, imageUrl }: { description: string; imageUrl: string }) {
  return (
    <div className="thumb mt-[35px]">
      <div className="icon w-20 h-20 rounded-full mt-0 mx-auto mb-[15px] bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <p className="text-center text-gray-102">{description}</p>
    </div>
  )
}
