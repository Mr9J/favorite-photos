import React from "react";

const About = () => {
  return (
    <div className="about">
      <h2>About this website:</h2>
      <br />
      <p>
        This website use React as its front-end framework and connects to the
        Pexels.com API as its back-end database.
        <br />
        <br />
        According to the Pexels website's guidelines, all images on the website
        are available for free use.
        <br />
        Furthermore, this website is intended solely for my practice and
        learning in web development, and there should be no concerns regarding
        copyright infringement. If there are any questions or issues, please
        feel free to contact me.
        <br />
        <br />
        In addition, I have implemented Google Auth using Firebase for sign in
        to the website. <br />
        Access to the Collection feature is restricted, and users must sign in
        before they can access it.
        <br />
        <br />
        The website allows users to perform photo searching, and when user click
        download button, the high-resolution photo in its original size will
        provided.
        <br />
        <br />
        Since this website doesn't connect to a back-end database, when users
        click collection button to add photos in collection, the photo's id will
        be saved in the user's localstorage.
        <br /> The Collection page displays the photos that user has collected.
        Therefore, when the user remove their local storage, the record of
        collected photos will also disappear.
      </p>
      <br />
      <br />
      <h2>Contact:</h2>
      <br />
      <p>siechengye@gmail.com</p>
    </div>
  );
};

export default About;
