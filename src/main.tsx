import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import App from './App.js';
import { configureStore } from './redux/store.js';

createRoot(document.getElementById('root')!).render(
	<Provider store={configureStore()}>
		<App />
	</Provider>
);
