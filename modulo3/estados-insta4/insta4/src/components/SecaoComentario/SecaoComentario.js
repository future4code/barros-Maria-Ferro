import React from 'react'
import './style.css'


export function SecaoComentario(props) {
	return (
		<div className='CommentContainer'>
			<input className='InputComentario'
				placeholder={'Comentário'}
				value={props.comentario}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</div>
	)
}

/* troquei o value para props.comentario, que é uma variável com useState, para poder alterar o value */