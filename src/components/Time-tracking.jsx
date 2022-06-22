import React from 'react';
import '../styles/Time-tracking.css';
import {useState, useEffect} from 'react';

export default function Timer() {
	const [date, setDate] = useState(new Date());
	const [time, setTime] = useState({s: 0, m: 0, h: 0});
	const [interv, setInterv] = useState();
	const [input, setInput] = useState('');
	const [disabled, setDisabled] = useState(false);
	const [showDate, setShowDate] = useState('00:00:00');

	var updatedSec = time.s;
	var updatedMin = time.m;
	var updatedH = time.h;

	function start() {
		run();
		setInterv(setInterval(run, 1000));
		setInput('');
		setDisabled(true);
		setShowDate(date.toLocaleTimeString());
	}
	function stop() {
		clearInterval(interv);
		setTime({s: 0, m: 0, h: 0});
		setDisabled(false);
		setShowDate('00:00:00');
	}

	function run() {
		if (updatedMin === 60) {
			updatedH++;
			updatedMin = 0;
		}
		if (updatedSec === 60) {
			updatedMin++;
			updatedSec = 0;
		}
		updatedSec++;
		return setTime({s: updatedSec, m: updatedMin, h: updatedH});
	}

	function refreshClock() {
		setDate(new Date());
	}

	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);
		return function cleanup() {
			clearInterval(timerId);
		};
	}, []);

	return (
		<div className='frame-one'>
			<div className='rectangle'>
				<div className='group-15'>
					<div className='title-container'>
						<h1 className='started-at'>Started at: {showDate}</h1>
						<h1 className='timer'>
							Timer: {time.h >= 10 ? time.h : '0' + time.h}:
							{time.m >= 10 ? time.m : '0' + time.m}:
							{time.s >= 10 ? time.s : '0' + time.s}
						</h1>
					</div>
					<h1 className='task-description'>Task description</h1>
					<input
						type='text'
						name='email'
						value={input}
						id='email'
						placeholder='Went for a run'
						className='email'
						onChange={(e) => setInput(e.target.value)}
					/>
					<div className='buttons-container'>
						<button
							className='button-contained'
							disabled={disabled}
							onClick={() => start()}
						>
							Start
						</button>
						<button
							className='button-outline'
							disabled={!disabled}
							onClick={() => stop()}
						>
							Stop
						</button>
					</div>
				</div>
			</div>
			<div className='subtitle-container'>
				<h1 className='previous-tasks'>Previous tasks</h1>
			</div>
			<div className='rectangle-one'>
				<div className='group-three'>
					<div className='group-five'>
						<h1 className='description'>Description</h1>
						<h1 className='start-time'>Start time</h1>
						<h1 className='end-time'>End time</h1>
						<h1 className='duration'>Duration</h1>
					</div>
					<div className='group-six'>
						<h1 className='task-description'>
							Went for a run outside with my dog buddy.
						</h1>
						<h1 className='task-start-time'>05:10:00</h1>
						<h1 className='task-end-time'>05:15:00</h1>
						<h1 className='task-duration'>5 minutes</h1>
						<div className='rectangle-two'></div>
					</div>
					<div className='group-four'>
						<h1 className='task-description'>
							Went for a run outside with my dog buddy.
						</h1>
						<h1 className='task-start-time'>05:10:00</h1>
						<h1 className='task-end-time'>05:15:00</h1>
						<h1 className='task-duration'>5 minutes</h1>
						<div className='rectangle-two'></div>
					</div>
					<div className='group-seven'>
						<h1 className='task-description'>
							Went for a run outside with my dog buddy.
						</h1>
						<h1 className='task-start-time'>05:10:00</h1>
						<h1 className='task-end-time'>05:15:00</h1>
						<h1 className='task-duration'>5 minutes</h1>
						<div className='rectangle-two'></div>
					</div>
				</div>
			</div>
		</div>
	);
}
