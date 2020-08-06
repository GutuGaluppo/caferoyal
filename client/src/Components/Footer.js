import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../img/faceLogo.png'
import vimeo from '../img/vimeoLogo.png'
import instagram from '../img/instaLogo.png'

export default function Footer() {
	const footerStyle = {
		minHeight:'5vh',
		display:'flex',
		justifyContent:'center',
		alignItems: 'center'
	}
	const navStyle = {
		color: '#2d1915',
		textDecoration: 'none',
		textTransform: 'uppercase',
		fontSize: '0.9rem',
		margin: '0 10px',
	}
	const logo = {
		color: '#fff',
		margin: '0 10px'
	}
	
	return (
		<>
			<footer style={footerStyle}>
				<ul className='nav-link'>
						<Link style={navStyle} to='https://www.facebook.com/caferoyal.art/'>
							<img style={logo} src={facebook} alt='logo' width='20px' />
						</Link>
						<Link style={navStyle} to='https://vimeo.com/caferoyal'>
							<img style={logo} src={vimeo} alt='logo' width='20px' />
						</Link>
						<Link style={navStyle} to='https://www.instagram.com/caferoyal.art/'>
							<img style={logo} src={instagram} alt='logo' width='20px' />
						</Link>
					</ul>
			</footer>
		</>
	)
}
