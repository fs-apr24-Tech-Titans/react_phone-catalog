import './PageNotFound.scss';

export const PageNotFound = () => {
  return (
    <div className="pageNotFound__wrapper">
      <div className="pageNotFound">
        <h1 className="pageNotFound__title">Ooooops!</h1>

        <div className="pageNotFound__image-wrapper">
          <img
            src="./page-not-found.png"
            alt="page-not-found"
            className="pageNotFound__img"
          />
        </div>
      </div>
    </div>
  );
};
