import Nullstack from 'nullstack'
import './Home.scss'

class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name}`
    page.description = `${project.name} was made with Nullstack`
  }

  jogadas = 0
  rodadas = 0
  rodadasCount = 0

  spin() {
    this.jogadas === 3 ? this.jogadas = 1 : this.jogadas += 1
    this.rodadas < 6 ? this.rodadas += 1 : this.rodadas = 1
    this.rodadas === 6 ? this.rodadasCount += 1 : this.rodadasCount += 0
  }

  render() {
    return (
      <>
        <div class='table'>
          <div>
            <p>Rodadas: {this.rodadasCount}</p>
            <p>Jogadas: {this.jogadas}<b>{this.jogadas === 3 && ' - Próximo'}</b></p>
            <button onclick={this.spin} class='spin'>Girar</button>
          </div>

          <div>
            <img src={`${Math.floor(Math.random() * 6 + 1)}.png`} />
            <img src={`${Math.floor(Math.random() * 6 + 1)}.png`} />
            <img src={`${Math.floor(Math.random() * 6 + 1)}.png`} />
            <img src={`${Math.floor(Math.random() * 6 + 1)}.png`} />
            <img src={`${Math.floor(Math.random() * 6 + 1)}.png`} />
          </div>
        </div>
      </>
    )
  }

}

export default Home