import React, { useState } from 'react'
import './AddService.css'

const AddService = () => {

	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	
	const image = "https://static.wixstatic.com/media/b9b3d1_dc54b42a858a422993924debf80da403~mv2.png/v1/fill/w_326,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b9b3d1_dc54b42a858a422993924debf80da403~mv2.png"

	


  return (
    <div className='addservice'>
		<h1>Add Service Or Work</h1>
		<form>
			<input type="text" name="title" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
			<input type="file" name="image" />
			<textarea name="description" cols="30" rows="10" placeholder='Description' ></textarea>
			<select name="type" value={description} onChange={(e)=>setDescription(e.target.value)}>
				<option value="products">Products</option>
				<option value="works">Works</option>
			</select>
			<button type="submit">Submit</button>
		</form>
    </div>
  )
}

export default AddService