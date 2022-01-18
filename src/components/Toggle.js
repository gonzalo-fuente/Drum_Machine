import React, { useState } from "react"

const Toggle = ({
  className = "",
  checked = false,
  onChange = () => {},
  icon,
  ...newProps
}) => {
  const [check, setCheck] = useState(checked)
  let finalClass = `${className} relative w-12 h-6 flex select-none cursor-pointer`
  let togglerClass =
    "h-6 w-6 border-2 absolute z-10 rounded-full bg-white transition-transform duration-300 ease-in-out flex justify-center items-center"
  let backgroundClass =
    "absolute left-0 top-0 h-full w-full bg-gray-100 rounded-full"
  if (check) {
    backgroundClass += " bg-blue-600"
    togglerClass += " transform translate-x-full border-blue-500"
  } else {
    backgroundClass += " bg-gray-100"
    togglerClass += " border-gray-100"
  }
  return (
    <div className="flex items-center">
      <label
        className={finalClass}
        onClick={() => {
          setCheck(!check)
          onChange(!check)
        }}
        {...newProps}
      >
        <span className={backgroundClass} />
        <span className={togglerClass}>
          {icon &&
            React.cloneElement(icon, {
              className: "text-xs text-gray-800",
            })}
        </span>
      </label>
    </div>
  )
}

export default Toggle