const db = require('../db/index.js');
const { Recipe } = require('../models/index');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const recipes = [
    {
      food: 'Blueberry Muffins',
      made_by: 'Calvin Menyfield',
      image:
        'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/I4Q2CCXEX4I6XCGFJ7LDQLCHZM.jpg&w=1440',
      cooktime: 40,
      ingredients:
        'Granulated sugar, Oil, Milk, Fresh or frozen blueberries , All-purpose flour, Egg, Baking powder, Salt and vanilla extract',
      instructions:
        'step1: Whisk flour, sugar, baking powder, and a little salt in a large bowl. step2: Add oil, an egg, milk, and vanilla extract then stir with a fork until blended. step3: Mix in the blueberries, divide the batter between muffin cups and bake.',
      details:
        'These blueberry muffins are quick and easy with a moist and tender center bursting with blueberries and perfectly golden brown top. They are extra easy to make, too!',
      review: 'No reviews yet, be the first to make one!',
      healthy: false,
      liked: true
    },

    {
      food: 'Crash Hot Potatoes with Smoked Salmon',
      made_by: 'Coco Morane',
      image:
        'https://www.simplyrecipes.com/thmb/JqcbmPb4vrxWr3uxssw8Wns6y94=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Crash-Hot-Potatoes-Salmon-LEAD-21-4080b17ef5e94116b4ee65c0e9590252.jpg',
      cooktime: 40,
      ingredients:
        '1 1/2 pounds petite gold potatoes , 2 tablespoons olive oil , 1/2 teaspoon salt , 1/4 teaspoon freshly ground black pepper ,6 ounces whipped cream cheese, 5 ounces hot- or cold-smoked salmon, 1/4 cup red onion, finely diced, 2 tablespoons capers, drained',
      // stars: { type: Number, required: true },
      instructions:
        'step1: In a medium pot, add the potatoes and enough water to cover them by at least 1 inch. Place the pot on the stovetop over high heat. When the water comes to a boil, reduce the heat to medium and cook uncovered for about 15 to 20 minutes until you can easily pierce the potatoes with a fork or paring knife.Remove the potatoes from the heat and drain them into a colander over the sink. Preheat the oven to 425ºF. Line a large baking sheet with parchment. step3: While the potatoes are still hot, use the bottom of a drinking glass, measuring cup, or other flat-bottomed object to smash them to about 1/2-inch thickness. step4: Drizzle the smashed potatoes with 1 tablespoon olive oil, and sprinkle with 1/4 teaspoon salt and 1/8 teaspoon black pepper. Use a spatula to gently turn the potatoes over and season them with the remaining olive oil, salt, and black pepper. step5: Bake the potatoes for 20 to 25 minutes until they’re crisp and golden brown around the edges. step6: Let the potatoes cool for about 15 minutes on the baking sheet. Top each potato with a heaping teaspoon of whipped cream cheese. Top the cream cheese with a small piece of smoked salmon, a sprinkle of red onion, and a few capers. step7: Transfer the potatoes to a serving platter. Serve right away.',
      details:
        'This version of crash hot potatoes, crispy smashed and roasted potatoes, is topped with bagel-inspired smoked salmon, red onions, and capers. It’s a unique and delicious appetizer!',
      review: 'No reviews yet..Would you like to add one?',
      healthy: true,
      liked: false
    }
  ];
  await Recipe.insertMany(recipes);
  console.log('Made some meals!');
};

const run = async () => {
  await main();
  db.close();
};

run();
