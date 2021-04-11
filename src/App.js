import React from 'react'
import './App.css'
import {
  FlexBox,
  Heading,
  OrderedList,
  ListItem,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  Notes,
  Link,
} from 'spectacle'

import chris from './assets/chris.png'
import lauren from './assets/lauren.png'
import william from './assets/william.png'
import grid from './assets/grid.png'
import pie from './assets/pie.png'
import tree from './assets/tree.png'
import npm from './assets/npm.png'
import primaryText from './assets/primaryText.png'
import heading from './assets/heading.png'
import badges from './assets/badges.png'
import datePicker from './assets/datePicker.png'
import formControl from './assets/formControl.png'
import cssGrid from './assets/cssGrid.png'
import modal from './assets/modal.png'
import dataGrid from './assets/dataGrid.png'
import treeTwo from './assets/treeTwo.png'
import storybook from './assets/storybook.png'
import checkboxGif from './assets/checkboxGif.gif'
import codeSnippet from './assets/codeSnippet.png'
import todo from './assets/todo.png'
import histoOne from './assets/histoOne.png'
import tooltips from './assets/tooltips.png'
import direction from './assets/direction.png'
import todoTests from './assets/todoTests.png'
import material from './assets/material.png'
import base from './assets/base.png'
import primer from './assets/primer.png'
import reach from './assets/reach.png'
import semantic from './assets/semantic.png'
import evangelize from './assets/evangelize.gif'
import document from './assets/document.png'
import histoTwo from './assets/histoTwo.png'
import histoThree from './assets/histoThree.png'
import build from './assets/build.gif'

function App() {
  return (
    <Deck>
      <Slide>
        <FlexBox
          flexDirection="column"
          flexGrow={1}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Heading fontSize="5rem" textAlign="left">
            TD-Stylekit
          </Heading>
          <Text fontSize="4rem">
            Improving the Customer and Developer Experience
          </Text>
          <Text fontSize="2rem">
            Lauren Beatty, Senior Frontend Engineer and Team Lead
          </Text>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            Hi, everyone, and welcome! I'm excited to be here talking about
            TD-Stylekit
          </Text>
          <Text fontSize="2rem">
            My name is Lauren Beatty and I'm a Senior Frontend Engineer and Team
            Lead on the Frontend Team. I've been with Treasure Data for 2 years
            now
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          flexGrow={0.5}
          flexDirection="column"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Heading>TEAM_SCREAMING_SNAKE 🐍</Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <FlexBox flexDirection="column">
              <Image alt="Chris Jaure" src={chris} className="img" />
              <Text>Chris Jaure</Text>
            </FlexBox>
            <FlexBox flexDirection="column">
              <Image alt="William Gonzalez" src={william} className="img" />
              <Text>William Gonzalez</Text>
            </FlexBox>
            <FlexBox flexDirection="column">
              <Image alt="Lauren Beatty" src={lauren} className="img" />
              <Text>Lauren Beatty</Text>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            Within the Frontend team we have several sub-teams now, and the team
            I lead is TEAM_SCREAMING_SNAKE. We cover Integrations Hub, and are
            the owners of TD-Stylekit
          </Text>
          <Text fontSize="2rem">
            This is a really different structure from when I started. I think
            when I started 2 years ago there were 6 of us(?) working under Mike
            McElroy, and we were all just one little team. It has important
            implications for how we work now, and how we think about how we
            develop in Stylekit.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="5rem">Overview</Heading>
          <OrderedList>
            <ListItem>What is Stylekit? 🎨</ListItem>
            <ListItem>Who do we serve? 🤷‍♀️</ListItem>
            <ListItem>CX/UX/DevX? 👩‍💻</ListItem>
          </OrderedList>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            Today I'm going to talk about Stylekit. What is it? Who are the
            customers we serve? and finally, I'll do more of a deep-dive into
            how we think about the Developer Experience.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1}>
          <Heading fontSize="5rem">What is td-stylekit?</Heading>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">So, what is td-stylekit?</Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="4rem" textAlign="left">
            Common set of Components used across our FE products
          </Heading>
          <Grid gridGap="20px" gridTemplateAreas="'header header' 'left right'">
            <Image alt="css grid" src={grid} className="img-header" />
            <Image alt="pie chart" src={pie} className="img-left" />
            <Image alt="tree" src={tree} className="img-right" />
          </Grid>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            Stylekit is really 2 things. 1. it's the component library that's
            used in our FE products and beyond, and 2. it's the documentation of
            those components that's really intended for both our Design team and
            our FE Team.
          </Text>
          <Text fontSize="2rem">
            It was first conceived and developed 3 years ago. It includes around
            50 different components.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="4rem" textAlign="left">
            Published on npm
          </Heading>
          <Box>
            <Image alt="npm" src={npm} />
          </Box>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">It's published on npm.</Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="5rem" textAlign="left">
            Automated Release
          </Heading>
          <OrderedList>
            <ListItem>
              Via{' '}
              <Link
                href="https://github.com/semantic-release/semantic-release"
                target="_blank"
              >
                semantic-release
              </Link>
            </ListItem>
            <ListItem>Fully automated</ListItem>
            <ListItem>
              Follows{' '}
              <Link href="https://semver.org/" target="_blank">
                Semantic Versioning
              </Link>
            </ListItem>
            <ListItem>Automatic Changelog</ListItem>
          </OrderedList>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            We use a package called semantic-release to manage our release
            process. It's fully automated. Every time we merge into main, it
            triggers the release of a new version.
          </Text>
          <Text fontSize="2rem">
            The versioning follows Semantic Versioning, and the type of change
            is triggered by the commit message. Each new version adds info to
            the changelog and publishes info to a Slack channel via a webhook.
          </Text>
          <Text fontSize="2rem">
            This is great for consumers of the library, because they can control
            which features are included in their site. In particular with
            td-crystal, we have a number of different github packages that are
            independent. The codeowners have control over which version they
            include, and when they incorporate new versions.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Text-based Components
          </Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <Image src={primaryText} />
            <Image src={heading} />
          </FlexBox>
          <Image src={badges} />
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            Stylekit starts with very basic components that correspond to HTML
            tags that feature text, like Paragraphs, Headings, spans. It
            progresses to components that convey meaning with color and text
            like badges.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Form Elements
          </Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <Image src={datePicker} />
            <Image src={formControl} />
          </FlexBox>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            It includes Form elements like text, number inputs, selects,
            datepickers. These can all be customized in various ways depending
            on the use case.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Layout Components
          </Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <Image src={cssGrid} width="40%" height="auto" />
            <Image src={modal} width="45%" height="auto" />
          </FlexBox>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            It includes layout components that help control where things are
            placed on the screen. This is a new CSS Grid component. And the
            ever-popular modal. Modals are highly customizable, from a simple
            confirmation, all the way up to the Advanced Segment Editor. Many of
            our components are dual-purpose, and look one way for td-console,
            and another for td-crystal.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Display and Interact with Data
          </Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <Image src={dataGrid} />
            <Image src={treeTwo} width="35%" height="auto" />
          </FlexBox>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            Probably the most complex components we have include those that
            allow you to display and interact with data, like the DataGrid and
            Tree.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="4rem" textAlign="left">
            Robust <br /> Documentation
          </Heading>
          <Box>
            <Image alt="npm" src={storybook} />
          </Box>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            So, not only is stylekit an exported package of components published
            as its own library, it's also a website with robust documentation on
            those components. We manage the documentation with a library called
            Storybook.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="5rem" textAlign="left">
            What is Storybook
          </Heading>
          <OrderedList>
            <ListItem>Open Source tool for developing UI components</ListItem>
            <ListItem>React, Vue, Angular</ListItem>
            <ListItem>Component Sandbox</ListItem>
          </OrderedList>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            Storybook started in 2016 by a startup in Sri Lanka called Kadira,
            that was focused on Meteor development. It was eventually handed off
            to the open source community in April 2017. It's popular for a
            number of reasons, including it's pretty aggressive cadence for
            releasing improvements.
          </Text>
          <Text fontSize="2rem">
            It's really an environment for developing, defining and testing your
            UI components. It allows you to show different versions of the
            component via "stories." It's great for creating components in
            isolation, and then being able to put them together in working
            applications.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-between" flexGrow={1}>
          <Heading fontSize="4rem" textAlign="left">
            Interactive <br /> Documentation
          </Heading>
          <Box>
            <Image alt="npm" src={checkboxGif} width="95%" />
          </Box>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            One of the great features of Storybook is its interactive
            Documentation. React-docgen builds prop tables for each component,
            and then we can interact with them like a playground to show
            different states of each component, without changing any code. This
            is great for designers and those developers that aren't closely tied
            to and invested in stylekit development. It gives them a quick way
            to gain knowledge about a component without having to dig into the
            code.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Code Snippets
          </Heading>
          <FlexBox justifyContent="space-evenly" width="100%">
            <Image src={codeSnippet} />
          </FlexBox>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            Each story will display the code snippet that is responsible for
            that particular component state. This is super-handy for developers,
            so they can just copy and paste right from storybook, so they can
            get a quick start when using that component in context.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1}>
          <Heading fontSize="5rem">Who are our Customers?</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <FlexBox justifyContent="space-evenly" flexGrow={1}>
          <Heading fontSize="5rem" textAlign="left">
            Stylekit Customers
          </Heading>
          <OrderedList>
            <ListItem>Treasure Data Customers 💪</ListItem>
            <ListItem>UX Team 🎨</ListItem>
            <ListItem>Frontend Team 👩‍🎤</ListItem>
          </OrderedList>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            Of course our customers are TD customers. We want to give them a
            seamless, hassle-free experience. For UX, our goal is to build our
            components as faithfully to their specifications as possible. I like
            to think of Stylekit as really a collaboration between UX and FE.
            Honestly, stylekit wouldn't exist without them. Finally, one of our
            most important customer is the FE team itself. If we make components
            they won't use, what is the point of stylekit?
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          flexGrow={1}
          alignContent="baseline"
          justifyContent="space-evenly"
        >
          <Heading fontSize="5rem">Goal</Heading>
          <Box width="60%">
            <Text fontWeight={700} fontSize="4.5rem">
              Fantastic Developer Experience ✨
            </Text>
          </Box>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            Over the past year of leading the Stylekit team, I've come to
            realize that our over-arching goal is to create a fantastic
            developer experience.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1}>
          <Image src={todo} />
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            This is the challenge!!! How to create components that not only meet
            specs, but are straightforward and intuitive to use. It's not enough
            to create something that just works.
          </Text>
          <Text fontSize="2rem">
            I'm going to walk through the component development process through
            the lens of a recent chart we created for the Predictive Scoring
            project...a Histogram.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox
          justifyContent="space-evenly"
          flexGrow={1}
          flexDirection="column"
        >
          <Heading fontSize="4rem" textAlign="left">
            Start with Design
          </Heading>
          <FlexBox justifyContent="space-evenly" width="80%">
            <FlexBox>
              <Image src={histoOne} />
            </FlexBox>
            <FlexBox flexDirection="column">
              <Image src={tooltips} />
              <Image src={direction} width="95%" />
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            So, step one is really...start with the Design. We collaborate with
            the UX team on a project to come up with a game plan. They design
            something amazing, we work with them to decide what is possible, and
            what is practical. Just because something is possible, doesn't
            necessaryily mean it should be implemented, from an engineering
            standpoint. We want to create components that are robust, extensible
            and durable... i.e. not Buggy.
          </Text>
          <Text fontSize="2rem">
            We work with design and iterate, and iterate and iterate until we
            come up with something that we both think is great and doable. Oh,
            and then we iterate some more. An important part of the process is
            really knowing that things will change over time.
          </Text>
          <Text fontSize="2rem">
            So from this "semi-final" version from design, I like to make a
            checklist of features that I need to implement. So, looking at the
            histogram, I know that in addition to regular chart-type things, I
            need to have some extra dependent axes, I need the bars to be able
            to vary in color, and I need to be able to stack sets of data.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="4rem">Write TODO Tests</Heading>
          <Image src={todoTests} width="70%" />
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            From that checklist, I like to make some "TODO" tests. This is
            really just a checklist in code form. It gives me a specific set of
            steps to follow to reach my goal. It's a loose interpretation of
            TDD, but it's been super useful for me as an engineer. It helps keep
            me focused, and from going down rabbit holes.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="3rem">Look for API Design Inspiration</Heading>
          <FlexBox justifyContent="space-evenly" width="100%" flexGrow={1}>
            <FlexBox flexDirection="column">
              <Image src={material} />
            </FlexBox>
            <FlexBox
              flexDirection="column"
              height="100%"
              justifyContent="space-evenly"
            >
              <Image src={primer} />
              <Image src={base} />
              <Image src={reach} />
            </FlexBox>
            <FlexBox flexDirection="column">
              <Image src={semantic} />
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            So, not only do we need to create a chart, right? We need to create
            a chart that has an API that is pretty easy to use. I love looking
            at other component libraries for inspiration. This inspiration is
            two-fold. One, if I'm trying to implement a piece of functionality
            in one of my components, it's nice to see how a different library
            accomplished the same thing. Second, and most importantly, what does
            that component's API look like? How do they go from a component that
            works, to a component that others will gladly use. There are lots of
            really smart engineers that have probably already solved the same
            problem I'm trying to solve, so I'm going to lean on their
            expertise. Back when I was a singer, and playing Eliza Doolittle in
            My Fair Lady, I watched Audrey Hepburn, because you know what? She
            really knew what she was doing.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="4rem">Make it Flexible</Heading>
          <FlexBox justifyContent="space-evenly" flexGrow={1}>
            <Image src={histoTwo} width="45%" />
            <Image src={histoThree} width="45%" />
          </FlexBox>
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            Next step is to make that component flexible. If there is anything
            that developing in general that I've learned, it's that we're always
            going to be changing and refactoring. The same goes for component
            libraries. There will always be new use cases that arise, and it's
            good to think of the future when developing. (Storybook really helps
            with this). So, for example, we didnt' just create a histogram that
            rendered specifically 2 sets of data in multi-colors. It can render
            one set of data. It can change colors, it can include the dependent
            axes or not. It has a sorting function if the developer needs to
            change the order of their data sets. Does it need to be combined
            with a slider? No way.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="4rem">Document</Heading>
          <Image src={document} width="70%" />
        </FlexBox>
        <Notes>
          <Text fontSize="2rem">
            This is one of the big efforts we've tried to improve about Stylekit
            in general. William Gonzalez on my team has really helped us
            incorporate the latest Storybook improvements so that we can better
            document our components.
          </Text>
          <Text fontSize="2rem">
            Like I mentioned previously, React-docgen publishes prop tables for
            each component, what the type is, and we can interact with those
            tables thanks to Storybook. React-docgen will also parse out our
            comments for each prop type, so that we can give even more
            information to developers.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="4rem">Done! 🎉</Heading>
          <Image src={build} width="70%" />
        </FlexBox>
        <Notes>
          <Text>And then everything's perfect.</Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1} flexDirection="column">
          <Heading fontSize="4rem">Evangelize</Heading>
          <Image src={evangelize} width="70%" />
        </FlexBox>
        <Notes>
          <Text>
            Just kidding. In addition to building and documenting those
            components, we have to communicate about them. If you build it,
            honestly, the developers aren't just going to fawn over you
            incessantly. You need to teach them how to use it.
          </Text>
          <Text>
            We've recently started a weekly series of "Stylekit tips" videos
            that we share with development and design folks. It's a fun way to
            communicate what we're doing, and gives devs bite-sized info that
            they can refer back to later. I'll introduce a component and its
            features, do a refactor using a new component, or just talk about
            features about particular components that maybe devs don't know
            about, but could really help them in their work. We collect all of
            these videos on a page in Confluence, and there's a place where
            developers can make suggestions for future videos that they'd like
            to see.
          </Text>
          <Text>
            As a frontend team, we've been very busy over the past year building
            out td-crystal. At the same time, we've been pushing ourselves to
            get much better at writing documentation. One of the most gratifying
            things that happened to me recently, was linking out to some
            documentation that I wrote to one of my colleagues, that I thought
            probably no one but me or my team might ever need, but they did, and
            now we have this process well-documented, so people without the full
            context can accomplish the task.
          </Text>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox flexGrow={1}>
          <Heading fontSize="5rem">Thank you! 👋</Heading>
        </FlexBox>
      </Slide>
    </Deck>
  )
}
export default App
