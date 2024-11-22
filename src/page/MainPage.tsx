import { useQuery } from '@tanstack/react-query'
import { getDataByDno } from '@/api/data'

export default function MainPage() {
  
  const { data } = useQuery({
    queryKey: ['datas'],
    queryFn: () => getDataByDno(1)
  })

  console.log(data)
  if (!data) return null;

  return (
      <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
  )
}
