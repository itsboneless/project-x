export default {
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        projects: 'projects.html',
      },
    },
  },
};
