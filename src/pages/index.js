import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Logo from "../images/logo.inline.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div class="home">
      <div class="content">
        <h1>
          <Logo />
        </h1>

        <p>
          I'm a passionate Designer & Developer currently living in Louisville,
          Kentucky. One day I hope to make it back to the{" "}
          <span class="trigger trigger-cincy">greatest city in the world</span>{" "}
          where I can continue my passion and raise{" "}
          <span class="trigger trigger-ingram">my son</span>. During normal
          business hours I create all kinds of interactive items for{" "}
          <a
            href="https://edservices.wiley.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wiley Education Services
          </a>{" "}
          and in the late hours of night you can find me making{" "}
          <a
            href="http://colors.commutercreative.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            a useful tool for web designers
          </a>
          ,{" "}
          <a
            href="http://commutercreative.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            free jekyll themes
          </a>{" "}
          or{" "}
          <a
            href="http://www.arbitraryawards.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            something completely arbitrary
          </a>
          .
        </p>

        <p class="shoutOut">
          If you have a project you'd like to collaborate on{" "}
          <a href="mailto:brianmaierjr@gmail.com?subject=Hey dude. Let's make magic together.">
            send me a message
          </a>
          .
        </p>

        <ul class="social">
          <li>
            <a
              href="https://github.com/brianmaierjr"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/brianmaierjr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/brianmaierjr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
          <li>
            <a href="mailto:brianmaierjr@gmail.com?subject=Hey dude. Let's make magic together.">
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
