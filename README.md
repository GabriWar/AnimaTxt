# AnimaTxt
A simple js/react function that animates a text on mouseover, its pretty cool
![example](https://github.com/GabriWar/AnimaTxt/assets/72227489/b1bfe142-c835-43a6-8d55-fbacfc90adea)
## Table of Contents


- [Usage](#usage)
- [Examples](#examples)


## Usage
import
```

import animateonmouseover from './AnimaTxt.jsx'

```
Pass as a function to be invoked on the OnMouseOver event, passing the id of the html tag, the function and the text of the div
```


<h1 id = "anim1" onMouseOver={() => {animateonmouseover('anim1','World')}}>World</h1>
ID--------^^^^^------------------------------------------^^^^^    ^^^^-----^^^^^------TEXT


```

to animate the text to another one, you can pass two variables to the function:

```


<h1 id = "anim1" onMouseOver={() => {animateonmouseover('anim1','Hello', 'World')}}>World</h1>
                                                                 ^^^^^    ^^^^^
                                                                 text1    text2

```

You can also pass only the id and the function will try to infer the text, but its kinda buggy

## Examples
![ex1](https://github.com/GabriWar/AnimaTxt/assets/72227489/fecec99b-e990-4158-a10a-6ab1144c9087)
