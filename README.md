# check-element-attribute

> Check attribute value before setting to avoid silent D3 / SVG errors

When setting invalid SVG element's attribute, the browser does NOT throw an error. 
It shows the error in the console instead.

    <svg id="svg" width="200" height="100">
        <g id="example"></g>
    </svg>
    <script>
        var example = document.getElementById('example');
        try {
            example.setAttribute('transform', 'translate(0,' + NaN + ')');
        } catch (err) {
            // this never executes
            console.error(err);
        }
        // browser shows error message, but no error is generated
    </script>

Install: `bower install check-element-attribute --save`

This script overwrites `Element.prototype.setAttribute` and checks for `NaN` values. Use it in the local
or development environment to actually throw an error that can be 
[caught and sent to Sentry for example](http://bahmutov.calepin.co/know-unknown-unknowns-with-sentry.html).

    <script src="bower/check-element-attribute/check-element-attribute.js"></script>
    <script>
        var example = document.getElementById('example');
        example.setAttribute('transform', 'translate(0,NaN)');
        // throws an actual Error
    </script>

**Note** this does not check `data:` values.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/check-element-attribute/issues?state=open) on Github

## MIT License

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
