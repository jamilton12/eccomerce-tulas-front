
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationElementProps {
  currentPage: number;
  totalPages: number;
  url : string;
}


export const PaginationElement = ({ currentPage, totalPages = 1, url } : PaginationElementProps) => {
  let pages = totalPages
  let aumento = 1
  const newpage = (number: number) => {
    if (currentPage + number > totalPages || currentPage + number < 1) return `/${url}?page=${currentPage}`
    return `/${url}?page=${currentPage + number}`
  }

  if (totalPages > 10 ) {
    schema.map((item) =>{
    if (item.numero <= currentPage) {
      pages = 11
      aumento = item.numero
    } 
    })
  }
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={newpage(-1)} />
        </PaginationItem>
        {Array.from({ length: pages }).map((_, index) => {
          const isActive = (index + aumento) === currentPage ? true : false
          if (index + aumento > totalPages + 1) return
          if ( index + aumento > totalPages){
            return (
            <PaginationItem key={index + aumento}>
              <PaginationEllipsis />
            </PaginationItem>
            )
          }
          return (
          <PaginationItem key={index + aumento}>
            <PaginationLink key={index + aumento} href={`/${url}?page=${index + aumento}`} isActive={isActive} >{index + aumento}</PaginationLink>
          </PaginationItem>
        )})}
        <PaginationItem>
          <PaginationNext href={newpage(1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

const schema = [
  {
    numero : 1,
  },
  {
    numero : 10
  },
  {
    numero : 20
  },
  {
    numero : 30
  },
  {
    numero : 40
  },
  {
    numero : 50
  },
  {
    numero : 60
  },
  {
    numero : 70
  },
  {
    numero : 80
  },
  {
    numero : 90
  },
  {
    numero : 100
  },
]