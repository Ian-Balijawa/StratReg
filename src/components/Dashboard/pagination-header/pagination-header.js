import "./styles/pagination-header.css";
const PaginationHeader = () => {
	return (
		<div className='card__container__header'>
			<div className='card__header'>
				<p>Hot ticket</p>
			</div>

			<div className='card__pagination'>
				<div className='spans'>
					<span className='chevron_left'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M15 19l-7-7 7-7'
							/>
						</svg>
					</span>
					<span>1-50 pages</span>
					<span className='chevron_right'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='h-5 w-5'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fill-rule='evenodd'
								d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
								clip-rule='evenodd'
							/>
						</svg>
					</span>
				</div>

				<div className='pagination__btns'>
					<div>
						<button type='button'>All</button>
					</div>
					<div className='btn-group'>
						<button type='button'>Earlier</button>
						<button type='button'>Recent</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaginationHeader;
