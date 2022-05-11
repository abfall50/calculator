
export function ButtonBox({children}) {

	const style = `basis-8/12 rounded-xl grid grid-cols-4 gap-4 p-4 bg-[#232C43]`

	return (
		<div className={style}>
			{children}
		</div>
	)
}