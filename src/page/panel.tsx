import React from 'react'
import ReactDOM from 'react-dom/client'
import Panel from '../component/panel/Panel'
import App from '../component/app/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Panel />
		<App />
	</React.StrictMode>
)