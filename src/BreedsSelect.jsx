// @ts-check

export const BreedsSelect = props => {
  console.log(props.breeds)
  return(
  <div id="select_div">
    <select id="select">
      <option value="grapefruit">Grapefruit</option>
      <option value="lime">Lime</option>
      <option selected value="coconut">Coconut</option>
      <option value="mango">Mango</option>
    </select>
  </div>
  )
}

export default BreedsSelect
