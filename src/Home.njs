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

  dadoRemove = 1
  putOut() {
    if (this.dadoRemove > 5) {
      document.querySelectorAll(`.dados`).forEach((e) => (
        e.classList.remove("none")
      ))
      this.dadoRemove = 1
    } else {
      document.querySelectorAll(`.imageDado${this.dadoRemove}`).forEach((e) => (
        e.classList.add("none")
      ))
      this.dadoRemove += 1
    }
  }

  renderTable() {
    return (
      <div class='table'>
        <div>
          <p>Rodadas: {this.rodadasCount}</p>
          <p>Jogadas: {this.jogadas}<b>{this.jogadas === 3 && ' - Próximo'}</b></p>
          <button onclick={this.spin} class='spin'>Girar</button>
          <button onclick={this.putOut} class='function'>{`${this.dadoRemove > 5 ? 'Colocar Dados' : 'Remover Dado'}`}</button>
        </div>

        <div class='div1'>
          <img src={`${Math.floor(Math.random() * 6 + 1)}.png`} class={`imageDado${1} dados`} />
          <img src={`${Math.floor(Math.random() * 6 + 1)}.png`} class={`imageDado${2} dados`} />
          <img src={`${Math.floor(Math.random() * 6 + 1)}.png`} class={`imageDado${3} dados`} />
          <img src={`${Math.floor(Math.random() * 6 + 1)}.png`} class={`imageDado${4} dados`} />
          <img src={`${Math.floor(Math.random() * 6 + 1)}.png`} class={`imageDado${5} dados`} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <>
        <Table />
      </>
    )
  }

}

export default Home