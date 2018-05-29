# HTML Lists

## Objectives

  - Learn the basics of HTML list elements
  - Create unordered and ordered HTML lists

## Introduction

Many HTML tags behave in unique ways. Some apply automatic styling, like `p`
tags that create margins around text.  Some, like the header tags, increase the
font size. The benefit of using these tags is that it delineates our content -
when reading HTML, using the correct tags informs us of what the content is.
I.g. if we see an `h1` tag, we know that we're looking at _big_ page header.

In this lesson, we're going to be looking at a few new tags that help us
organize _lists_ of related content.  Lets say, for instance, we were building a
personal website and wanted to list out our favorite foods. We _could_ write this like so:

```html
<body>
  <div>
    These are my favorite foods:
  </div>
  <div>  
    <div>Ham and Cheese</div>
    <div>Grilled Cheese</div>
    <div>Nacho Cheese French Fries</div>
    <div>Cheese soup</div>
    <div>Cheese and crackers</div>
    <div>Sushi</div>
  </div>
</body>
```

The above would create a new line on the page for each food, but doesn't really
indicate that these things are related.  Plus, this will _only_ make new lines,
not any other styling. Using the built in `ul`, `ol` and `li` HTML tags however,
we can wrap related list content together while also getting some automatic
styling.

<p align="center">
  <img src="https://i.imgflip.com/28mpcx.jpg"/>
</p>

### `<ul>`, `<li>`

**Remember to use `httpserver` to live test your webpage**

In HTML, we create lists using the `<ul>` tag, which stands for _unordered
list_, along with the `<li>` tag for each _list item_.

To make a list, we write out the opening and closing `<ul>` tags, and inside
them, we'll add `<li>` tags, each listing a single month. Going back to our favorite foods example, if we wanted convert it to a list, it would look like this:

```HTML
<ul>
  <li>Ham and Cheese</li>
  <li>Grilled Cheese</li>
  <li>Nacho Cheese French Fries</li>
  <li>Cheese soup</li>
  <li>Cheese and crackers</li>
  <li>Sushi</li>
</ul>
```

Now, instead of just having each item show up on a new line, the content will also be slightly indented and a bullet will appear next to each of them.  

Lists are very flexible and we can even nest lists _inside_ of lists. Say we wanted to breakdown our favorite foods by category. We may have multiple categories and one or more items in _each_:

```HTML
<ul>
  <li>Sandwiches
    <ul>
      <li>Ham and Cheese</li>
      <li>Grilled Cheese</li>
    </ul>
  </li>
  <li>Snacks
    <li>Nacho Cheese French Fries</li>
    <li>Cheese and crackers</li>
  </li>
  <li>Soups
    <ul>
      <li>Cheese soup</li>
    </ul>
  </li>
  <li>Sushi
    <ul>
      <li>Spicy Salmon Rolls</li>
      <li>California Rolls</li>
    </ul>
  </li>
</ul>
```

In this example, the nested lists will now be _further_ indented and instead of
a solid bullet, they will appear with hollow bullets, indicating a sublist.
Adding nested list one level deeper will make _square_ bullets appear, allowing
us to easily display related and nested content in a readable format.

### Challenge 1

Start up `httpserver` or open `index.html` in your browser. Let's say we wanted to list out the ingredients required for making a grilled cheese sandwich.  The ingredients are: `2 slices of bread`, `4 slices cheese`, `1 tbsp of butter`.  

For the first part of this challenge, in `index.html`, create an unordered list that displays these ingredients. Run `learn` to see if you can pass the first test.

Okay, now, lets say we wanted to make our grilled cheese a little more exciting and add a couple of cheeses, `cheddar`, `mozzarella`, and `pepper jack`.  

To pass the second test, inside the `li` of `4 slices of cheese`, add a nested unordered list that lists out the three types of cheese.

If your first two tests are passing, great! It's time to talk about another type of list!

### `<ol>`

Unordered lists are great for organizing related content where it doesn't matter what goes first, like in our grilled cheese ingredients.  In situations where we _want_ items to be displayed in a specific, numbered order, we will want to use the _ordered list_ tag, which is written as `<ol>` instead of `<ul>`. Both use `<li>` tags inside, but this time, `<ol>`
will display a numbered list instead of bullets. If say, we wanted to write a _ranked_ list of favorite foods, it might look like:

```HTML
<h3>Top 5 Favorite Foods</h3>
<ol>
  <li>Grilled Cheese</li>
  <li>Sushi</li>
  <li>Cheese and crackers</li>
  <li>Cheese soup</li>
  <li>Nacho Cheese French Fries</li>
</ol>
```

Feel free to test this out by adding it to `index.html`, saving and refreshing the tab where the file is open. Now, `Grilled Cheese` will be displayed as `1. Grilled Cheese` as the #1 food (where it belongs).

Nested ordered lists works the same as unordered, but instead of hollow and square bullets, each nested list will still display numebrs.

**Note:** In a nested list, you _must_ provide the `ol` or `ul` wrapper.  Otherwise, an `li` inside another `li` will just be displayed as two items at the same level.  This is because technically, you do not need to write a closing `li` tag.  The following example will be displayed the same as the previous:

```HTML
<h3>Top 5 Favorite Foods</h3>
<ol>
  <li>Grilled Cheese
  <li>Sushi
  <li>Cheese and crackers
  <li>Cheese soup
  <li>Nacho Cheese French Fries
</ol>
```

### Challenge 2

Okay, so we've got our grilled cheese ingredients, but what about the steps requires to make a grilled cheese? Steps to a recipe would definitely need to be in order, otherwise we may end up with burnt cheese, covered in bread and topped with a square of butter. The steps to making a basic grilled cheese would be: `Spread butter on bread and frying pan`, `Place bread in frying pan and fry`, `Add cheese on top of bread`, `Cover with second slice of bread`, `Turn over and fry for 2 minutes`

Write an ordered list that displays these 5 steps correctly.  Run `learn` to see if you've passed.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/html-lists' title='HTML Lists'>HTML Lists</a> on Learn.co and start learning to code for free.</p>
