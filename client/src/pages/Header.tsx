
import React from 'react';
import Link from 'next/link'


const Header = () => (
	<div className="w-full  ">
		<div className="w-full fixed flex  justify-between items-center pt-5 pl-5 pr-5">
			<Link href="/Landing">
				<div className="text-xl text-white cursor-pointer ">
					Menu
				</div>
			</Link>
			<Link href="/Listing">
				<div className="text-xl  cursor-pointer border bg-white text-red-500 rounded-full h-[2.5rem] w-[6rem] flex justify-center items-center">
					Order
				</div>
			</Link>
			
		</div>
	</div>
)

export default Header