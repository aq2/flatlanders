(function() {
  var app = angular.module('store', [])

  app.controller('StoreController', function() {
    this.products = gems
  })


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
