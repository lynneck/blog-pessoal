import PostModelo from 'componentes/PostModelo'
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/minha_foto2.PNG'

export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Ola, eu sou Paulo Lynneck!
      </h3>
      <img
        src={fotoSobreMim}
        alt="Minha foto"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
            Olá e bem-vindo(a) ao meu portfólio! Sou formado em Análise e Desenvolvimento de Sistemas e estou entusiasmado(a) em apresentar meu trabalho nesta área.
      </p>

      <p className={styles.paragrafo}>
          Ao longo dos anos, tenho trabalhado em diversos projetos de desenvolvimento de software, desde aplicações web até sistemas corporativos. Meu objetivo é sempre oferecer soluções inovadoras e eficientes, que possam ajudar empresas e usuários finais a atingir seus objetivos.
      </p>  
      <p className={styles.paragrafo}>
          Meu conhecimento em programação inclui linguagens como Java, Python, C# e JavaScript, além de frameworks como React, Angular e Spring Boot. Além disso, também tenho experiência em análise de requisitos, design de interfaces, testes de software e gerenciamento de projetos.
      </p>            
      <p className={styles.paragrafo}>
          Neste portfólio, você encontrará alguns dos projetos que desenvolvi ao longo da minha carreira. Fique à vontade para navegar e conhecer um pouco mais sobre meu trabalho. Se você tiver alguma dúvida ou quiser saber mais sobre minhas habilidades, não hesite em entrar em contato comigo.

      </p>            
      <p className={styles.paragrafo}>
            Obrigado(a) pela visita!
      </p>   

    </PostModelo>

  )
}

