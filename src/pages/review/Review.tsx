import React, { useState, useRef } from 'react';
import video04 from '../../assets/videos/video04.mp4';
import video05 from '../../assets/videos/video05.mp4';
import video06 from '../../assets/videos/video06.mp4';
import googleIcon from '../../assets/icons/google.svg';

// --- TYPE DEFINITIONS ---
interface StarRatingProps {
  rating: number;
}

interface VideoPlayerProps {
  src: string;
  title: string;
}

interface ReviewItem {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
}
// ------------------------

// Component StarRating 
const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.372 2.451a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.372-2.451a1 1 0 00-1.176 0l-3.372 2.451c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.083 9.385c-.784-.57-.383-1.81.588-1.81h4.167a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
    );
  }
  return <div className="flex items-center space-x-0.5">{stars}</div>;
};

// Component VideoPlayer (Giữ nguyên)
const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  return (
    <div className="relative aspect-[3/4] lg:aspect-[3/5] bg-black rounded-lg overflow-hidden shadow-lg group">
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        className="w-full h-full object-cover cursor-pointer"
        onClick={handlePlayPause}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>
      <div
        className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
        onClick={handlePlayPause}
      >
        <div className="w-14 h-14 bg-white/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors shadow-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-8 h-8 text-main ${isPlaying ? '' : 'ml-1'}`}
          >
            {isPlaying ? (
              <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm6.75 0a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.533 0 3.245l-11.54 6.348c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};


const ALL_REVIEWS: ReviewItem[] = [
  { id: 1, name: "Jessica A.", rating: 5, date: "3 weeks ago", comment: "Absolutely flawless service! My Ombre Brows look incredibly natural and the staff were so kind and professional. Highly recommend this salon." },
  { id: 2, name: "Mike L.", rating: 5, date: "1 month ago", comment: "The Lip Blush treatment exceeded my expectations. Subtle change but huge impact. The place is spotless and they are very precise." },
  { id: 3, name: "Sarah K.", rating: 4, date: "2 months ago", comment: "Great experience with the Eyeliner Tattoo. The result is exactly what I wanted. Lost one star because the wait time was a little long." },
  { id: 4, name: "David H.", rating: 5, date: "4 weeks ago", comment: "Consistently amazing results for my touch-ups. They truly are the masters of permanent makeup. Always clean and welcoming." },
  { id: 5, name: "Emily W.", rating: 5, date: "1 week ago", comment: "I highly recommend! The Full Lip treatment was surprisingly comfortable and the healing process was easy thanks to their detailed instructions." },
  { id: 6, name: "Chris T.", rating: 5, date: "2 weeks ago", comment: "Five stars! I chose them for my Microblading and couldn't be happier. The shape complements my face perfectly. Thank you!" },
  { id: 7, name: "Anna S.", rating: 4, date: "3 months ago", comment: "Very good service. The technician took her time to ensure symmetry. The cost is a little high, but the quality is worth it." },
  { id: 8, name: "Robert F.", rating: 5, date: "5 months ago", comment: "Professionalism at its best. Came for a corrective brow service and they fixed my old tattoo beautifully. Highly skilled team." },
  { id: 9, name: "Lisa M.", rating: 5, date: "1 month ago", comment: "Love, love, love my new brows! This place deserves all the hype. Easy booking process and fantastic results." },
  { id: 10, name: "George P.", rating: 5, date: "7 months ago", comment: "Excellent customer service from the moment I walked in. I felt very safe and the results of my Lip Blush are stunning. Great value." },
  { id: 11, name: "Nancy V.", rating: 4, date: "6 days ago", comment: "Quick and efficient Eyeliner service. Looks beautiful. Just wish they had more flexible booking slots." },
  { id: 12, name: "Kevin B.", rating: 5, date: "8 months ago", comment: "Fantastic place! Their attention to detail is unmatched. My combination brows healed perfectly. 10/10." },
  { id: 13, name: "Olivia R.", rating: 5, date: "1 year ago", comment: "Life-changing! Saves me time every morning. The staff are so warm and the studio is immaculate. My best beauty investment." },
  { id: 14, name: "Sam D.", rating: 5, date: "1 month ago", comment: "Perfect service and results! My lips look naturally enhanced. If you're considering permanent makeup, this is the place to go." },
  { id: 15, name: "Zoe G.", rating: 4, date: "2 months ago", comment: "Very happy with the outcome of my brows. Staff was patient. The only minor point is limited parking space." },
];


const Review: React.FC = () => {
  const REVIEWS_PER_LOAD = 3;

  const [visibleCount, setVisibleCount] = useState<number>(REVIEWS_PER_LOAD);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + REVIEWS_PER_LOAD);
  };

  const visibleReviews = ALL_REVIEWS.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_REVIEWS.length;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-main uppercase tracking-wider">
            Our Works
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-main sm:text-4xl">
            See Our Client's Transformations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <VideoPlayer src={video04} title="Client Transformation 1" />
          <VideoPlayer src={video05} title="Client Transformation 2" />
          <VideoPlayer src={video06} title="Client Transformation 3" />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-main uppercase tracking-wider">
            Google Reviews
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-main sm:text-4xl">
            See Our Client's Feedback
          </p>
          <p className="mt-4 text-xl text-main">
            Based on {ALL_REVIEWS.length} reviews | Overall Rating: 4.8/5.0
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-y-6">
          {visibleReviews.map((review: ReviewItem) => (
            <div
              key={review.id}
              className="bg-secondary p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-main font-bold text-sm flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-main text-sm">{review.name}</p>
                  <div className="flex items-center space-x-2">
                    <StarRating rating={review.rating} />
                    <span className="text-xs text-gray-500">• {review.date}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center mb-2 gap-1">
                <img src={googleIcon} alt="Google Icon" className='w-3 h-3' />
                <span className="text-xs text-gray-500 font-medium">Reviewed on Google</span>
              </div>


              <p className="text-gray-700 leading-relaxed text-sm">
                {review.comment}
              </p>

            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-6 text-center flex justify-center items-center">
            <button
              onClick={handleLoadMore}
              className="w-fit float-end border cursor-pointer border-main py-1 lg:py-2 px-6 lg:px-8 mt-4 tracking-widest text-main hover:bg-neutral-100 transition-colors"
            >
              Load More Reviews ({ALL_REVIEWS.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {!hasMore && (
          <div className="mt-12 text-center text-gray-500 font-medium">
            <p>You've seen all {ALL_REVIEWS.length} reviews!</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Review;