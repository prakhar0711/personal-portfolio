import "../assets/css/techstackcard.css";
function TechStackCard({
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  description,
  // eslint-disable-next-line react/prop-types
  img1,
  // eslint-disable-next-line react/prop-types
  img2,
  // eslint-disable-next-line react/prop-types
  img3,
  // eslint-disable-next-line react/prop-types
  img4,
  // eslint-disable-next-line react/prop-types
  img5,
  // eslint-disable-next-line react/prop-types
  img6,
  // eslint-disable-next-line react/prop-types
  img7,
}) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
      <div className="card-body">
        <h2 className="card-title font-extrabold ">
         {title}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {img1 && <img src={img1} alt={`${title} Logo`} />}
          {img2 && <img src={img2} alt={`${title} Logo`} />}
          {img3 && <img src={img3} alt={`${title} Logo`} />}
          {img4 && <img src={img4} alt={`${title} Logo`} />}
          {img5 && <img src={img5} alt={`${title} Logo`} />}
          {img6 && <img src={img6} alt={`${title} Logo`} />}
          {img7 && <img src={img7} alt={`${title} Logo`} />}
        </div>
      </div>
    </div>
  );
}

export default TechStackCard;
