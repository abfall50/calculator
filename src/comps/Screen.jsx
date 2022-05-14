
export function Screen({value}) {

	const style = `basis-2/12 rounded-xl bg-skin-screen font-bold text-skin-screen font-['Spartan'] text-3v md:text-5v flex justify-end items-center pr-5`

	return (
		<div className={style}>{value}</div>
	)
}