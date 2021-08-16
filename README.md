# etl

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

## Testing

Comment/Uncomment `findAll()` in the `src/models/User.js` file to test the Model transformer.

Test only 1 `findAll()` at a time.

- API Source 1: Line 16-36
- API Source 2: Line 42-62

The data from two different sources have different structure somehow the final `User` object will always be the same no matter what structure it came.

- https://run.mocky.io/v3/f7f2db83-197c-4941-be3e-fffd2ad31d26
- https://run.mocky.io/v3/43f74332-bd73-44fa-b842-73b7e7a94646

There is also no need to change anything in the component that is using this model since the final `User` structure will always be the same.
