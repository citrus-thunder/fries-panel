import './panel.scss';

export default function Panel() {

	Twitch.ext.onAuthorized((auth) =>
	{
		let x = auth;
	});

	return (
		<div className="App">
			<div>Panel Content</div>
		</div>
	)
}