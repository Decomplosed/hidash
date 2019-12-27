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

it('Shows an autocomplete', () => {


  const dropdown = document.querySelector('.dropdown')

  expect(dropdown.className).not.to.include('is-active')
})

it('After searching, dropdown opens up', () => {

})