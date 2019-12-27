const waitFor = async (selector) => {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (document.querySelector(selector)) {
        resolve()
      }
    }, 30)

    setTimeout(() => {
      reject()
    }, 2000)
  })
}

beforeEach(() => {
  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [
        { Title: 'Avengers' },
        { Title: 'Not Avengers' },
        { Title: 'Some other movie' }
      ]
    },
    renderOption(movie) {
      return movie.Title
    }
  })
})

it('Dropdown starts closed', () => {
  const dropdown = document.querySelector('.dropdown')

  expect(dropdown.className).not.to.include('is-active')
})

it('After searching, dropdown opens up', () => {
  const input = document.querySelector('input')
  input.value = 'avengers'
  input.dispatchEvent(new Event('input'))

  const dropdown = document.querySelector('.dropdown')

  expect(dropdown.className).to.include('is-active')
})