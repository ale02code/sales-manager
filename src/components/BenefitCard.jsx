function BenefitCard({ img, title, text }) {
  return (
    <div className="border border-gray-400 px-4 py-2 h-30 w-52 shadow-md hover:scale-110 transition-transform ">
      <img className="h-10 mb-1" src={img} alt="Benefit Image" />
      <h6 className="text-xl font-bold font-agrandir">{title}</h6>
      <p className="text-md">{text}</p>
    </div>
  );
}

export default BenefitCard;
