import App from './src/App';

App.install = (Vue) => {
  Vue.component(App.name, App);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(App);
}

export default App;