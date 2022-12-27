import Nullstack from 'nullstack'
import './Home.scss'

class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name}`
    page.description = `${project.name} was made with Nullstack`
  }

  plays = 0
  rounds = 0
  roundsCount = 0
  spin() {
    this.plays === 3 ? this.plays = 1 : this.plays += 1
    this.rounds < 6 ? this.rounds += 1 : this.rounds = 1
    this.rounds === 6 ? this.roundsCount += 1 : this.roundsCount += 0
  }

  diceRemove = 1
  putOut() {
    document.querySelectorAll(`.imageDado${this.diceRemove}`).forEach((e) => (
      e.classList.add("none")
    ))
    this.diceRemove += 1
  }

  putOn() {
    document.querySelectorAll(`.dados`).forEach((e) => (
      e.classList.remove("none")
    ))
    this.diceRemove = 1
  }

  total = 0
  totalCount() {
    if (this.value1 & this.value2 & this.value3 & this.value4 & this.value5 & this.seq1 & this.fula1 & this.p1 & this.g1 & this.value1_2 & this.value2_2 & this.value3_2 & this.value4_2 & this.value5_2 & this.seq1_2 & this.fula1_2 & this.p1_2 & this.g1_2)
      this.total = 1
  }
  clear() {
    this.value1 = ''; this.value1_2 = ''; this.value2 = ''; this.value2_2 = ''; this.value3 = ''; this.value3_2 = ''; this.value4 = ''; this.value4_2 = ''; this.value5 = ''; this.value5_2 = ''; this.seq1 = ''; this.seq1_2 = ''; this.fula1 = ''; this.fula1_2 = ''; this.p1 = ''; this.p1_2 = ''; this.g1 = ''; this.g1_2 = '';
    this.total = 0
  }

  renderTable() {
    return (
      <div class='table'>
        <p>Rodadas: {this.roundsCount}</p>
        <p>Jogadas: {this.plays}<b>{this.plays === 3 && ' - Próximo'}</b></p>
        <button onclick={this.spin} class='spin'>Girar</button>
        <div class='buttons'>
          <button onclick={this.putOut} class='remove'>Remover Dado</button>
          <button onclick={this.putOn} class='add'>Adicionar Dados</button>
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

  renderValues() {
    return (
      <>
        <div class='all__values'>
          <div class='values1'>
            <input type="text" placeholder='Player 1' bind={this.player1} class='player' />
            <input type="number" placeholder='Preencher: 1' bind={this.value1} class='value value1' />
            <input type="number" placeholder='Preencher: 2' bind={this.value2} class='value value1' />
            <input type="number" placeholder='Preencher: 3' bind={this.value3} class='value value1' />
            <input type="number" placeholder='Preencher: 4' bind={this.value4} class='value value1' />
            <input type="number" placeholder='Preencher: 5' bind={this.value5} class='value value1' />
            <input type="number" placeholder='Preencher: Sequência' bind={this.seq1} class='value value1' />
            <input type="number" placeholder='Preencher: Fula' bind={this.fula1} class='value value1' />
            <input type="number" placeholder='Preencher: Poker' bind={this.p1} class='value value1' />
            <input type="number" placeholder='Preencher: General' bind={this.g1} class='value value1' />
            <p>{`${this.player1 != '' ? this.player1 : ''} `}{this.total != 0 && `- Total: ${+this.value1 + +this.value2 + +this.value3 + +this.value4 + +this.value5 + +this.seq1 + +this.fula1 + +this.p1 + +this.g1}`}</p>
          </div>
          <div class='values2'>
            <input type="text" placeholder='Player 2' bind={this.player2} class='player' />
            <input type="number" placeholder='Preencher: 1' bind={this.value1_2} class='value value1' />
            <input type="number" placeholder='Preencher: 2' bind={this.value2_2} class='value value1' />
            <input type="number" placeholder='Preencher: 3' bind={this.value3_2} class='value value1' />
            <input type="number" placeholder='Preencher: 4' bind={this.value4_2} class='value value1' />
            <input type="number" placeholder='Preencher: 5' bind={this.value5_2} class='value value1' />
            <input type="number" placeholder='Preencher: Sequência' bind={this.seq1_2} class='value value1' />
            <input type="number" placeholder='Preencher: Fula' bind={this.fula1_2} class='value value1' />
            <input type="number" placeholder='Preencher: Poker' bind={this.p1_2} class='value value1' />
            <input type="number" placeholder='Preencher: General' bind={this.g1_2} class='value value1' />
            <p>{`${this.player2 != '' ? this.player2 : ''} `} {this.total !== 0 && `- Total ${+this.value1_2 + +this.value2_2 + +this.value3_2 + +this.value4_2 + +this.value5_2 + +this.seq1_2 + +this.fula1_2 + +this.p1_2 + +this.g1_2}`
            }</p>
          </div>
        </div>
        <div class="buttonsRA">
          <button onclick={this.totalCount} class='add'>Somar</button>
          <button onclick={this.clear} class='remove'>Limpar</button>
        </div>
      </>
    )
  }

  render() {
    return (
      <div class='all'>
        <Table />
        <Values />
        <p>This project was made with <a href='https://nullstack.app/pt-br'>Nullstack</a> by <a href='https://github.com/BrendonSSilva' target='_blank'>Brendon</a></p>
      </div>
    )
  }

}

export default Home