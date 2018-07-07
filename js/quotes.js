quotes = [
  '“To make living itself an art, that is the goal.” — Henry Miller',
  '"If you don\'t know, now you know" — Biggie Smalls',
  '"I am going to make everything around me beautiful. That will be my life." — Elsie de Wolfe'
]

totalQuotes = quotes.length

getQuote =
  activeQuotes = quotes[Math.floor((Math.random() * totalQuotes))]


  $('.quotes').text(activeQuotes)

getQuote()
