import { FiltersOrigin } from "./filtersOrigin"


type FiltersControlsCategoryProps = {
  setFilterOrigin : (origin:string) => void
}

export const FiltersControlsCategory = ({ setFilterOrigin }:FiltersControlsCategoryProps) => {
  return (
    <div className="sm:w-[350px] sm:mt-5 p-6">
      <FiltersOrigin setFilterOrigin={setFilterOrigin}/>
    </div>
  )
}
