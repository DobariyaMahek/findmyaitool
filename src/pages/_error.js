// pages/_error.js

export const runtime = "experimental-edge"; // or 'edge' depending on the runtime

function ErrorPage({ statusCode }) {
  return (
    <div>
      <h1>
        {statusCode ? `An error ${statusCode} occurred` : "An error occurred"}
      </h1>
    </div>
  );
}

ErrorPage.getInitialProps = async (ctx) => {
  const statusCode = ctx.err
    ? ctx.err.statusCode
    : ctx.res
    ? ctx.res.statusCode
    : null;
  return { statusCode };
};

export default ErrorPage;
