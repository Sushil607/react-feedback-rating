import Card from "./Card";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <Card>
        <div className="title">404 Error!</div>
        <p>The page you are looking for doesn't exist or has been removed.</p>
        <p>We are sorry for your inconvinience.</p>
      </Card>
    </div>
  );
};

export default PageNotFound;
