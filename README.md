# HTML Lists

### Cloning Down Your Repository

If you already have a personal repository:

* Open the Learn IDE, and in the terminal, type

```
git clone https://github.com/<your_username_here>/exceptional-realty
cd exceptional-realty
git fetch --all
git checkout main-pages
```

* A folder with your previous work will appear in the IDE file tree, all
  remote branches will be retrieved, and you will then switch to the
  `main-pages` branch we started in the previous lesson.

If you want to use the demo repository to follow along:

```
git clone https://github.com/learn-co-curriculum/exceptional-realty-demo
cd exceptional-realty-demo
git fetch html-lists
git checkout html-lists
```

**Remember to use `httpserver` to live test your webpage**

<iframe width="640" height="480" src="//www.youtube.com/embed/2IIhsgcNU-M?rel=0&modestbranding=1" frameborder="0" allowfullscreen></iframe>

<p><a href="https://www.youtube.com/watch?v=2IIhsgcNU-M">HTML Lists</a></p>.

### `<ul>`, `<li>`

In our `real-estate-listings.html` page, under the `<h4>2014</h4>` tag we added
in the previous lesson, we should add some months in a list. In HTML, we can
list things using the `<ul>` tag, which stands for _unordered list_, along with
the `<li>` tag, _list item_.

To make a list, we write out the opening and closing `<ul>` tags, and inside
them, we'll add `<li>` tags, each listing a single month:

```
<ul>
  <li>Dec</li>
  <li>Nov</li>
  <li>Oct</li>
</ul>
```

Lists are very flexible and we can even nest lists inside of lists, so if we
wanted to add specific dates to a month, we could put a list inside of our
`Oct` list item:

```
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

```
<h3>Popular Listings</h3>
<ol>
  <li>348 Stockton St.</li>
  <li>3742 Belevadere Rd.</li>
  <li>41 Cleaton Ave.</li>
</ol>
```

Add the above to your Listings page, save and check out your live page to see
the difference.

### Add, Commit, Push

If you're working from your own repository, make sure to add, commit and push
up your work before moving on!

```
git add .
git commit -m 'add lists to real-estate-listings.html'
git push
```

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/html-lists' title='HTML Lists'>HTML Lists</a> on Learn.co and start learning to code for free.</p>
