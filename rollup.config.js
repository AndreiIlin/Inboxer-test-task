import { resolve } from 'path';

export default {
  input: [resolve(__dirname, 'index.html')],

  output: {
    entryFileNames: 'js/[name].js',
    assetFileNames: ({ name }) => {
      const extType = name.split('.').at(1);

      if (/\.css$/i.test(name ?? '')) {
        return 'styles/[name].css';
      }

      if (/\.(png|jpe?g|gif|webp)$/i.test(name ?? '')) {
        return 'assets/[name][extname]';
      }

      if (/\.(woff(2)?|ttf|eot|otf)$/i.test(name ?? '')) {
        return 'fonts/[name][extname]';
      }

      return `${extType}/[name][extname]`;
    },
  },
};
