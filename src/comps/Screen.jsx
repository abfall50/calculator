
export function Screen({value}) {

	const style = `basis-2/12 rounded-xl bg-[#182034] font-bold text-white font-['Spartan'] text-3v md:text-5v flex justify-end items-center pr-5`

	return (
		<div className={style}>{value}</div>
	)
}