# ex1

- build MoviesListClass Component
- Build HeaderAppClass Component

# Solution

- Clone github repo: https://github.com/galamo/react-movies-app
- Run `npm install` in the main folder
- Run `npm start`
- Application is running - you can start Code.


# ex 2

- Create Rank component based on function component with the following state
- The component should react to the inserted value
- RankComponent
- useState
- input 
- setInputState




## Install React bootstrap
-  `npm install react-bootstrap bootstrap`


## Install React Router DOM
-  `npm install react-router-dom`

# ex 3 
- Create new Route which present the About page site.


 # ex 4
- Implement search API on input change


# ex 5 Homework
- create drop down list
- values: search, title, id
- search will concat to the URL  s=value
- title will concat to the URL  t=value
- id will concat to the URL  i=value



```html
<Form.Group>
  <Form.Control as="select" size="lg">
    <option>Search</option>
        <option>Title</option>
            <option>Id</option>
  </Form.Control>
  <br />

</Form.Group>
```

# ex 6

Try to generate Routes based on the Option exercise practice
[{...},{...}] => [<Route>,<Route>,<Route>]


# ex 7 - Homework 27-12

1. Implement Movie Page ( transfer to the movie page IMDBid on the path params) - see the below code snippet we started
2. on Movie page loading call API to fetch the Movie details
3. present ALL the details from the API
4. Use the Withloading HOC in the Movie page ( show loader till the movie data fetched / resolved)

 
```javascript

export default function MoviePage() {
    const params = useParams()
    console.log(params)
    return <div> Movie Page: {params.movieTitle} </div>
}

```