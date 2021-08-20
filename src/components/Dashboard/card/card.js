import useUsers from "../../../hooks/use-users";
import "./styles/card.css";

const Card = ({ src }) => {
	const users = useUsers();

	return (
		<div className='card__container'>
			{users.length > 0 &&
				users.map(user => (
					<div key={user.id} className='card'>
						<div className='card__check'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='h-5 w-5'
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path
									fill-rule='evenodd'
									d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
									clip-rule='evenodd'
								/>
							</svg>
						</div>
						<div className='card__profile'>
							<div className='pic'>
								<img
									src={`/images/avatars/${
										Math.floor(Math.random() * 5) + 1
									}.png`}
									alt='profile picture'
								/>
							</div>
							<div className='card__text'>
								<p className='name'>{`${user.first_name} ${user.last_name}`}</p>
								<p className='country'>{`${user.institution}`}</p>
							</div>
						</div>
						<div className='card__info'>
							<div className='card__followers'>
								<p>Asigned Projects</p>
								<p>6</p>
							</div>
							<span></span>
							<div className='card__Finished Projects'>
								<p>Finished Projects</p>
								<p>1</p>
							</div>
						</div>
					</div>
				))}
		</div>
	);
};

export default Card;
