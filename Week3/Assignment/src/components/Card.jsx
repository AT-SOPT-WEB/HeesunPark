const Card = ({ ...data }) => {
  return (
    <div className="flex size-100 flex-col items-center gap-4 rounded-lg bg-blue-900 p-6 text-white">
      <button type="button" className="flex w-full justify-end text-white">
        <i className="fa-solid fa-xmark rounded-full bg-secondary px-1.5 py-1"></i>
      </button>

      <img
        src={data.avatar_url}
        alt={`${data.name} 이미지`}
        className="size-40 rounded-full border-4 border-primary"
      />
      <p>{data.name}</p>
      <p className="text-body">{data.bio}</p>
      <div className="flex w-full gap-4">
        <div className="flex w-full flex-col items-center rounded-lg bg-secondary p-2">
          <p>Followers</p>
          <p className="text-body">{data.followers}</p>
        </div>
        <div className="flex w-full flex-col items-center rounded-lg bg-secondary p-2">
          <p>Following</p>
          <p className="text-body">{data.following}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
