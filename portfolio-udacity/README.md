# Build a Portfolio Site

Rubric
------

##### Design

| Criteria | Meets Specification |
| -------- | :-----------------: |
| Design | <ol align="left"><li>Atleast 4 images.</li><li>Title text(h1, h2, etc.)</li><li>Regular (paragraph) text.</li><li>A Logo</li> |
| Semantic HTML | <div align="left">HTML5 semantic tags such as <code>header</code>, <code>footer</code>, <code>article</code>, <code>section</code> etc. are used to add meaning to the code.No <code>div</code> or <code>section</code> tags are without a CSS class or id.</div> |
| Custom Design | <ol align="left"><li>Customize images and text.</li><li>Customize placement of the elements on the page (grid layout) with HTML, CSS or both.</li><li>Customize CSS styles applied at minimum to paragraph and heading elements.</li><ol> |
| Grid-based Layout | <div align="left">Page utilizes a grid-based layout with styles making use of the flexbox layout or a framework like Bootstrap, Foundation, etc.If you're using Bootstrap or standard HMTL/CSS: the rows and columns of the grid must be wrapped in an element with a container class.</div> |


##### Responsiveness

| Criteria | Meets Specification |
| -------- | :-----------------: |
| Cross-Device Compatibility | <ol align="left"><li>Desktop</li><li>Mobile: Google Nexus 5</li><li>Tablet: Apple iPad</li></ol> |
| Provide All Content | <div align="left">All content is rendered on all three devices. No content should be hidden on mobile devices.</div> |
| Viewport meta Tag | <div align="left">Viewport meta tag is included in HTML. (i.e. <code>meta name=”viewport” …</code>)</div> |
| Responsive Images | <div align="left">If a CSS framework is used, classes provided by the CSS framework are used to make images responsive, otherwise media-queries are used to ensure responsiveness of images.</div> |


##### Seperation of Concerns

| Criteria | Meets Specification |
| -------- | :-----------------: |
| Styles Separated From HTML | <div align="left">Portfolio completely separates structure (<code>HTML</code>) from design/style (<code>CSS</code>). There are no style attributes present in the body of the HTML document. There are no <code>style</code> elements in the document. </div> |
| File Structure | Files are organized with a directory structure that separates files based on functionality. For example: <ul align="left"><li><code>css/</code> for stylesheets</li><li><code>img/</code> for images</li><li><code>js/</code> for JavaScript files</li><ul> |


##### Code Quality

| Criteria | Meets Specification |
| -------- | :-----------------: |
| HTML Formatting rules | <ol align="left"><li>All code ( HTML element names, attributes, attribute values) is lowercase (except text/CDATA).</li><li>Code does not have trailing white spaces.</li><li>Indentation is consistent (either all tabs or all 2 spaces or all 4 spaces etc).</li><li>Code uses a new line for every block, list or table element and indent every such child element (it's acceptable to put all <code>li</code> elements in one line).</li><li>[Optional] When quoting attribute values, code uses double quotation marks.</li><ol> |
| HTML Style Rules | <ol align="left"><li><code>HTML</code> documents use <code>HTML5</code> <code>!doctype html</code>.</li><li>Code passes <code>HTML</code> and <code>CSS</code> validators.</li><li><code>[Optional]</code> Code does not use entity references unless necessary e.g. characters with special meaning in HTML (like < and &) as well as control or “invisible” characters (like no-break spaces).</li><li><code>[Optional]</code> Code omits type attributes for style sheets and scripts.</li></ol> |
| CSS Formatting Rules | <ol align="left"><li>Code does not have trailing white spaces.</li><li>Indentation is consistent (either all tabs or all 2 spaces or all 4 spaces etc).</li><li>Code indents all block content, that is rules within rules as well as declarations to reflect hierarchy and improve understanding.</li><li>Code uses a semicolon after every declaration for consistency and extensibility reasons.</li><li>Code always uses a space after a property name's colon, but no space between property and colon, for consistency reasons.</li><li>Code always use a single space between the last selector and the opening brace that begins the declaration block.</li><li>Code always start a new line for each selector and declaration.</li><li>Code always put a blank line (two line breaks) between rules.</li><li><code>[Optional]</code> Code uses double quotation marks for attribute selectors or property values. Do not use quotation marks in URI values (url()).</li></ol> |
| CSS Style Rules | <ol align="left"><li>Code uses meaningful or generic ID and class names that are as short as possible but as long as necessary.</li><li>Code does not use element names in conjunction with IDs or classes.</li><li>Code uses shorthand properties where possible.</li><li><code>[Optional]</code> Code omits unit specification after 0 values.</li><li><code>[Optional]</code> Code includes leading 0s in decimal values for readability.</li><li><code>[Optional]</code> Code uses 3-character hexadecimal notation where possible.</li><li><code>[Optional]</code> Code separate words in ID and class names by a hyphen.</li><li><code>[Optional]</code> Code avoids user agent detection as well as <code>CSS</code> "hacks"—try a different approach first.</li></ol> |
| General Meta Rules | <div align="left"><code>HTML</code> templates and documents use UTF-8 encoding. (no <code>BOM</code>) i.e. <code>meta charset="utf-8"</code>.</code>[Optional]</code> Mark todos and action items with <code>TODO</code></div> |
