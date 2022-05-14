
export function Button({value, onClick}) {
	let className = "font-bold font-['Spartan'] rounded-xl active:shadow-none active:scale-[0.98] break-all"
	className += value === '=' ? ` bg-skin-button-two text-skin-equals text-5v shadow-sh2 col-span-2` : value === "RESET" || value === "DEL" ? " bg-skin-button-one text-skin-other text-2v md:text-3v shadow-sh1" : " bg-skin-button-three text-skin-num text-4v shadow-sh3"
	
	console.log(className, value)
	return (
		<button className={className} onClick={onClick}>{value}</button>
	)
}

