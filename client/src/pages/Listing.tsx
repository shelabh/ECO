
import React from 'react';
import Header2 from './Header2'

const Listing = () => (
	<div className="w-full  ">
		<Header2 />
		<div className="w-full " >
			<div className="flex  pl-4 pt-[5rem] space-x-[17%] items-center">
				<div className="text-red-500  text-[4rem] font-Roboto pt-5">
					Eco_
				</div>
				<div className="text-red-500 text-[7rem] font-Roboto">
					/ Nuts & Seeds
				</div>
			</div>
			<div className="flex pt-[10%] pl-4 space-x-[19%]">
				<div className="text-red-500 text-2xl  ">
					<ul>
						<li>
							All
						</li>
						<li>
							Bestsellers
						</li>
					</ul>
					<ul className="pt-10">
						<li>
							Phone
						</li>
						<li>
							Laptop
						</li>
						<li>
							Books
						</li>
						<li>
							Phone
						</li>
						<li>
							Laptop
						</li>
						<li>
							Books
						</li>
					</ul>
				</div>
				<div className="grid grid-cols-3 gap-4 gap-y-10">
					<div>
						<img src="/images/iphone.svg" />
						<div className="text-red-500 text-3xl mt-3">
							Iphone XR
						</div>
						<div className="text-red-500 text-xl ">
							$3.36-6.73 
						</div>
					</div>
					<div>
						<img src="/images/iphone.svg" />
						<div className="text-red-500 text-3xl mt-3">
							Iphone XR
						</div>
						<div className="text-red-500 text-xl ">
							$3.36-6.73 
						</div>
					</div>
					<div>
						<img src="/images/iphone.svg" />
						<div className="text-red-500 text-3xl mt-3">
							Iphone XR
						</div>
						<div className="text-red-500 text-xl ">
							$3.36-6.73 
						</div>
					</div>
					<div>
						<img src="/images/iphone.svg" />
						<div className="text-red-500 text-3xl mt-3">
							Iphone XR
						</div>
						<div className="text-red-500 text-xl ">
							$3.36-6.73 
						</div>
					</div>
					<div>
						<img src="/images/iphone.svg" />
						<div className="text-red-500 text-3xl mt-3">
							Iphone XR
						</div>
						<div className="text-red-500 text-xl ">
							$3.36-6.73 
						</div>
					</div>
					<div>
						<img src="/images/iphone.svg" />
						<div className="text-red-500 text-3xl mt-3">
							Iphone XR
						</div>
						<div className="text-red-500 text-xl ">
							$3.36-6.73 
						</div>
					</div>
					<div>
						<img src="/images/iphone.svg" />
						<div className="text-red-500 text-3xl mt-3">
							Iphone XR
						</div>
						<div className="text-red-500 text-xl ">
							$3.36-6.73 
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Listing