import React, { useRef, useState, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';

interface VideoItem {
  id: number;
  url: string;
  poster: string;
  title: string;
  description: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-doctor-examining-patient-in-a-hospital-43230-large.mp4',
    poster: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
    title: 'Expert Medical Care',
    description: 'Experience our state-of-the-art medical facilities'
  },
  {
    id: 2,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-medical-team-in-a-hospital-43209-large.mp4',
    poster: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg',
    title: 'Dedicated Medical Team',
    description: 'Our skilled surgeons in action'
  },
  {
    id: 3,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-doctor-washing-his-hands-43210-large.mp4',
    poster: 'https://images.pexels.com/photos/4021814/pexels-photo-4021814.jpeg',
    title: 'Advanced Technology',
    description: 'Cutting-edge technology in our laboratories'
  }
];

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${className} !flex items-center justify-center w-12 h-12 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-300`}
    style={{ ...style, right: '20px', zIndex: 10 }}
    onClick={onClick}
  >
    <FaChevronRight className="text-blue-600 text-xl" />
  </div>
);

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${className} !flex items-center justify-center w-12 h-12 bg-white bg-opacity-80 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-300`}
    style={{ ...style, left: '20px', zIndex: 10 }}
    onClick={onClick}
  >
    <FaChevronLeft className="text-blue-600 text-xl" />
  </div>
);

const VideoCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sliderRef = useRef<Slider>(null);

  // Initialize video refs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);

  // Handle video play/pause when slider changes
  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      currentVideo.play().catch((e: Error) => console.log('Autoplay prevented:', e));
      setIsPlaying(true);
    }
    
    return () => {
      // Pause all videos when component unmounts or slide changes
      videoRefs.current.forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    };
  }, [currentSlide]);

  const togglePlayPause = React.useCallback(() => {
    const video = videoRefs.current[currentSlide];
    if (video) {
      if (video.paused) {
        video.play().then(() => setIsPlaying(true));
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  }, [currentSlide]);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Our Facilities in Action</h2>
        <div className="max-w-5xl mx-auto relative group">
          <Slider 
            ref={sliderRef}
            {...settings}
            beforeChange={(_: number, next: number) => setCurrentSlide(next)}
          >
            {videos.map((video, index) => (
              <div key={video.id} className="relative pt-[45%] w-full">
                <video
                  ref={el => {
                    videoRefs.current[index] = el;
                  }}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  poster={video.poster}
                  autoPlay
                  onClick={togglePlayPause}
                >
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Play/Pause Button */}
                <button 
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    togglePlayPause();
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} className="ml-1" />}
                </button>
                
                {/* Video Title and Description */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">{video.title}</h3>
                  <p className="text-sm text-gray-200 mt-1">{video.description}</p>
                </div>
              </div>
            ))}
          </Slider>
          
          {/* Custom Navigation Arrows */}
          <button 
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Previous video"
          >
            <FaChevronLeft size={18} />
          </button>
          <button 
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Next video"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoCarousel;
