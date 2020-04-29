// https://github.com/zeit/next.js/blob/canary/examples/with-tailwindcss/postcss.config.js

module.exports = {
  plugins: [
    'tailwindcss',
    // Remove unused tailwind classess in production to reduce bundle size
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            },
          ],
        ]
      : []),
    'postcss-preset-env',
  ],
};
