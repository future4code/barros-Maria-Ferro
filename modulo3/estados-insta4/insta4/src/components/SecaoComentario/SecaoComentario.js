import React from 'react'
import './style.js'
import { CommentContainer, InputComentario } from './style.js'


export function SecaoComentario(props) {
	return (
		<CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={props.comentario}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}

/* troquei o value para props.comentario, que é uma variável com useState, para poder alterar o value */