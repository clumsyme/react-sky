## react-sky

---

A React component with a background of starry and telescope moving around to explore it.

## Usage

```js
import Sky from 'Sky'
import image from 'image'

class Demo extends React.Component {
    render() {
        return(
            <Sky
              starColor="#ffffff"
              height="100vh"
              className="my-sky"
            >
              <span className="sky-title">Hubble</span>
              <div className="sky-content">
                <img src={image} alt="hi" />
                <h1>Discover The Sky</h1>
                <p>
                  Machine learning is the study of algorithms
                  that use data to learn, generalize,
                  and predict. What makes machine learning exciting
                  is that with more data, the algorithm improves
                  its prediction. For example, I remember when my
                  family started using voice to search instead of
                  typing. At first, it took a while for the machine
                  to recognize our words, but within a week of  working
                  with it, the algorithm’s speech detection capacity
                  was good enough that now, voice is my family’s
                  primary mode of search.</p>
              </div>
            </Sky>
        )
    }
}
```

### attribute

name | type | default
--- | --- | ---
width | number|string | '100%'
height | number|string | 'auto'
starColor | string('#rrggbb') | '#ffffff'

## Demo

See [demo](https://clumsyme.github.io/sky/).

## License

With MIT license :smile:.
