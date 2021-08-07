module.exports = {
    plugins: [
        require('postcss-import'),
        require('autoprefixer'),
        require('tailwindcss/nesting'),
        require('cssnano'),
        require('tailwindcss'),
    ]
  }
  