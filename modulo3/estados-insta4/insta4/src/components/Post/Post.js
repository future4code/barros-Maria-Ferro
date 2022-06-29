import React, {useState} from 'react'
import './style.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'



function Post(props){
  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentario, setComentario] = useState("")

  /* cria variáveis e funções utilizando useState, os estados iniciais são os mesmos do objeto state... e eu adicionei essa última variável comentario*/

  const onClickCurtida = () => {
    console.log('Curtiu!')
    setCurtido(!curtido)
    if(!curtido) {
      setnumeroCurtidas(numeroCurtidas + 1)
    } else {
      setnumeroCurtidas(numeroCurtidas - 1)
    }
  }

  /* fiz o setCurtido mudar o estado da variável curtido para true e false cada vez que clica no botão. sobre a contagem, eu só consegui fazer funcionar trocando lá em baixo o valorContador para numeroCurtidas, e não state.numeroCurtidas como estava, não sei se era pra fazer assim*/

  /* cria a função onClickCurtida, que faz com que apareça a mensagem 'Curtiu!' no console, porém eu testei e ela não está funcionando */
  
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario value={comentario} aoEnviar={aoEnviarComentario} onChangeComentario={handleComentario}/>
    }
    console.log(comentando)
  }

    /* cria a função onClickComentario, e não entendi muito bem o que está acontecendo. pelo o que entendi, se clicamos para comentar, o useState transforma a variável comentando em true, e se comentando for true, aparece um componente SecaoComentario, que ao enviar, envia o comentário. pelo o que testei, é isso, se eu clicar no icone do comentário, comentando é true e aparece a seção de comentários. como o onClickCurtida, o setComentando troca o estado para true ou false cada vez que clicamos. da mesma forma que no onClickCurtida, o console.log não ta funcionando pra mim */

  const handleComentario = (event) => {
      setComentario(event.target.value)
    }

  /* criei essa função para controlar o input, também tentei usar ela para aparecer no console mas não estou conseguindo */
  
  const aoEnviarComentario = () => {
    setComentando(false)
    console.log(comentario)
    if (comentario !== "") {
    setNumeroComentarios(numeroComentarios + 1)
    }
    setComentario("")
  }

  /* essa é a função aoEnviarComentario que é ativada quando clicamos no enviar em SecaoComentario, então ele transforma comentando pra false de novo e aumenta o número de comentários em 1 */

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    /* se curtido for true, o iconeCurtida é o coração preto, se não é o branco. muda com o onClickCurtida */

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario value={comentario} aoEnviar={aoEnviarComentario} onChangeComentario={handleComentario}/>
    }

  return(
    <div className = 'PostContainer'>
      <div className = 'PostHeader'>
        <img className = 'UserPhoto' src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </div>

      <img className = 'PostPhoto'src={props.fotoPost} alt={'Imagem do post'}/>

      <div className = 'PostFooter'>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        {/* export function IconeComContador(props) {
	      return <div className='IconContainer'>
		    < img className ='IconImage' alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		    <p>{props.valorContador}</p>
	      </div>
        } 
        
        o IconeComContador é o mesmo na contagem das curtidas e na contagem dos comentários, eles só utilizam outro icone, outra função para quando o icone é clicado e outro contador, com base nas informações que eles pegam pelo props*/}

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </div>
      {componenteComentario}
    </div>
  )
}


export default Post