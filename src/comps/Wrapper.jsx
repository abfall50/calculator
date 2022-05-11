
export function Wrapper({children}) {
	return (
		<div className="w-4/5 md:w-2/5 h-5/6 flex flex-col justify-between">
			{children}
		</div>
	)
}