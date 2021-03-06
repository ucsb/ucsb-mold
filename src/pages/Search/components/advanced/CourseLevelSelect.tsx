import React from "react"

import Select, { objectSelect } from "components/Select"

import AdvancedSearchEntry from "../AdvancedSearchEntry"

const courseLevels = {
  "": "All Courses",
  U: "Undergraduate - All",
  L: "Undergraduate - Lower Division",
  S: "Undergraduate - Upper Division",
  G: "Graduate"
}

type CourseLevelSelectProps = {
  value: string
  onChange: (value: string) => void
  onRemove: () => void
}

const CourseLevelSelect: React.FC<CourseLevelSelectProps> = props => {
  const { value, onChange, onRemove } = props

  return (
    <AdvancedSearchEntry onRemove={onRemove}>
      <Select
        {...objectSelect({ items: courseLevels })}
        label="Course Level"
        value={value}
        onChange={onChange}
      />
    </AdvancedSearchEntry>
  )
}

export default CourseLevelSelect
