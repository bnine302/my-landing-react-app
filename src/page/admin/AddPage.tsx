import { TabBar } from '@/component/TabBar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
// import DOMPurify from 'dompurify'

export default function AddPage() {
  const navigate = useNavigate()
  const [content, setContent] = useState('')

  const mutation = useMutation({
    mutationFn: async (newContent: string) => {
      return axios.put('/api/datas/1', {
        dno: 1,
        // content: DOMPurify.sanitize(newContent)
        content: newContent
      })
    },
    onSuccess: () => {
      alert('저장되었습니다.')
      navigate('/admin')
    },
    onError: (error) => {
      console.error('Error:', error)
      alert('저장 중 오류가 발생했습니다.')
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutation.mutate(content)
  }

  const tabs = [
    {
      label: '랜딩 페이지 html 입력',
      content: (
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          <textarea
            name="content"
            value={content}
            onChange={handleChange}
            className="w-full border p-2"
            rows={10}
          />
          <Button type="submit" className="w-full">저장</Button>
        </form>
      ),
    },
    {
      label: '미리보기',
      content: (
        <div 
          dangerouslySetInnerHTML={{ 
            __html: content // script 동작은 막지만, onclick 등 이벤트는 동작함
            // __html: DOMPurify.sanitize(content) // link가 동작하지 않음
          }} 
          className='p-4 border min-h-72' 
        />
      ),
    },
  ]

  return (
    <div>
      <TabBar tabs={tabs} defaultTab={tabs[0].label} />
    </div>
  )
}