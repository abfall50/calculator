
export function Layout({children}) {
	const style = `w-full h-full flex justify-center items-center bg-skin-main`

	return (
		<div className={style}>
			{children}
		</div>
	)
}