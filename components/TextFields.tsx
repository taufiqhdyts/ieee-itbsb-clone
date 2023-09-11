const TextFields = ({ type, value, setValue, disabled = false, placeholder }: { type: "text" | "password", placeholder: string, value: string, setValue: React.Dispatch<React.SetStateAction<string>>, disabled?: boolean }) => {
  return (
    <div className="bg-white drop-shadow-[0px_0px_10px_rgba(255,250,250,0.75)] w-full px-7 lg:px-11 lg:py-4 rounded-full py-3">
      <input type={type} disabled={disabled} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} className="placeholder:text-primary-3-dark-purple caret-primary-3-dark-purple font-poppins font-regular outline-none border-none text-primary-3-dark-purple w-full text-base lg:text-lg" />
    </div>
  )
}

export default TextFields
