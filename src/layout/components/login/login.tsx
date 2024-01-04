import { Link } from 'react-router-dom';
import { Dropdown, Form } from 'react-bootstrap';

import styles from './login.module.scss';

import { API_BASE_URL } from 'src/config';
import { useAuth, useTheme } from 'src/modules/shared/providers';

import { ProfilePicture } from 'src/modules/shared/components';

import fbLogoSecondary from 'src/assets/fb-logo-secondary.png';


export function Login() {
	const { user, isLoading } = useAuth();
	const { theme, changeTheme } = useTheme();

	if (isLoading)
		return null;

	return (
		<div className={styles.loginWrapper}>
			{!user
				?
				<form method='GET' action={`${API_BASE_URL}/account/facebook-login`}>
					<button type="submit" className={`${styles.loginWrapper__facebookLogin} btn btn-primary`} aria-label="facebook login">
						<img src={fbLogoSecondary} alt="fb" />
						<span className={styles.text}>
							<span>Login</span>
							<span className={styles.textLong}> with Facebook</span>
						</span>
					</button>
				</form>
				:
				<div className={styles.loginWrapper__userInfo}>
					<span>{user.firstName}</span>
					<Dropdown>
						<Dropdown.Toggle as='div'>
							<ProfilePicture src={user.profilePictureSrc} />
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<div className={`${styles.dropdown__username} dropdown-item`}>
								<div>
									<span>{user.firstName}</span>
								</div>
							</div>

							<div className='dropdown-item'>
								<div>
									<div className={styles.theme}>
										<p>{theme} theme</p>
										<Form.Check
											type="switch"
											id="theme-switch"
											label="Change theme"
											onChange={() => changeTheme(theme === 'light' ? 'dark' : 'light')}
											checked={theme === 'dark'}
										/>
									</div>
								</div>

								<Dropdown.Divider></Dropdown.Divider>
							</div>
							
							<Dropdown.Item as='div'>
								<Link to='/upload'>
									<i className="bi bi-cloud-arrow-up-fill"></i>
									<span>Upload</span>
								</Link>
							</Dropdown.Item>

							<Dropdown.Divider></Dropdown.Divider>

							<form method='POST' action={`${API_BASE_URL}/account/logout`} className='dropdown-item'>
								<button type="submit" aria-label="logout" className='btn-initial'>
									<i className="bi bi-door-closed-fill"></i>
									<span>Logout</span>
								</button>
							</form>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			}
		</div>
	);
}

export default Login;