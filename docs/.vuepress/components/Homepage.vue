<template>
  <div>
    <div class="masthead">
      <div class="masthead-inner">
        <h1>Bringing the Portland developer community together.</h1>
        <p>We're building a community focused on helping each other find jobs, solve problems, make friends, and so much more.</p>
        <p>
          This group is still getting off the ground, so you can be a part from the very beginning. Add your email to get notified of what's going on, or drop us a note to say hi:
          <a
            href="mailto:info@pdxdevs.org"
          >info@pdxdevs.org</a>
        </p>
        <div class="masthead-invite-block">
          <h2>Hear when this thing starts</h2>
          <form action="https://formspree.io/xpzygqrd" method="POST">
            <input type="email" name="_replyto" placeholder="email" />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>

    <div class="home-body">
      <div class="info-section">
        <h2>So what is it?</h2>
        <p>Portland Devs is a nascent group of folks interested in advancing the Portland tech community.</p>
        <p>To start, this will consist of a Slack or Discord group. Imagine a friendlier Stack Overflow with familiar faces (or at least usernames) answering your questions about React, CSS, C++, anything. A place to share the cool side project or library you just launched. A career advice channel where you can ask about negotiating a raise, or get feedback on your cover letter.</p>

        <h2>Who can join?</h2>
        <p>Anyone can join! We're open to folks of all experience levels, tech professions, age, gender - and even location if you're nice enough ;)</p>

        <h2>Slack, Discord, IRC? Where is this thing happening?</h2>
        <p>
          Help us decide! Right now, I'm leaning towards slack. Many people already have it open for work, so it has some network effects. Think Discord is better? Spectrum? RocketChat? Make a pitch for your favorite:
          <a
            href="mailto: info@pdxdevs.org"
          >info@pdxdevs.org</a>.
          Our priorities are:
        </p>
        <ul>
          <li>Free (or very cheap). We do not have a budget.</li>
          <li>Accessible. Both in the "easy to learn to use" sense and also the screenreader sense.</li>
          <li>Fun. Custom emojis are a plus. I like the slackbot auto-reply thing.</li>
        </ul>

        <h2>So, it doesn't exist yet? What's the plan?</h2>
        <p>No, it doesn't exist just yet. One danger of a group like this is that there's not enough going on initially and people stop showing up. I'm hoping we can generate some interest, then do a "launch" and turn the whole thing on. Ride that momentum, bay-bee!</p>

        <h2>I'm not a developer - is that okay?</h2>
        <p>Absolutely! If you're in to design, UX, Project Management, any kind of coding, or are just curious and want to connect with tech-minded folks this is still the place for you. Get on in here!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./styles/_global.scss";

.masthead {
  background: $nile-blue;
  box-sizing: border-box;
  color: $white;
  overflow: hidden;
  padding: 4em 1em 2em 1em;
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 10em 7.5em;
  }

  &:after {
    background: url("/portland-skyline.svg") no-repeat 0 0;
    content: "";
    height: 68%;
    left: 40%;
    opacity: 0.05;
    position: absolute;
    right: auto;
    top: 20%;
    width: 100%;
    z-index: 0;
  }
}
.masthead-inner {
  position: relative;
  z-index: 5;

  h1 {
    font-size: 1.4rem;
  }

  a {
    border-bottom: 3px solid $venice-blue;
    color: $white;
    text-decoration: none;
  }
}
.masthead-invite-block {
  display: flex;
  flex-direction: column;
  max-width: 768px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 4em;
  }

  @media screen and (min-width: 1440px) {
    max-width: 940px;
  }

  form {
    margin-top: 2em;
    margin-left: 2em;
    input {
      margin-top: 1em;
      font-size: 1.4rem;
      border-bottom: 3px solid $gold;
    }
  }

  .coc-notice {
    font-size: 0.65em;
    opacity: 0.6;
  }
}

.home-body {
  background: $white;
}

.info-section {
  box-sizing: border-box;
  max-width: 860px;
  padding: 1em;

  &:nth-of-type(1) {
    border-left: 1em solid $gold;
    @media screen and (min-width: 768px) {
      border-left: 3em solid $gold;
    }
  }

  &:nth-of-type(2) {
    border-left: 1em solid $maroon;
    @media screen and (min-width: 768px) {
      border-left: 3em solid $maroon;
    }
  }

  &:nth-of-type(3) {
    border-left: 1em solid $venice-blue;
    @media screen and (min-width: 768px) {
      border-left: 3em solid $venice-blue;
    }
  }

  @media screen and (min-width: 768px) {
    border-left: 10px;
    padding: 1em 5em;
  }

  a {
    border-bottom: 0.1em solid #2d4f75;
    color: #2d4f75;
    text-decoration: none;
  }
}

.openc-button {
  display: inline-block;
  text-decoration: none;
  background: #2d4f75;
  padding: 8px 12px;
  bottom: 20px;
  color: white;
  z-index: 100;
  @media (min-width: 768px) {
    position: absolute;
  }
}
</style>
