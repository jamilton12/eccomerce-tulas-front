import  { Skeleton }  from '@/components/ui/skeleton'

type skeletonSchemaType = {
  grid: number
}

export const SkeletonSchema = (props: skeletonSchemaType) => {
  const { grid } = props
  return (
    Array.from({ length: grid }).map((_, index) => (
      <div key={index} className="flex flex-col gap-8 mx-auto space-y-3">
        <Skeleton className="w-[250px] h-[125px] rounded-xl" />
        <div className='space-y-2'> 
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>  
    ))
  )
}