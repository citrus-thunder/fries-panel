import './panel.scss';

export default function Panel() {

	Twitch.ext.onAuthorized((auth) => {
		let x = auth;
	});

	return (
		<div className="app-container">
			<div id='root-panel'>
				<div id='name-plate'>
					<p className="player-name">
						xTwitchUserNamex
					</p>
				</div>
				<div className='sidebar left'>
					<div className='top-spacer'></div>
					<div className='bar-cap'>
						<div className='portrait-frame'>
							<div className='player-portrait'>

							</div>
						</div>
					</div>
					<div className='equip-frame'>
						<div className='equip-portrait'>

						</div>
					</div>
					<div className='equip-frame'>
						<div className='equip-portrait'>

						</div>
					</div>
					<div className='equip-frame'>
						<div className='equip-portrait'>

						</div>
					</div>
				</div>
				<div className='mainbar'>
					<div className='top-spacer'></div>
					<div className='bar-cap'>
						<div className='level-info'>
							<div className='level-text'>
								<div className='text --left'>
									Level 7
								</div>
								<div className='text --right'>
									40 HP
								</div>
							</div>
							<div className='level-bar'>
								<div className='level-bar-frame'>
									<div className='level-bar-fill'>

									</div>
									<div className='level-bar-text'>
										25/100
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='text-row'>
						<div className='text --left'>
							Armor
						</div>
						<div className='text --right'>
							Fries
						</div>
					</div>
					<div className='text-row'>
						<div className='text --left'>
							Shield
						</div>
						<div className='text --right'>
							Gold
						</div>
					</div>
					<div className='text-row'>
						<div className='text --left'>
							Weapon
						</div>
						<div className='text --right'>
							Item
						</div>
					</div>
				</div>
				<div className='sidebar right'>
					<div className='top-spacer'></div>
					<div className='bar-cap'></div>
					<div className='equip-frame'>
						<div className='equip-portrait'>
							<img src="/img/Fries.png"></img>
						</div>
					</div>
					<div className='equip-frame'>
						<div className='equip-portrait'>
							<img src="/img/ui/greed.png"></img>
						</div>
					</div>
					<div className='equip-frame'>
						<div className='equip-portrait'>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}