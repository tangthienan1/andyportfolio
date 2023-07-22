const path = require('path');

const buildEslintCommand = (filenames) =>
    `nest lint --fix --file ${filenames
        .map((f) => path.relative(process.cwd(), f))
        .join(' --file ')}`;

module.exports = {
    '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
