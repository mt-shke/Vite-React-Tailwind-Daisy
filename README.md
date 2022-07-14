```js
// npm create vite@latest
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init
// npm i daisyui
```

<details>
<summary>Tailwind Config</summary>

tailwind.config.cjs

```js
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
};
```

postcss.config.cjs

```js
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
};
```

index.css

```js
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
}

```

</details>

<details>
<summary>Daisy UI</summary>

```js
// npm i daisyui
```

tailwind.config.js

```js
module.exports = {
    //...
    plugins: [require("daisyui")],
};
```

</details>
