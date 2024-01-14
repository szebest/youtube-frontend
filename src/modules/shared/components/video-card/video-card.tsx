import { memo } from "react";
import { Link } from "react-router-dom";

import styles from './video-card.module.scss';

import { API_BASE_URL } from "src/config";
import { timeAgo } from "src/lib";

import { Video } from "../../models";

import { formatNumbers, mapCategory } from "../../helpers";

import { ProfilePicture } from "..";

export type VideoCardProps = {
	video: Video;
}

export const VideoCard = memo(({ video }: VideoCardProps) => {
	const userProfileRoute = `/user/${video.userId}`;
	const videoRoute = `/watch/${video.id}`;
	
	return (
		<Link to={videoRoute} className={styles.link}>
			<div className={styles.container}>
				<img className={styles.container__thumb} src={API_BASE_URL + video.thumbnailSrc} loading="lazy" alt="thumbnail" />
				<div className={styles.container__info}>
					<div className={styles.container__main}>
						<Link to={userProfileRoute} className={styles.container__avatar}>
							<ProfilePicture src={video.profilePictureSrc} />
						</Link>
						<div>
							<div className={styles.container__title}>
								<p className={styles.text}>{video.title}</p>
							</div>
							<div className={styles.container__meta}>
								<div className={styles.container__meta__user}>
									<Link to={userProfileRoute}>
										<p>{video.userFullName}</p>
									</Link>
								</div>
								<div className={styles.container__meta__stats}>
									<span className={styles.text}>{formatNumbers(video.views)} views</span>
									<span className={styles.seperator}></span>
									<span className={styles.text}>{timeAgo.format(new Date(video.createdAt))}</span>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.container__additional}>
						<p className={styles.text}>{video.description}</p>
						<span className="chip">{mapCategory(video.category)}</span>
					</div>
				</div>
			</div>
		</Link>
	);
});

export default VideoCard;
