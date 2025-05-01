const Card = ({ onClose, ...data }) => {
  return (
    <div className="flex size-100 flex-col items-center gap-4 rounded-lg bg-blue-800 p-6 text-white">
      <div className="flex w-full justify-end">
        <button
          aria-label="닫기 버튼"
          onClick={onClose}
          type="button"
          className="cursor-pointer"
        >
          <i className="fa-solid fa-xmark rounded-full bg-primary px-1.5 py-1 hover:bg-secondary"></i>
        </button>
      </div>

      <a
        href={`https://github.com/${data.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <img
          src={data.avatar_url}
          alt={`${data.name} 이미지`}
          className="size-35 cursor-pointer rounded-full border-4 border-primary transition-all duration-200 ease-in-out hover:scale-105"
        />
      </a>
      <a
        href={`https://github.com/${data.name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:text-gray-300"
      >
        {data.name}
      </a>
      <p className="text-body">{data.bio}</p>
      <div className="flex w-full gap-4">
        <div className="follows colorDuration">
          <p>Followers</p>
          <p className="text-body">{data.followers}</p>
        </div>
        <div className="follows colorDuration">
          <p>Following</p>
          <p className="text-body">{data.following}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
