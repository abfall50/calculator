
export function ButtonBox({children}) {

	const style = `basis-8/12 rounded-xl grid grid-cols-4 gap-4 p-4 bg-skin-keypad`

	return (
		<div className={style}>
			{children}
		</div>
	)
}