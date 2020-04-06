# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cocktails = Cocktail.create(
  [
    {
      name: 'Mudslide',
      description: 'Share this creamy adults-only drink with the chocolate lover in your life. For extra indulgence, grate over some chocolate before serving',
      ingredients: 'Dark Chocolate, Ice, Vodka, Irish cream liqueur, double cream',
      image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/mudslide.jpg?itok=okmSynXY',
    },
    {
      name: 'Pink negroni',
      description: 'Go pink with this fabulous cocktail flavoured with pink gin, rose vermouth and Aperol. Garnish with a wedge of pink grapefruit and a basil leaf to serve',
      ingredients: 'Pink Gin, Rose vermouth/White vermouth, Aperol, Ice, wedge of pink grapefruit, Basil leaf',
      image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2019/10/classic-negroni.jpg?itok=ZQ8f0t7P',
    },
    {
      name: 'The Mojito',
      description: 'It is believed that its origins can be traced to a 16th century drink originally called “El Draque” which was invented in Havana in honour of Sir Francis Drake.',
      ingredients: 'Dark rum (preferably Gosling’s Black Seal), ginger beer, lime ',
      image: 'https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2013/11/mojito-cocktails.jpg'
    },
    {
      name: "Dark 'n' Stormy",
      description: 'A drink backed by a brand and even trademarked, the Dark ‘n’ Stormy still manages to feel hardly corporate while evoking relaxation and island life. The story goes there was an Englishman living in Bermuda who created a dark rum he named after himself—Gosling’s.',
      ingredients: 'Dark rum (preferably Gosling’s Black Seal), ginger beer, lime ',
      image: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/04/dark-stormy.jpg'
    },
    {
      name: 'Pisco Sour',
      description: 'Chile and Peru bicker fiercely over the birthright of the Pisco Sour, but by most accounts, the drink originated with an American. Blending pisco, lime juice, egg white and Angostura bitters, the Pisco Sour is simultaneously earthy, sweet and tart—a cocktail worth fighting over.',
      ingredients: '2 oz Pisco, 1 oz Fresh lime juice, 1/2 oz Simple syrup, 1 Egg white, Garnish: Angostura bitters',
      image: 'https://www.liquor.com/thmb/ZxgbPYVy5ItKIT0hhgL0LtbDH2U=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__02__08143927__pisco-sour-720x720-recipe-9c46d52151e5445fa90bcf0394493060.jpg'
    },
    {
      name: 'Conflict & Compromise',
      description: 'Midori lends itself to all kinds of infusions and plays well with herbs, spices and heat like cayenne,',
      ingredients: '1 1/2 ounces Tequila Ocho plata, 3/4 ounce Midori, 3/4 ounce fresh lime juice, 1/2 ounce agave nectar, 2 slices jalapeño pepper, 7 slices cilantro, Garnish: cilantro',
      image: 'https://www.liquor.com/thmb/CsDDt8n-niWFJvD4WIiDnUUCEMo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2020__01__02132943__conflict-and-compromise-720x720-recipe-365e4b1e66994ed2b4ebe007b54cf03a.jpg'
    },
    {
      name: 'WHITE RUSSIAN',
      description: 'Created in 1949 by a Belgian bartender named Gustave Tops, and popularized by the 1998 film “The Big Lebowski,” the White Russian continues to be a world-wide favorite. ',
      ingredients: 'The White Russian combines heavy cream (or half and half), vodka, and coffee liqueur.',
      image: 'https://static.vinepair.com/wp-content/uploads/2017/11/white-russian-inside.jpg'
    },
    {
      name: 'Long Island Iced Tea',
      description: 'On paper, the Long Island Iced Tea is one hot mess of a drink. Four different—and disparate—spirits slugging it out in a single glass, along with triple sec, lemon juice and cola?',
      ingredients: '3/4 oz Vodka, 3/4 oz White rum, 3/4 oz Silver tequila, 3/4 oz Gin, 3/4 oz Triple sec, 3, 4 oz Simple syrup, 3/4 oz Fresh lemon juice, Cola, to top, Garnish: Lemon wedge',
      image: 'https://www.liquor.com/thmb/Ej3ZdlO5BANMiM_XKVieuCWhgwQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__03__14090749__Long-Island-Iced-Tea-720x720-article-272623f47e80457594178a552f708068.jpg'
    },
    {
      name: 'Banana Daiquiri',
      description: 'To get the most of your Banana Daiquiri, try a few different rums, as the range in styles and flavors will affect the sweetness and balance of the cocktail.',
      ingredients: '2 oz Aged rum, 1/2 oz Tempus Fugit crème de banane liqueur, 1 oz Fresh lime juice, 1/4 oz Demerara simple syrup, Garnish: Banana slice',
      image: 'https://www.liquor.com/thmb/5UksrdL8J_bbJ0flVIxgVW6Jzak=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__08__23130520__banana-daiquiri-720x720-recipe-7344ee54ea314ff4a29469f0c2df30ee.jpg'
    },
    {
      name: 'New Year’s Sparkler',
      description: 'Ring it in with fruit and bubbly.',
      ingredients: '1 oz Berry-flavored vodka, 1 1/2 oz Pomegranate juice, 3 1/2 oz Champagne, Garnish: 1 None 5-6 raspberries on a long skewer',
      image: 'https://www.liquor.com/thmb/Uvs9HBpIvHxu6RhYDfu9JH9MFMQ=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2009__11__new-years-sparkler-6352227e59ca4c9991e72913d7d81c69.jpg'
    },
    {
      name: 'Hot Buttered Rum',
      description: 'Hot Buttered Rum is a warm, soothing cocktail that hits the spot when a chill is in the air. Adding butter to a cocktail may seem a little out of the ordinary, but the pat of butter imparts a richness to the Hot Buttered Rum that would otherwise be missing. ',
      ingredients: '2 oz Gold rum, 1 tbsp Hot buttered rum batter, Boiling water, Garnish: Cinnamon stick,  Garnish: Freshly grated nutmeg',
      image: 'https://www.liquor.com/thmb/ny7FCWO1sL0IAmNwHHckkdOb7GM=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2013__12__16124209__hot-buttered-rum-720x720-recipe-885cfa2d32f64f3ba544abbf56cdc863.jpg'
    },
    {
      name: 'Tom Collins',
      description: 'The Tom Collins is essentially a sparkling lemonade spiked with a healthy dose of the juniper spirit. ',
      ingredients: '2 oz London dry gin, 1 oz Fresh lemon juice, 1/2 oz Simple syrup, Club soda, to top, Garnish: Lemon wheel, Garnish: Maraschino cherry',
      image: 'https://www.liquor.com/thmb/4SIABFe9XWJ0VmHSsksaRmrIpuc=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2019__04__03080950__Tom-Collins-720x720-recipe-e87bf7954cdb4438b5e8d21f568cdd6f.jpg'
    }
  ]
)
