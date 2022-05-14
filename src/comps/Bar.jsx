import { useState } from "react"

export function Bar({changeTheme}) {

	const style = `text-[40px] font-['Spartan'] text-skin-bar font-bold pl-2`
	const [state, setState] = useState("justify-start")
	
	const onClick = () => {
		changeTheme()
		if (state === "justify-start")
			setState("justify-center")
		else if (state === "justify-center")
			setState("justify-end")
		else if (state === "justify-end")
			setState("justify-start")
	}

	return (
		<div className="basis-1/12 flex items-end justify-between">
			<span className={style}>calc</span>
			<div className="w-1/3 h-full flex">
				<div className="w-1/2 h-full flex justify-center items-end">
					<span className="font-['Spartan'] font-bold text-skin-bar">Theme</span>
				</div>
				<div className="w-1/2 md:w-1/3 h-full flex flex-col justify-end items-center">
					<span className="font-['Spartan'] font-bold text-skin-bar">1 2 3</span>
					<div className={"w-4/5 h-1/3 bg-skin-toggle flex border-0 rounded-2xl " + state}>
						<button className="w-1/3 h-full border-0 rounded-full bg-skin-button-two" onClick={onClick}></button>
					</div>
				</div>
			</div>
		</div>
	)
}