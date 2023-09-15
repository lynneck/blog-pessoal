import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto2.PNG'

export default function Banner() {
  return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}> 
                    Seja bem-vindo ao meu blog!
                </h1>

                <p className={styles.paragrafo}>
                    Ola, este é meu Blog pessoal! Eu sou Paulo Lynneck formado em analise e desenvolvimento de sistemas pela FACAM, moro em São Luis -MA, 
                    sou desenvolvedor full stack com especialidade em React e node.js.
                </p>

            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt='circulo'
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto Paulo trabalhando'
                />

            </div>

        </div>

  )
}
