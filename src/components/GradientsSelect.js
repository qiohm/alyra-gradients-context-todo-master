import React, { useContext } from "react"
import {GradientsContext} from './../context/GradientsContext'
import { FilterContext } from "./../context/FilterContext"

const GradientsSelect = () => {
  const {uniqueTags} = useContext(GradientsContext)
  const { filter, setFilter } = useContext(FilterContext)
  const handleSelectChange = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div className="input-group mb-3">
      <label className="input-group-text" htmlFor="select">
        Filtrer par tag
      </label>
      <select
        className="form-select"
        id="select"
        value={filter}
        onChange={handleSelectChange}
      >
        <option value="all">Tous</option>
        {uniqueTags.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}

export default GradientsSelect
