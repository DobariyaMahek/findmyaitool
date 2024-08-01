// src/pages/_error.js
export const runtime = "experimental-edge";

function ErrorPage({ statusCode }) {
  return (
    <div>
      <h1>An error occurred: {statusCode}</h1>
    </div>
  );
}

ErrorPage.getInitialProps = async (ctx) => {
  const statusCode = ctx.err
    ? ctx.err.statusCode
    : ctx.res
    ? ctx.res.statusCode
    : 404;
  return { statusCode };
};

export default ErrorPage;
