// import

const navbar = () => {
  return `
    <nav>
    <div id="left">
        <img src="media/main_logo.png" alt="">
        <div>
            <img src="media/add.png" alt="">
            <p>New Post</p>
        </div>
    </div>
    <div id="right">
        <button class="btn purple">Go Ad-Free</button>
        <a href="#">Sign in</a>
        <button class="btn green">Sign up</button>
    </div>
    <div id="search-bar">
        <input type="search" name="" id="" placeholder="Images,#tags @user oh my!">
        <i class="fa fa-search  icon" aria-hidden="true"></i>
    </div>
</nav>
    `;
};
export { navbar };
