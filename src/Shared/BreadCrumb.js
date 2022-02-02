const BreadCrumb = (props) => {
  return (
    <div class="breadcrumb-wrap breadcrumb-wrap-2">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {props.title}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default BreadCrumb;
