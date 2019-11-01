# Events app

_Single Page Application builded with React. The app, is about an event interface using the [Public Eventbrite API](https://www.eventbrite.com/platform/api), which allows filtering by category and keyword. You can see a demo <a href="https://cterrasid.github.io/events-app/" target="blank">HERE</a>_

## Project Structure 📄

```
/
`-_src
    |-App
    |-components
        |-Header
        |-Form
        |-EventsList
            |-Event
    |-context
        |-ContextCategories
        |-ContextEvents
```

## Starting 🚀

_These instructions will allow you to obtain a copy of the project on your local machine for development and testing purposes._

1. You need to install [Node 10.16.0 & npm 6.9.0](https://nodejs.org/es/download/).

2. Clone the repository: `$ git clone https://github.com/cterrasid/events-app/`. You can also Fork the project so you'll have it on your GitHub profile.

3. Install dependencies with `$ npm install`.

4. To launch the project and see it in the browser, run `$ npm start`.

### Requirements 📋

_To use the application you must have the following:_

1. An API key, which you can obtain through the following <a href="https://www.eventbrite.com/platform/" target="blank">link</a>

2. In the root of the project, you must create an `.env` file, in which, you must write the following:
```
REACT_APP_API_KEY = put-here-your-API-key
```
3. It's ready! You already have access to Eventbrite's list of events!

## License 📄

This project is under the MIT License - see the file [LICENSE.md](LICENSE.md) for details

## Author ✒️

- Clarette Terrasi Díaz - [cterrasid](https://www.linkedin.com/in/cterrasid/)
