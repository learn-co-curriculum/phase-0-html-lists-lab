# HTML Lists

## Objectives

  - Learn the basics of HTML list elements

<p align="center">
  <img src="https://i.imgflip.com/28mpcx.jpg"/>
</p>

### `<ul>`, `<li>`

**Remember to use `httpserver` to live test your webpage**

In our `real-estate-listings.html` page, under the `<h4>2014</h4>` tag we added
in the previous lesson, we should add some months in a list. In HTML, we can
list things using the `<ul>` tag, which stands for _unordered list_, along with
the `<li>` tag, _list item_.

To make a list, we write out the opening and closing `<ul>` tags, and inside
them, we'll add `<li>` tags, each listing a single month:

```HTML
<ul>
  <li>Dec</li>
  <li>Nov</li>
  <li>Oct</li>
</ul>
```

Lists are very flexible and we can even nest lists inside of lists. If we
wanted to add specific dates to a month, we could put a list inside of our
`Oct` list item:

```HTML
<ul>
  <li>Dec</li>
  <li>Nov</li>
  <li>Oct
    <ul>
      <li>17th</li>
      <li>18th</li>
    </ul>
  </li>
</ul>
```

Save your file, start up `httpserver`, and on the browser tab where you've got
the server displaying our webpage, add `/real-estate-listings.html` to the end
of the URL path to see our Listings page. In the browser, we'll see that `ul`
produces a bulleted list on the page, and will display nested lists indented
further from the left.

### `<ol>`

The other type of list is the _ordered list_, which is written as `<ol>`
instead of `<ul>`. Both use `<li>` tags inside, but this time, `<ol>`
will display a numbered list instead of bullets:

```HTML
<h3>Popular Listings</h3>
<ol>
  <li>348 Stockton St.</li>
  <li>3742 Belevadere Rd.</li>
  <li>41 Cleaton Ave.</li>
</ol>
```

Add the above to your Listings page, save and check out your live page to see
the difference.

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/html-lists' title='HTML Lists'>HTML Lists</a> on Learn.co and start learning to code for free.</p>
