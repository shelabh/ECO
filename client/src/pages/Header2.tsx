
import React from 'react';
import Link from 'next/link'


const Header2 = () => (
	<div className="w-full  ">
		<div className="w-full fixed flex   justify-between items-center pt-5 pl-5 pr-5">
			<Link href="/Landing">
				<div className="text-xl text-red-500 cursor-pointer">
					Menu
				</div>
			</Link>
			
			<div className="flex items-center space-x-7">
				<div>
					<img src="/images/search.svg" />
				</div>
				<div className="text-xl text-red-500">
					Cart (0)
				</div>
			</div>	
		</div>
	</div>
)

export default Header2