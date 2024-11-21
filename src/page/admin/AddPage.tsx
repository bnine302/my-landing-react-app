import { useNavigate } from 'react-router-dom'
export default function AddPage() {
  const navigate = useNavigate()

  // form 제출 핸들러 추가
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    // FormData를 일반 객체로 변환
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/corps/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', // JSON 형식으로 보내기 위한 헤더 추가
        },
        body: JSON.stringify(data), // 데이터를 JSON 문자열로 변환
      })

      if (response.ok) {
        alert('저장되었습니다.')
        navigate('/admin')
      } else {
        alert('저장에 실패했습니다.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('저장 중 오류가 발생했습니다.')
    }
  }

  return (
    <div>
      <h1>랜딩 페이지 데이터 입력</h1>

      {/* 
      form action: /api/corps/1, method: PUT 
        상호명:corpName
        대표:ceoName
        주소:addr
        고객센터:tel
        사업자등록번호:num
        이메일:email
        카피라이트:copyright
      */}

      {/* 저장 버튼 클릭 시 PUT api/corps/1 요청 후 /admin 페이지로 이동 */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="corpName">상호명</label>
          <input type="text" id="corpName" name="corpName" className="w-full border-2 border-gray-200 rounded-md" />

          <label htmlFor="ceoName">대표</label>
          <input type="text" id="ceoName" name="ceoName" className="w-full border-2 border-gray-200 rounded-md" />

          <label htmlFor="addr">주소</label>
          <input type="text" id="addr" name="addr" className="w-full border-2 border-gray-200 rounded-md" />

          <label htmlFor="tel">고객센터</label>
          <input type="text" id="tel" name="tel" className="w-full border-2 border-gray-200 rounded-md" />

          <label htmlFor="num">사업자등록번호</label>
          <input type="text" id="num" name="num" className="w-full border-2 border-gray-200 rounded-md" />

          <label htmlFor="email">이메일</label>
          <input type="text" id="email" name="email" className="w-full border-2 border-gray-200 rounded-md" />

          <label htmlFor="copyright">카피라이트</label>
          <input type="text" id="copyright" name="copyright" className="w-full border-2 border-gray-200 rounded-md" />
        </div>

        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md">
          저장
        </button>
      </form>
    </div>
  )
}
