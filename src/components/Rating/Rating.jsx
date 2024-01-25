const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key={fullStars + 1}>&#9734;</span>);
    }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default Rating;
