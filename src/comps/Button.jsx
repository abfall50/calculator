
export function Button({value, onClick}) {
	let className = "font-bold font-['Spartan'] rounded-xl active:shadow-none active:scale-[0.98] break-all"
	className += value === '=' ? ` bg-[#D03F2F] text-white text-5v shadow-[0_5px_0_0_rgba(147,38,26,1)] col-span-2` : value === "RESET" || value === "DEL" ? " bg-[#637097] text-white text-2v md:text-3v shadow-[0_5px_0_0_rgba(64,78,114,1)]" : " bg-[#EAE3DC] text-[#444B5A] text-4v shadow-[0_5px_0_0_rgba(180,165,151,1)]"
	
	console.log(className, value)
	return (
		<button className={className} onClick={onClick}>{value}</button>
	)
}

