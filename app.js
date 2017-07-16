(function() {
  var app = angular.module('store', [])

  app.controller('StoreController', function() {
    this.products = gems
  })

  const ginge = 5
  var teeth = 'gorilla'
  var lemon = teeth + ginge
  // teeth = lemon

  // fixme this isn't working

  // todo this needs to be done

  // here is more stuff

  // aq oh noes

  var gems = [
    {
      name: 'Docdecahedron',
      price: 2.95,
      description: '. .df .',
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: ' ..... ',
      canPurchase: true,
      soldOut: false
    }
  ]

})()
