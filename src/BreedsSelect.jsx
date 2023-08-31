// @ts-check

export const BreedsSelect = (props) => {
  // console.log(props.breeds)
  const selectedBreed = props.selectedBreed
  const onChange = props.onChange
  const breedList = props.breeds.map((breed) =>
    <option value={breed} key={breed}>{breed}</option>
  )
  return(
  <div id="select_div">
    <p>breeds List</p>
    <select id="select" value={selectedBreed} onChange={onChange}>
      {breedList}
    </select>

  </div>
  )
}

export default BreedsSelect
