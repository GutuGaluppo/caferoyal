import React, { useState } from 'react'

function UploadFile() {

	const [image, setImage] = useState('');
	const [loading, setLoading] = useState(false);

	const handleUpload = async e => {
		const files = e.target.files
		const data = new FormData()
		data.append('file', files[0])
		data.append('upload_preset', 'caferoyal')
		setLoading(true)
		const res = await fetch(
			'https://api.cloudinary.com/v1_1/dysk46qkb/image/upload',
			{
				method: 'POST',
				body: data
			}
		)
		const file = await res.json()

		setImage(file.secure_url)
		setLoading(false)

		console.log(files?.name)
	}
	return (
		<div>
			<h1>Upload File</h1>
			<input
				type='file'
				name='file'
				placeholder='Upload file'
				onChange={handleUpload}
			/>
			{loading ? (
				<h3>Loading...</h3>
			) : 
				<img src={image} style={{width: 300}} alt={image}/>
			}
		</div>
	)
}


export default UploadFile