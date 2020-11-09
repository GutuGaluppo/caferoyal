import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
	const [openList, setOpenList] = useState(false);
	const handleOpenList = () => {
		setOpenList(curr => !curr)
	}
	useEffect(() => {
		console.log(openList)
	}, [openList])

	const navStyle = {
		color: '#2d1915',
		textDecoration: 'none',
		textTransform: 'uppercase',
		fontSize: '0.9rem',
		fontWeight: 'bold',
		padding: '10px'
	}
	
	return (
		<div>
			<nav>
				<Link to='/'>
					<img src='http://caferoyal.art.br/wp-content/uploads/2020/04/Cafe_logo_inverted.png' alt='caferoyal logo' />
				</Link>
				<div style={{ display: 'flex' }}>
					<ul className='nav-link'>
						<li
							style={navStyle}
							onClick={handleOpenList}
						>
							Directors
							{openList &&
								<div className='directors-list'>
									<Link style={navStyle} to='/joca'>
										Georgea Guerr-Peixe _Joca
									</Link>
									<Link style={navStyle} to='/irmaos-meirelles'>
										Irmãos Meirelles
									</Link>
									<Link style={navStyle} to='/julio-hey'>
										Julio Hey
									</Link>
									<Link style={navStyle} to='/karoline-maia'>
										Karoline Maia
									</Link>
									<Link style={navStyle} to='/luiz-villaca'>
										Luiz Villaça
									</Link>
									<Link style={navStyle} to='/tuco'>
										Tuco
									</Link>
								</div>
							}
						</li>
						<Link style={navStyle} to='/entertainment'>
							<li>Entertainment</li>
						</Link>
						<Link style={navStyle} to='/about'>
							<li>About us</li>
						</Link>
						<Link style={navStyle} to='/contacts'>
							<li>Contacts</li>
						</Link>
						<Link style={navStyle} to='/upload'>
							<li>Upload File</li>
						</Link>
					</ul>
				</div>
			</nav>
		</div >
	)
}