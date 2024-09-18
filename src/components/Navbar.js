import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex-shrink-0 flex items-center">
						<span className="text-2xl font-bold text-gray-800">Pukar</span>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						<a
							href="/"
							className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
						>
							About Us
						</a>
						<a
							href="/"
							className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
						>
							Features
						</a>
						<a
							href="/"
							className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
						>
							FAQ
						</a>
						<a
							href="/"
							className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
						>
							Blog
						</a>
						<button className="bg-white text-black border border-black px-4 py-2 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out">
							Login
						</button>
						<button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out">
							Signup
						</button>
					</div>
					<div className="md:hidden flex items-center space-x-2">
						<button className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out text-sm">
							Login
						</button>
						<button
							onClick={toggleMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						>
							{isOpen ? (
								<FaTimes className="h-6 w-6" />
							) : (
								<FaBars className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="md:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<a
							href="/"
							className="block text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
						>
							About Us
						</a>
						<a
							href="/"
							className="block text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
						>
							Features
						</a>
						<a
							href="/"
							className="block text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
						>
							FAQ
						</a>
						<a
							href="/"
							className="block text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
						>
							Blog
						</a>
						<button className="w-full text-left bg-white text-black border border-black px-4 py-2 rounded-md hover:bg-gray-100 transition duration-150 ease-in-out mt-2">
							Sign Up
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
